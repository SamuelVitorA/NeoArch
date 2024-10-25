import './index.scss';


import { useState, useEffect } from 'react';
import axios from 'axios';

import SideBar from '../../../component/barra_lateral';


export default function Config() {

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [endereco, setendereco] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [imagem, setImagem] = useState('./assets/images/do-utilizador.png')
    const [editar, setEditar] = useState(false);
    const [tema, setTema] = useState(false);

    const teste = true;

    async function verificaruser() {
        let resposta = await axios.get("http://localhost:1234/verinfo?id=1")
        setNome(resposta.data.nome)
        setCpf(resposta.data.cpf)
        setSenha(resposta.data.senha)
        setendereco(resposta.data.endereco)
        setEmail(resposta.data.email)
        setTelefone(resposta.data.telefone)
        setImagem(resposta.data.foto)
        return resposta.data
    }

    useEffect(() => {
        verificaruser()
    }, [])

    function mudartema() {
        setTema(!tema)
    }

    function alterando() {
        let data = {
            foto: imagem,
            nome: nome,
            cpf: cpf,
            endereco: endereco,
            email: email,
            telefone: telefone,
            senha: senha
        }
        let resposta = axios.put(`http://localhost:1234/alterar?id=1`, data)
        alert('sucesso')
    }

    function alterarImagem(e) {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagem(reader.result);
            };

            reader.readAsDataURL(file);
        }
    }

    return (
        <div className='config'>

            <SideBar
                nome='samuel'
                opa="2"
            />

            <div className='div'>
                <h1>Personal information</h1>

                <hr />

                <div className='foto'>

                <div>
                    <img src={imagem} alt="" />
                    <input type="file" accept="*image/*" id="id-insert" onChange={alterarImagem}></input>
                </div>
                    

                </div>

                <div className='atum'>
                    <div className='quadrado'>

                        <coluna_esq>
                            <div className='ab'>
                                <h1>Name</h1>
                                <input type="text" placeholder='samuel' value={nome} onChange={(e) => setNome(e.target.value)} />
                            </div>

                            <div className='ab'>
                                <h1>Password</h1>

                                <input type="text" placeholder='1234...' value={senha} onChange={(e) => setSenha(e.target.value)} />
                            </div>

                            <div className='ab'>
                                <h1>E-mail</h1>

                                <input type="text" placeholder='samuelvitor@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </coluna_esq>

                        <coluna_dir>
                            <div className='ab'>
                                <h1>CPF</h1>

                                <input type="text" placeholder='000.000.000-00' value={cpf} onChange={(e) => setCpf(e.target.value)} />
                            </div>

                            <div className='ab'>
                                <h1>Address</h1>

                                <input type="text" placeholder='Rua café...' value={endereco} onChange={(e) => setendereco(e.target.value)} />
                            </div>

                            <div className='ab'>
                                <h1>telephone</h1>

                                <input type="text" placeholder='11 00000-0000' value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                            </div>
                        </coluna_dir>
                    </div>
                    <h1 className='save' onClick={alterando}>save</h1>

                </div>



                <div className="acessibilidade">
                    <h1 className='a'>Accessibility</h1>

                    <hr />

                    <div className='ativar'>
                        <h3>Activate Notification</h3>
                        <div className="toggle">
                            <input type="checkbox" />
                        </div>
                    </div>

                    <hr />

                    <div className='ativar'>
                        <h3>Night mode</h3>
                        <div className="toggle">
                            <input onClick={mudartema} type="checkbox" />
                        </div>
                    </div>

                    <hr />

                    <div className='ativar'>
                        <h3>Change language</h3>
                        <h3>Change</h3>
                    </div>
                    <hr />

                    <div className='linha'>
                        <h2>Register Account</h2>
                        <h2>Choose Account</h2>
                        <h2 className='red'>Delete Account</h2>
                    </div>

                </div>

            </div>
        </div>
    )
}