import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pedidos from "./pages/ADM/pedidos";
import Analitic from "./pages/ADM/analitco";
import Config from "./pages/ADM/configuracoes";
import Home from "./pages/ADM/home";
import Cadastro from "./pages/loginEcadastro/cadastro";
import Login from "./pages/loginEcadastro/login";
import Esqueceu_senha from "./pages/loginEcadastro/esqueceu-senha";
import Mudar_senha from "./pages/loginEcadastro/mudar-senha";
import Main_automo from "./pages/main_page/autonomo";
import Main_empresa from "./pages/main_page/empresa"
import Not_found from "./pages/Not_Found/index.jsx";


export default function Rotas(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/pedidos" element={<Pedidos/>}/>
                <Route path="/analitic" element={<Analitic/>}/>
                <Route path="/config" element={<Config/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/Esqueceu_senha" element={<Esqueceu_senha/>}/>
                <Route path="/Mudar_senha" element={<Mudar_senha/>}/>
                <Route path="/Main_automo" element={<Main_automo/>}/>
                <Route path="/Main_empresa" element={<Main_empresa/>}/>

                <Route path="*" element={ < Not_found/> } />
            </Routes>
        </BrowserRouter>
    )
}