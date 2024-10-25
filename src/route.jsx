import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/ADM/home";
import Analitic from "./pages/ADM/analitco";
import Pedidos from "./pages/ADM/pedidos";
import Config from "./pages/ADM/configuracoes";
import Login from "./pages/loginEcadastro/login";
import Cadastro from "./pages/loginEcadastro/cadastro";
import Mudar_senha from "./pages/loginEcadastro/mudar-senha";
import Esqueceu_senha from "./pages/loginEcadastro/esqueceu-senha";
import Main_empresa from "./pages/main_page/empresa"
import Main_automo from "./pages/main_page/autonomo";
import Not_found from "./pages/Not_Found/index.jsx";

export default function Rotas(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ < Home /> } />

                <Route path="/analitic" element={ < Analitic /> } />

                <Route path="/pedidos" element={ < Pedidos /> } />

                <Route path="/config" element={ < Config /> } />

                <Route path="/login" element={ < Login /> } />

                <Route path="/cadastro" element={ < Cadastro /> } />

                <Route path="/Main_automo" element={ < Main_automo />} />

                <Route path="/Main_empresa" element={ < Main_empresa /> } />

                <Route path="/Mudar_senha" element={ < Mudar_senha /> } />

                <Route path="/Esqueceu_senha" element={ < Esqueceu_senha /> } />

                

                <Route path="*" element={ < Not_found/> } />
            </Routes>
        </BrowserRouter>
    )
}