import './index.scss';


import { useState } from 'react';


export default function Config() {

    const [ nome, setNome ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ enderesso, setEnderesso ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ telefone, setTelefone ] = useState('');
    const [ imagem, setImagem ] = useState('');

    return(
        <div className='config'>
            <h1>Personal information</h1>

            <hr/>

            <div className='foto'>
                <img src="./assets/images/do-utilizador.png" alt="" />

                <h6>Mudar foto de perfil</h6>
            </div>
            
            <div className='quadrado'>
                <coluna_esq>
                    <div>
                        <h1>Name</h1>

                        <input type="text" />
                    </div>

                    <div>
                        <h1>Password</h1>

                        <input type="text" />
                    </div>

                    <div>
                        <h1>E-mail</h1>

                        <input type="text" />
                    </div>
                </coluna_esq>
        
                <coluna_dir>


                    <div>
                        <h1>CPF</h1>

                        <input type="text" />
                    </div>

                    <div>
                        <h1>Address</h1>

                        <input type="text" />
                    </div>

                    <div>
                        <h1>telephone</h1>

                        <input type="text" />
                    </div>
                </coluna_dir>

            </div>



            <div className="acessibilidade">
            <h1>Personal information</h1>

            <hr/>

            </div>
        </div>
    )
};