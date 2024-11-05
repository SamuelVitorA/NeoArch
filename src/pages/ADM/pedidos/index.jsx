import './index.scss';

import { useEffect, useState } from 'react';

import SideBar from '../../../component/barra_lateral';
import Pedido_comp from '../../../component/pedido_comp';
import axios from 'axios';


export default function Pedidos() {
    const [add, setAdd] = useState(false)
    const [sumi, setSumi] = useState(true)

    const [nome, setNome] = useState('')
    const [valor, setValor] = useState(0)
    const [datai, setDatai] = useState('')
    const [dataf, setDataf] = useState('')
    const [telefone1, setTelefone1] = useState('')
    const [telefone2, setTelefone2] = useState('')
    const [email1, setEmail1] = useState('')
    const [email2, setEmail2] = useState('')

    const [nomev, setNomev] = useState('')
    const [valorv, setValorv] = useState(0)
    const [dataiv, setDataiv] = useState('')
    const [datafv, setDatafv] = useState('')
    const [telefone1v, setTelefone1v] = useState('')
    const [telefone2v, setTelefone2v] = useState('')
    const [email1v, setEmail1v] = useState('')
    const [email2v, setEmail2v] = useState('')
    const [id, setId] = useState('')

    const [pedidos, setPedidos] = useState([])

    function addpedido() {

        setAdd(!add)
        setSumi(!sumi)

        setNome('')
        setValor('')
        setDatai('')
        setDataf('')
        setTelefone1('')
        setTelefone2('')
        setEmail1('')
        setEmail2('')
    }

    async function salvar() {
        let data = {
            nome: nome,
            preco: valor,
            comeco: datai,
            fim: dataf,
            telefone: telefone1,
            email: email1,
            telefone2: telefone2,
            email2: email2
        }

        let url = `http://localhost:1234/inserir/pedido`
        let resp = await axios.get(url, data);

        setAdd(!add)
        setSumi(!sumi)

        setNome('')
        setValor('')
        setDatai('')
        setDataf('')
        setTelefone1('')
        setTelefone2('')
        setEmail1('')
        setEmail2('')

        url = `http://localhost:1234/listar/pedidos`
        resp = await axios.get(url);
    
        setPedidos([...pedidos, resp.data])
    }


    return (
        <div className='pedido-mae'>



            <div className='pedidos'>
                <SideBar
                    opa="1"
                />

                <div className='top'>

                    {sumi === true &&

                        <div className='add'>


                            <div className='tb'>
                                <p>Filter by:</p>
                                <div className='grupo'>


                                    <div className='filtros'>
                                        <p>price</p>
                                        <img src="./assets/images/vector 75.png" alt="" />
                                    </div>

                                    <div className='filtros'>
                                        <p>Deadline</p>
                                        <img src="./assets/images/vector 75.png" alt="" />
                                    </div>

                                    <div className='filtros'>
                                        <p>Name</p>
                                        <img src="./assets/images/vector 75.png" alt="" />
                                    </div>

                                    <div className='filtros'>
                                        <p>nº</p>
                                        <img src="./assets/images/vector 75.png" alt="" />
                                    </div>
                                </div>

                                <div className='input'>
                                    <img src="./assets/images/magnifying-glass 1.png" alt="" />
                                    <input type="text" placeholder='Search something' />
                                </div>

                            </div>
                            <img src="./assets/images/botao-adicionar.png" alt="" onClick={addpedido} />


                        </div>
                    }


                    {add === true &&

                        <div className='cardP'>

                            <div className='esq'>

                                <h1>Name</h1>
                                <input className='a' type="text" placeholder='Name' onChange={e => setNome(e.target.value)} />

                                <h1>Budget</h1>
                                <input className='a' type="number" placeholder='Value in reais' onChange={e => setValor(e.target.value)} />

                                <h1>Start date</h1>
                                <input className='a' type="date" onChange={e => setDatai(e.target.value)} />

                                <h1>End date</h1>
                                <input className='a' type="date" onChange={e => setDataf(e.target.value)} />

                            </div>

                            <div className='dir'>

                                <h1>Telephone</h1>
                                <input className='a' type="number" placeholder='customer telefone' onChange={e => setTelefone1(e.target.value)} />

                                <h1>Email</h1>
                                <input className='a' type="text" placeholder='customer email' onChange={e => setEmail1(e.target.value)} />

                                <h1>Optional telephone</h1>
                                <input className='a' type="number" placeholder='customer telefone' onChange={e => setTelefone2(e.target.value)} />

                                <h1>Optional email</h1>
                                <input className='a' type="text" placeholder='customer email' onChange={e => setEmail2(e.target.value)} />

                            </div>

                            <div className='botao'>
                                <h3 onClick={salvar}>Save</h3>
                                <h3 className='cancel' onClick={addpedido}>Cancel</h3>
                            </div>


                        </div>
                    }
                </div>


            </div>

            {sumi === true &&

                <div className='pedidos_comp'>
                    {/*<Pedido_comp
                        nome={nomev} 
                        preço={valorv}
                        datai={dataiv}
                        dataf={datafv}
                        telefone={telefone1v}
                        telefone2={telefone2}
                        email={email1}
                        email2={email2}
                        id={id}       
                    />*/}

                    <ul>

                        {pedidos.map((item) => {
                            <li>
                                <Pedido_comp
                                    nome={item.nome}
                                    preço={item.preco}
                                    datai={item.comeco}
                                    dataf={item.fim}
                                    telefone={item.telefone}
                                    telefone2={item.telefone2}
                                    email={item.email}
                                    email2={item.email2}
                                    id={item.id_agendendamento}

                                />
                            </li>
                        })}

                    </ul>


                </div>
            }
        </div>
    )
}