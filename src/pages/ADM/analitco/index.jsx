import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './index.scss';
import SideBar from '../../../component/barra_lateral';

export default function Analitics() {
  const [token, setToken] = useState(null);
  const [pedidos, setPedidos] = useState([]);
  const [totalLucro, setTotalLucro] = useState(0);
  const [totalPedidos, setTotalPedidos] = useState(0);
  const [totalClientes, setTotalClientes] = useState(0);
  const [anoSelecionado, setAnoSelecionado] = useState(2024); // Ano atual por padrão

  const navigate = useNavigate();

  async function buscarDados() {
    const url = `http://localhost:1234/orders/list?x-access-token=${token}`;

    try {
      const resposta = await axios.get(url);
      const dados = resposta.data;

      const pedidosAno = dados.filter((pedido) => new Date(pedido.comeco).getFullYear() === anoSelecionado);

      setPedidos(pedidosAno);

      let lucroTotal = 0;
      pedidosAno.forEach((pedido) => {
        lucroTotal += parseFloat(pedido.preco);
      });
      setTotalLucro(lucroTotal);

      const nomesClientes = pedidosAno.map((pedido) => pedido.nome);
      const clientesUnicos = new Set(nomesClientes).size;
      setTotalClientes(clientesUnicos);

      setTotalPedidos(pedidosAno.length);

    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  useEffect(() => {
    const usuario = localStorage.getItem('USUARIO');
    setToken(usuario);

    if (!usuario) {
      navigate('/login');
    } else {
      buscarDados();
    }
  }, [token, anoSelecionado]);

  const vendasMensais = Array.from({ length: 12 }, (_, index) => {
    const mes = index + 1;
    const vendasMes = pedidos
      .filter((pedido) => new Date(pedido.comeco).getMonth() + 1 === mes)
      .reduce((soma, pedido) => soma + parseFloat(pedido.preco), 0);

    return {
      mes: new Date(0, mes - 1).toLocaleString('default', { month: 'short' }),
      Lucro: vendasMes,
    };
  });


  return (
    <div className="painel">
      <SideBar/>
      <section className="filtros">
        <label htmlFor="ano">Selecione o Ano:</label>
        <select
          id="ano"
          value={anoSelecionado}
          onChange={(e) => setAnoSelecionado(parseInt(e.target.value))}
        >
          <option value={2024}>2024</option>
          <option value={2023}>2023</option>
          <option value={2022}>2022</option>
        </select>
      </section>

      <section className="info">
        <div className="card">
          <span>Total sales</span>
          <h2>R$ {totalLucro.toFixed(2)}</h2>
          <small className="green">+10% per/mth</small>
        </div>
        
        <div className="card">
          <span>Total orders</span>
          <h2>{totalPedidos}</h2>
          <small className="red">-10% per/mth</small>
        </div>
        
        <div className="card">
          <span>Total customers</span>
          <h2>{totalClientes}</h2>
          <small>0% per/mth</small>
        </div>
      </section>

      <section className="grafico">
        <h2>Total sales</h2>
        <ResponsiveContainer width="90%" height="100%">
          <BarChart data={vendasMensais}>
            <XAxis dataKey="mes" />
            <YAxis tickFormatter={(value) => `R$${value}`} />
            <Tooltip
              labelFormatter={(label) => `Mês: ${label}`}
              formatter={(value) => [`R$${value}`, "Lucro"]} // Exibe o valor com "R$" ao lado
              contentStyle={{
                backgroundColor: "#fff",
                border: "none",
                borderRadius: "20px",
                color: "#000",
                padding: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"
              }}
            />
            <Bar dataKey="Lucro" fill="#333" />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
};