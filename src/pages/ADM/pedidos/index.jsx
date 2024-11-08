import './index.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SideBar from '../../../component/barra_lateral';
export default function Pedidos() {
    const [token, setToken] = useState(null);
    const [adicionando, setAdicionando] = useState(false);
    const [barraVisivel, setBarraVisivel] = useState(true);
   

    const [dadosFormulario, setDadosFormulario] = useState({
        nome: '',
        valor: '',
        datai: '',
        dataf: '',
        telefone1: '',
        telefone2: '',
        email1: '',
        email2: ''
    });
    const [pedidos, setPedidos] = useState([]);
    const navegar = useNavigate();
    
    const alternarAdicionarPedido = () => {
        setAdicionando(!adicionando);
        setBarraVisivel(!barraVisivel);
        setDadosFormulario({
            nome: '',
            valor: '',
            datai: '',
            dataf: '',
            telefone1: '',
            telefone2: '',
            email1: '',
            email2: ''
        });
    };
    
    const alterarEntrada = (e) => {
        const { name, value } = e.target;
        setDadosFormulario((dadosAnteriores) => ({ ...dadosAnteriores, [name]: value }));
    };
    
    const salvarPedido = async () => {
        const formatarData = (data) => data ? new Date(data).toISOString().split('T')[0] : null;
        
        const novoPedido = {
            nome: dadosFormulario.nome.trim(),
            preco: parseFloat(dadosFormulario.valor) || 0,
            comeco: formatarData(dadosFormulario.datai),
            fim: formatarData(dadosFormulario.dataf),
            telefone: dadosFormulario.telefone1.trim(),
            telefone2: dadosFormulario.telefone2.trim(),
            email: dadosFormulario.email1.trim(),
            email2: dadosFormulario.email2.trim()
        };

        if (!novoPedido.nome || !novoPedido.comeco || !novoPedido.fim || !novoPedido.telefone || !novoPedido.email) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        try {
            await axios.post(`http://localhost:1234/orders/create?x-access-token=${token}`, novoPedido);
            alternarAdicionarPedido();
            await carregarPedidos(token);
        } catch (error) {
            console.error("Erro ao salvar pedido:", error);
        }
    };

    const [apagar, setApagar] = useState(true)
    const [abrir, setAbrir] = useState(true)

    async function apagarl(id){
        const resposta = await axios.delete(`http://localhost:1234/orders/delete?x-access-token=${token}&id=${}`);
        
    }
    
    const carregarPedidos = async (token) => {
        try {
            const resposta = await axios.get(`http://localhost:1234/orders/list?x-access-token=${token}`);
            console.log("Pedidos sem filtro:", resposta.data);
            setPedidos(resposta.data);
        } catch (error) {
            console.error("Erro ao carregar pedidos:", error);
        }
    };

    const formatarDataParaExibicao = (data) => {
        const dataObj = new Date(data);
        const dia = String(dataObj.getDate()).padStart(2, '0');
        const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
        const ano = dataObj.getFullYear();
        return `${dia}/${mes}/${ano}`;
    };

    useEffect(() => {
        const tokenSalvo = localStorage.getItem('USUARIO');
        setToken(tokenSalvo);
        
        if (!tokenSalvo) {
            navegar('/login');
        } else {
            carregarPedidos(tokenSalvo);
        }
    }, [navegar]);

    const PedidoCard = ({ pedido }) => (
        <div>


        {apagar === true && 


        <div className="card">
        <div className="header">
          <h2>{pedido.nome}</h2>
          <span className="numero">nº {pedido.id_agendamento}</span>
        </div>
        <div className="sla">
          <p className="preço">Budget: ${pedido.preco}</p>
          <p>Start date:  {formatarDataParaExibicao(pedido.comeco)}</p>
          <p>Order deadline:  {formatarDataParaExibicao(pedido.fim)}</p>
        </div>
        <div className="linhaf">
          <button className="contato" onClick={abrir}>Contact ▼</button>
          <div className="icons">
            <img className='edit' src="./assets/images/lapis.png" alt="" />
            <img className='lixeira' src="./assets/images/vector.png" onClick={apagarl()} alt=""  />
          </div>
        </div>
      </div>
        }

    </div>
    );

    return (
        <div className="pedido-mae">
            <div className="pedidos">
                <SideBar opa="1" />
                <div className="top">
                    {barraVisivel && (
                        <div className="add">
                            <div className="tb">
                                <p>Filtrar por:</p>
                                <div className="grupo">
                                    {['preço', 'Prazo', 'Nome', 'nº'].map((filtro, index) => (
                                        <div className="filtros" key={index}>
                                            <p>{filtro}</p>
                                            <img src="./assets/images/vector 75.png" alt="" />
                                        </div>
                                    ))}
                                </div>
                                <div className="input">
                                    <img src="./assets/images/magnifying-glass 1.png" alt="" />
                                    <input type="text" placeholder="Pesquisar algo" />
                                </div>
                            </div>
                            <img src="./assets/images/botao-adicionar.png" alt="Adicionar" onClick={alternarAdicionarPedido} />
                        </div>
                    )}
                    {adicionando && (
                        <div className="cardP">
                            <div className="esq">
                                <div>
                                    <h1>Nome</h1>
                                    <input
                                        className="a"
                                        type="text"
                                        name="nome"
                                        placeholder="Digite o nome"
                                        value={dadosFormulario.nome}
                                        onChange={alterarEntrada}
                                        required
                                    />
                                </div>
                                <div>
                                    <h1>Orçamento</h1>
                                    <input
                                        className="a"
                                        type="number"
                                        name="valor"
                                        placeholder="Digite o orçamento"
                                        value={dadosFormulario.valor}
                                        onChange={alterarEntrada}
                                        required
                                    />
                                </div>
                                <div>
                                    <h1>Data de início</h1>
                                    <input
                                        className="a"
                                        type="date"
                                        name="datai"
                                        value={dadosFormulario.datai}
                                        onChange={alterarEntrada}
                                        required
                                    />
                                </div>
                                <div>
                                    <h1>Data de fim</h1>
                                    <input
                                        className="a"
                                        type="date"
                                        name="dataf"
                                        value={dadosFormulario.dataf}
                                        onChange={alterarEntrada}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="dir">
                                <div>
                                    <h1>Telefone</h1>
                                    <input
                                        className="a"
                                        type="tel"
                                        name="telefone1"
                                        placeholder="Digite o telefone"
                                        value={dadosFormulario.telefone1}
                                        onChange={alterarEntrada}
                                        required
                                    />
                                </div>
                                <div>
                                    <h1>Email</h1>
                                    <input
                                        className="a"
                                        type="email"
                                        name="email1"
                                        placeholder="Digite o email"
                                        value={dadosFormulario.email1}
                                        onChange={alterarEntrada}
                                        required
                                    />
                                </div>
                                <div>
                                    <h1>Telefone opcional</h1>
                                    <input
                                        className="a"
                                        type="tel"
                                        name="telefone2"
                                        placeholder="Digite o telefone opcional"
                                        value={dadosFormulario.telefone2}
                                        onChange={alterarEntrada}
                                    />
                                </div>
                                <div>
                                    <h1>Email opcional</h1>
                                    <input
                                        className="a"
                                        type="email"
                                        name="email2"
                                        placeholder="Digite o email opcional"
                                        value={dadosFormulario.email2}
                                        onChange={alterarEntrada}
                                    />
                                </div>
                            </div>
                            <div className="botao">
                                <h3 onClick={salvarPedido}>Salvar</h3>
                                <h3 className="cancel" onClick={alternarAdicionarPedido}>Cancelar</h3>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {barraVisivel && (
                <div className="pedidos_comp">
                    <ul>
                        {pedidos.map((pedido) => (
                            <li key={pedido.id_agendamento}>
                                <PedidoCard pedido={pedido} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
