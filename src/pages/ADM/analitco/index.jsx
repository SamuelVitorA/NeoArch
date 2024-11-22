import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './index.scss';
import SideBar from '../../../component/barra_lateral';

export default function Analitics() {
  const [token, setToken] = useState(null);
  const [pedidos, setPedidos] = useState([]);
  const [anosDisponiveis, setAnosDisponiveis] = useState([]);
  const [totalLucro, setTotalLucro] = useState(0);
  const [totalPedidos, setTotalPedidos] = useState(0);
  const [totalClientes, setTotalClientes] = useState(0);
  const [anoSelecionado, setAnoSelecionado] = useState(new Date().getFullYear());
  const [graficoSelecionado, setGraficoSelecionado] = useState('lucro');
  const navigate = useNavigate();

  async function buscarDados() {
    try {
      const resposta = await axios.get(`http://localhost:5022/orders/list?x-access-token=${token}`);
      const dados = resposta.data;
      if (!dados || dados.length === 0) return console.warn("Nenhum pedido encontrado");

      const anosInicio = new Set(), anosFim = new Set();
      dados.forEach((pedido) => {
        if (pedido.comeco) anosInicio.add(new Date(pedido.comeco).getFullYear());
        if (pedido.fim) anosFim.add(new Date(pedido.fim).getFullYear());
      });

      setAnosDisponiveis(Array.from(new Set([...anosInicio, ...anosFim])).sort((a, b) => b - a));
      setPedidos(dados);
      atualizarDadosAno(dados);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  function atualizarDadosAno(dados) {
    const pedidosAnoInicio = dados.filter((pedido) => new Date(pedido.comeco).getFullYear() === anoSelecionado);
    setTotalPedidos(pedidosAnoInicio.length);
    setTotalClientes(new Set(pedidosAnoInicio.map((pedido) => pedido.nome)).size);

    const pedidosAnoFim = dados.filter((pedido) => new Date(pedido.fim).getFullYear() === anoSelecionado);
    setTotalLucro(pedidosAnoFim.reduce((acc, pedido) => acc + parseFloat(pedido.preco), 0));
  }

  useEffect(() => {
    const usuario = localStorage.getItem('USUARIO');
    setToken(usuario);
    if (!usuario) navigate('/login');
    else buscarDados();
  }, [token, anoSelecionado]);

  useEffect(() => { if (pedidos.length > 0) atualizarDadosAno(pedidos); }, [anoSelecionado]);

  const meses = Array.from({ length: 12 }, (_, index) => ({
    mes: new Date(0, index).toLocaleString('default', { month: 'short' }),
    valor: 0,
  }));

  const vendasMensais = meses.map((m, index) => {
    const valor = pedidos.reduce((acc, pedido) => {
      const fimData = new Date(pedido.fim);
      return fimData.getFullYear() === anoSelecionado && fimData.getMonth() === index
        ? acc + parseFloat(pedido.preco)
        : acc;
    }, 0);
    return { mes: m.mes, valor };
  });

  const pedidosMensais = meses.map((m, index) => {
    const valor = pedidos.reduce((acc, pedido) => {
      const comecoData = new Date(pedido.comeco);
      return comecoData.getFullYear() === anoSelecionado && comecoData.getMonth() === index
        ? acc + 1
        : acc;
    }, 0);
    return { mes: m.mes, valor };
  });

  const clientesMensais = meses.map((m, index) => {
    const valor = new Set(pedidos.reduce((acc, pedido) => {
      const comecoData = new Date(pedido.comeco);
      if (comecoData.getFullYear() === anoSelecionado && comecoData.getMonth() === index) {
        acc.add(pedido.nome);
      }
      return acc;
    }, new Set()));
    return { mes: m.mes, valor: valor.size };
  });

  function calcularVariacao(mensais) {
    const valoresComDados = mensais.filter((item) => item.valor > 0).map((item) => item.valor);
    if (valoresComDados.length < 2) return 0;
    const media = valoresComDados.slice(0, -1).reduce((acc, valor) => acc + valor, 0) / (valoresComDados.length - 1);
    const ultimoValor = valoresComDados[valoresComDados.length - 1];
    return ((ultimoValor - media) / media) * 100;
  }

  const variacaoLucro = calcularVariacao(vendasMensais);
  const variacaoPedidos = calcularVariacao(pedidosMensais);
  const variacaoClientes = calcularVariacao(clientesMensais);

  function obterDadosGrafico() {
    switch (graficoSelecionado) {
      case 'pedidos': return pedidosMensais;
      case 'clientes': return clientesMensais;
      default: return vendasMensais;
    }
  }

  const classVariacao = (variacao) => variacao === 0 ? "gray" : variacao > 0 ? "green" : "red";

  const alterarGrafico = (tipo) => setGraficoSelecionado(tipo);

  return (
    <div className="painel">
      <SideBar opa="0" />
      <div className='conteudo'>
        <section className="filtros">
          <label htmlFor="ano">Select year:</label>
          <select id="ano" value={anoSelecionado} onChange={(e) => setAnoSelecionado(parseInt(e.target.value))}>
            {anosDisponiveis.map((ano) => <option key={ano} value={ano}>{ano}</option>)}
          </select>
        </section>

        <section className="info">
          <div className={`card ${graficoSelecionado === 'lucro' ? 'chosen' : ''}`} onClick={() => alterarGrafico('lucro')}>
            <span>Total earned</span>
            <h2>R$ {totalLucro.toLocaleString('english', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h2>
            <small className={classVariacao(variacaoLucro)}>
              {variacaoLucro.toFixed(2)}% per/mth
            </small>
          </div>

          <div className={`card ${graficoSelecionado === 'pedidos' ? 'chosen' : ''}`} onClick={() => alterarGrafico('pedidos')}>
            <span>Total orders</span>
            <h2>{totalPedidos}</h2>
            <small className={classVariacao(variacaoPedidos)}>
              {variacaoPedidos.toFixed(2)}% per/mth
            </small>
          </div>

          <div className={`card ${graficoSelecionado === 'clientes' ? 'chosen' : ''}`} onClick={() => alterarGrafico('clientes')}>
            <span>Total customers</span>
            <h2>{totalClientes}</h2>
            <small className={classVariacao(variacaoClientes)}>
              {variacaoClientes.toFixed(2)}% per/mth
            </small>
          </div>
        </section>

        <section className="grafico">
          <h2>{graficoSelecionado === 'lucro' ? 'Total earned' : graficoSelecionado === 'pedidos' ? 'Total orders' : 'Total customers'}</h2>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart data={obterDadosGrafico()} margin={{ top: 0, right: 20, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="mes"
                interval={0}
                tick={{ fontSize: 12 }}
                angle={0}
                textAnchor="middle"
              />
              <YAxis tickFormatter={(value) => graficoSelecionado === 'lucro' ? `R$ ${value}` : value} />
              <Tooltip
                labelFormatter={(label) => `Mês: ${label}`}
                formatter={(value) => [`R$ ${value}`, graficoSelecionado === 'lucro' ? 'Lucro' : graficoSelecionado === 'pedidos' ? 'Pedidos' : 'Clientes']}
              />
              <Bar dataKey="valor" fill="#000" />
            </BarChart>
          </ResponsiveContainer>
        </section>
      </div>
    </div>
  );
}
