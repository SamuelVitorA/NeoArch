import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pedidos from "./pages/ADM/pedidos";
import Analitic from "./pages/ADM/analitco";
import Config from "./pages/ADM/configuracoes";
import Home from "./pages/ADM/home";



export default function Rotas(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/pedidos" element={<Pedidos/>}/>
                <Route path="/analitic" element={<Analitic/>}/>
p,              <Route path="/config" element={<Config/>}/>
p,              <Route path="/" element={<Home/>}/>

                
            </Routes>
        </BrowserRouter>
    )
}