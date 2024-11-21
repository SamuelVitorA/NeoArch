import './index.scss';
import { useState, useEffect } from 'react';
import SideBar from '../../../component/barra_lateral';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Pedidos() {
    const [token, setToken] = useState(null);
    const [pedidos, setPedidos] = useState([]);
    const [pedidosFiltrados, setPedidosFiltrados] = useState([]);
    const [filtroAtivo, setFiltroAtivo] = useState(null);
    const [range, setRange] = useState({ min: 0, max: 0 });
    const [pesquisa, setPesquisa] = useState('');
    const [ordenacao, setOrdenacao] = useState('');
    const [tipoData, setTipoData] = useState('comeco');
    const navegar = useNavigate();
    const [cardDestaque, setCardDestaque] = useState(null);
    const [modoEdicao, setModoEdicao] = useState(null);
    const [novoPedido, setNovoPedido] = useState(null);
    const [adicionando, setAdicionando] = useState(false);


    const iniciarEdicao = (pedido) => {
        setModoEdicao(pedido.id_agendamento);
        setNovoPedido({ ...pedido });
    };


    const salvarEdicao = async (id) => {
        try {
            const validarData = (data) => {
                const timestamp = Date.parse(data);
                return !isNaN(timestamp) ? new Date(timestamp) : null;
            };

            const comecoValidado = validarData(novoPedido.comeco);
            const fimValidado = validarData(novoPedido.fim);

            const pedidoFormatado = {
                ...novoPedido,
                comeco:
                    comecoValidado.toISOString().split('T')[0] +
                    ' ' +
                    comecoValidado.toISOString().split('T')[1].slice(0, 8),
                fim:
                    fimValidado.toISOString().split('T')[0] +
                    ' ' +
                    fimValidado.toISOString().split('T')[1].slice(0, 8),
            };

            const resposta = await axios.put(
                `http://localhost:1234/orders/update?x-access-token=${token}&id=${id}`,
                pedidoFormatado
            );
            console.log(resposta);
            
            carregarPedidos(token);
            setModoEdicao(null);
            setNovoPedido(null);
        } catch (error) {
            console.error('Erro ao salvar pedido:', error);
            alert('Erro ao salvar o pedido. Verifique os dados e tente novamente.');
        }
    };

    const cancelarEdicao = () => {
        setModoEdicao(null);
        setNovoPedido(null);
    };

    const destacarCard = (id) => {
        setCardDestaque(cardDestaque === id ? null : id);
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

    const carregarPedidos = async (tokenAtual) => {
        try {
            const resposta = await axios.get(`http://localhost:1234/orders/list?x-access-token=${tokenAtual}`);
            setPedidos(resposta.data);
            setPedidosFiltrados(resposta.data);
        } catch (error) {
            console.error('Erro ao carregar pedidos:', error);
            alert('Erro ao carregar pedidos.');
        }
    };

    const formatarData = (data) => {
        const dataObj = new Date(data);
        return dataObj.toLocaleDateString('pt-BR');
    };

    const valoresPossiveis = () => {
        if (!filtroAtivo || filtroAtivo === 'Nome') return [];
        const valores = pedidos.map((pedido) =>
            filtroAtivo === 'Price'
                ? pedido.preco
                : filtroAtivo === 'nº'
                    ? pedido.id_agendamento
                    : new Date(pedido[tipoData]).getTime()
        );
        return [...new Set(valores)].sort((a, b) => a - b);
    };

    const ajustarIntervaloSlider = () => {
        const valores = valoresPossiveis();
        if (valores.length > 0) {
            setRange({ min: valores[0], max: valores[valores.length - 1] });
        } else {
            setRange({ min: 0, max: 0 });
        }
    };

    const aplicarFiltros = () => {
        let filtrados = [...pedidos];

        if (filtroAtivo && filtroAtivo !== 'Nome') {
            filtrados = filtrados.filter((pedido) => {
                const valor =
                    filtroAtivo === 'Price'
                        ? pedido.preco
                        : filtroAtivo === 'nº'
                            ? pedido.id_agendamento
                            : new Date(pedido[tipoData]).getTime();
                return valor >= range.min && valor <= range.max;
            });
        }

        if (pesquisa.trim()) {
            const pesquisaFormatada = pesquisa.toLowerCase();
            filtrados = filtrados.filter((pedido) => {
                const pesquisaComoNumero = Number(pesquisa);
                const pesquisaComoData =
                    pesquisa.length === 4 && !isNaN(pesquisaComoNumero);

                return (
                    pedido.nome.toLowerCase().includes(pesquisaFormatada) ||
                    pedido.id_agendamento.toString().includes(pesquisaFormatada) ||
                    pedido.preco.toString().includes(pesquisaFormatada) ||
                    (!pesquisaComoData &&
                        (formatarData(pedido.comeco).includes(pesquisaFormatada) ||
                            formatarData(pedido.fim).includes(pesquisaFormatada))) ||
                    (pesquisaComoData &&
                        (new Date(pedido.comeco).getFullYear().toString() === pesquisa ||
                            new Date(pedido.fim).getFullYear().toString() === pesquisa))
                );
            });
        }

        if (ordenacao) {
            filtrados.sort((a, b) => {
                if (ordenacao === 'alfabetica') return a.nome.localeCompare(b.nome);
                if (ordenacao === 'reversa') return b.nome.localeCompare(a.nome);
                if (ordenacao === 'crescente') return a.preco - b.preco;
                if (ordenacao === 'decrescente') return b.preco - a.preco;
                return 0;
            });
        }

        setPedidosFiltrados(filtrados);
    };


    useEffect(() => {
        aplicarFiltros();
    }, [filtroAtivo, range, pesquisa, ordenacao, tipoData, pedidos]);

    useEffect(() => {
        if (filtroAtivo && filtroAtivo !== 'Nome') {
            ajustarIntervaloSlider();
        } else {
            setRange({ min: 0, max: 0 });
        }
    }, [filtroAtivo, pedidos]);

    const resetarFiltros = (novoFiltro = null) => {
        setFiltroAtivo(novoFiltro);
        setOrdenacao('');
        setPesquisa('');
        if (novoFiltro && novoFiltro !== 'Nome') {
            const valores = valoresPossiveis();
            if (valores.length > 0) {
                setRange({ min: valores[0], max: valores[valores.length - 1] });
            }
        } else {
            setRange({ min: 0, max: 0 });
        }
    };

    const limparFiltros = () => {
        setFiltroAtivo(null);
        setRange({ min: 0, max: 0 });
        setOrdenacao('');
        setPesquisa('');
        setPedidosFiltrados(pedidos);
    };

    const removerPedido = async (id) => {
        try {
            await axios.delete(`http://localhost:1234/orders/delete?x-access-token=${token}&id=${id}`);
            setPedidos(pedidos.filter((pedido) => pedido.id_agendamento !== id));
            setPedidosFiltrados(pedidosFiltrados.filter((pedido) => pedido.id_agendamento !== id));
        } catch (error) {
            console.error('Erro ao remover pedido:', error);
            alert('Erro ao remover pedido.');
        }
    }
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

    const alternarAdicionarPedido = () => {
        setAdicionando(!adicionando);
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
    const alterarEntrada = (e) => {
        const { name, value } = e.target;
        setDadosFormulario((dadosAnteriores) => ({ ...dadosAnteriores, [name]: value }));
    };
    return (
        <div className="pedidos-container">
            <SideBar opa="1" />
            <div className="top-bar">
                <div className='itens'>
                    <div className="filtros">
                        {['Price', 'Date', 'Name', 'nº'].map((filtro) => (
                            <button
                                key={filtro}
                                className={`filtro-btn ${filtroAtivo === filtro ? 'ativo' : ''}`}
                                onClick={() => resetarFiltros(filtro)}
                            >
                                {filtro} ▼
                            </button>
                        ))}
                    </div>
                    <div className='pesquisa'>
                        <img src="./assets/images/magnifying-glass 1.png" alt="sla" />
                        <input
                            type="text"
                            placeholder="Pesquise qualquer coisa"
                            value={pesquisa}
                            onChange={(e) => setPesquisa(e.target.value)}
                        />
                    </div>
                    <button className="limpar-filtros" onClick={limparFiltros}>
                        Limpar Filtros
                    </button>
                    <button className="adicionar" onClick={alternarAdicionarPedido}>
                        <span>+</span>
                    </button>
                </div>
                <div className='ordenarEalternar'>
                    {filtroAtivo && (
                        <select
                            className="ordenacao"
                            onChange={(e) => setOrdenacao(e.target.value)}
                            value={ordenacao}
                        >
                            <option value="">Ordenar</option>
                            {filtroAtivo === 'Name' ? (
                                <>
                                    <option value="alfabetica">Alfabética</option>
                                    <option value="reversa">Reversa</option>
                                </>
                            ) : (
                                <>
                                    <option value="crescente">Crescente</option>
                                    <option value="decrescente">Decrescente</option>
                                </>
                            )}
                        </select>
                    )}
                    {filtroAtivo && filtroAtivo !== 'Name' && (
                        <div className="filtro-menu">
                            {filtroAtivo === 'Date' && (
                                <button onClick={() => setTipoData(tipoData === 'comeco' ? 'fim' : 'comeco')}>
                                    Alternar para {tipoData === 'comeco' ? 'Data Final' : 'Data de Início'}
                                </button>
                            )}
                            <div className="slider">
                                <span>{filtroAtivo === 'Date' ? formatarData(range.min) : range.min}</span>
                                <input
                                    type="range"
                                    min={0}
                                    max={valoresPossiveis().length - 1}
                                    value={Math.max(0, valoresPossiveis().indexOf(range.min))}
                                    onChange={(e) =>
                                        setRange({
                                            ...range,
                                            min: valoresPossiveis()[Math.max(0, parseInt(e.target.value))],
                                        })
                                    }
                                />
                                <input
                                    type="range"
                                    min={0}
                                    max={valoresPossiveis().length - 1}
                                    value={Math.min(valoresPossiveis().length - 1, valoresPossiveis().indexOf(range.max))}
                                    onChange={(e) =>
                                        setRange({
                                            ...range,
                                            max: valoresPossiveis()[Math.min(valoresPossiveis().length - 1, parseInt(e.target.value))],
                                        })
                                    }
                                />
                                <span>{filtroAtivo === 'Date' ? formatarData(range.max) : range.max}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
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
                                value={'dadosFormulario'.valor}
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
                                value={'dadosFormulario'.datai}
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
            <div className="pedidos-lista">
                {pedidosFiltrados.map((pedido) => (
                    <div
                        key={pedido.id_agendamento}
                        className={`pedido-card ${cardDestaque === pedido.id_agendamento ? 'destaque' : ''}`}
                        onClick={() => modoEdicao !== pedido.id_agendamento ? destacarCard(pedido.id_agendamento) : ""}
                    >
                        {modoEdicao === pedido.id_agendamento ? (
                            <div className='alterar'>
                                <input
                                    type="text"
                                    value={novoPedido.nome}
                                    onChange={(e) =>
                                        setNovoPedido({ ...novoPedido, nome: e.target.value })
                                    }
                                />
                                <input
                                    type="number"
                                    value={novoPedido.preco}
                                    onChange={(e) =>
                                        setNovoPedido({ ...novoPedido, preco: Number(e.target.value) })
                                    }
                                />
                                <input
                                    type="date"
                                    value={new Date(novoPedido.comeco).toISOString().split('T')[0]}
                                    onChange={(e) =>
                                        setNovoPedido({
                                            ...novoPedido,
                                            comeco: new Date(e.target.value).toISOString(),
                                        })
                                    }
                                />
                                <input
                                    type="date"
                                    value={new Date(novoPedido.fim).toISOString().split('T')[0]}
                                    onChange={(e) =>
                                        setNovoPedido({
                                            ...novoPedido,
                                            fim: new Date(e.target.value).toISOString(),
                                        })
                                    }
                                />
                                <div className="edit_actions">
                                    <button onClick={() => salvarEdicao(pedido.id_agendamento)}>
                                        Confirmar
                                    </button>
                                    <button onClick={cancelarEdicao}>
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className='top'>
                                    <h3>{pedido.nome}</h3>
                                    <p className="card-info">nº {pedido.id_agendamento}</p>
                                </div>
                                <p className="card-info">Price: R${pedido.preco}</p>
                                <p className="card-info">Start date: {formatarData(pedido.comeco)}</p>
                                <p className="card-info">Order deadline: {formatarData(pedido.fim)}</p>
                                <div className="edit_delete">
                                    <button onClick={() => iniciarEdicao(pedido)}>
                                        <img src="./assets/images/lapis.png" alt="Editar" />
                                    </button>
                                    <button onClick={() => removerPedido(pedido.id_agendamento)}>
                                        <img src="./assets/images/vector.png" alt="Apagar" />
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
