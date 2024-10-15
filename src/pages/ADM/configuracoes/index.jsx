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
                    <div className='ab'>
                        <h1>Name</h1>
                        <input type="text" placeholder='Samuel Vitor' value={nome} onChange={ (e) => setNome(e.target.value) } />
                    </div>

                    <div className='ab'>
                        <h1>Password</h1>

                        <input type="text" placeholder='1234...' value={nome} onChange={ (e) => setNome(e.target.value)/>
                    </div>

                    <div className='ab'>
                        <h1>E-mail</h1>

                        <input type="text" placeholder='samuelvitor@gmail.com' value={nome} onChange={ (e) => setNome(e.target.value) />
                    </div>
                </coluna_esq>
        
                <coluna_dir>


                    <div className='ab'>
                        <h1>CPF</h1>

                        <input type="text" placeholder='000.000.000-00'/>
                    </div>

                    <div className='ab'>
                        <h1>Address</h1>

                        <input type="text" placeholder='Rua café...' />
                    </div>

                    <div className='ab'>
                        <h1>telephone</h1>

                        <input type="text" placeholder='11 00000-0000'/>
                    </div>
                </coluna_dir>

            </div>



            <div className="acessibilidade">
                <h1 className='a'>Accessibility</h1>

                <hr/>

                <div className='ativar'>
                    <h3>Activate Notification</h3>
                    <div className="toggle">
                            <input type="checkbox"/>
                    </div>
                </div>

                <hr />
                
                <div className='ativar'>
                    <h3>Night mode</h3>
                    <div className="toggle">
                            <input type="checkbox"/>
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
    )
};