import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pedidos from "./pages/pedidos";
import Analitic from "./pages/analitco";
import Config from "./pages/configuracoes";



export default function Rotas(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/pedidos" element={<Pedidos/>}/>
                <Route path="/analitic" element={<Analitic/>}/>
                <Route path="/rafdfffff" element={<Config/>}/>
                
            </Routes>
        </BrowserRouter>
    )
}