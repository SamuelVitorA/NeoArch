import './index.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import SideBar from '../../../component/barra_lateral';

export default function Config() {
    const [token, setToken] = useState(null)
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [imagem, setImagem] = useState('./assets/images/do-utilizador.png');

    const navigate = useNavigate();
    
    async function consultar(token) {
        const url = `http://localhost:1234/verificar?x-access-token=${token}`;
        let resp = await axios.post(url)
        let dados = resp.data.infos
        if(dados.nome){
            setNome(dados.nome)
        }
        if(dados.cpf){
            setCpf(dados.cpf)
        }
        if(dados.endereco){
            setEndereco(dados.endereco)
        }
        if(dados.senha) {
            setSenha(dados.senha)
        }
        if(dados.email) {
            setEmail(dados.email)
        }
        if(dados.telefone) {
            setTelefone(dados.telefone)
        }
        if(dados.foto) {
            setImagem(dados.foto)
        }

    }
    
    useEffect(() => {
        let usu = localStorage.getItem('USUARIO')
        
        setToken(usu);        
        if (usu === undefined || usu === null) {
            navigate('/login'); // Redireciona para login se não houver token
        }
        consultar(usu)
    }, []);


    async function alterando() {
        const url = `http://localhost:1234/alterarinfo?x-access-token=${token}`;
        const dados = { nome, cpf, senha, endereco, email, telefone };

        const resp = await axios.put(url, dados);
    }

    return (
        <div className='config'>
            <SideBar nome='samuel' opa="2" />
            <div className='div'>
                <h1>Personal Information</h1>
                <hr />
                <div className='foto'>
                    <div>
                        <img src={imagem} alt="User" />
                        <input type="file" accept="image/*" id="id-insert" onChange={(e) => setImagem(e.target.files[0])} />
                    </div>
                </div>

                <div className='atum'>
                    <div className='quadrado'>
                        <div className='coluna_esq'>
                            <div className='ab'>
                                <h1>Name</h1>
                                <input type="text" placeholder='type your name' value={nome} onChange={(e) => setNome(e.target.value)} />
                            </div>
                            <div className='ab'>
                                <h1>Password</h1>
                                <input type="password" placeholder='1234...' value={senha} onChange={(e) => setSenha(e.target.value)} />
                            </div>
                            <div className='ab'>
                                <h1>Email</h1>
                                <input type="email" placeholder='samuelvitor@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>

                        <div className='coluna_dir'>
                            <div className='ab'>
                                <h1>CPF</h1>
                                <input type="text" placeholder='000.000.000-00' value={cpf} onChange={(e) => setCpf(e.target.value)} />
                            </div>
                            <div className='ab'>
                                <h1>Address</h1>
                                <input type="text" placeholder='Rua café...' value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                            </div>
                            <div className='ab'>
                                <h1>Telephone</h1>
                                <input type="text" placeholder='11 00000-0000' value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <h1 className='save' onClick={alterando}>Save</h1>
                </div>
            </div>
        </div>
    );
}
