import "./index.scss"

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SideBar(prop) {

  const [aberto, setAberto] = useState(true);
  const [imagem, setImagem] = useState('/assets/images/cadeado.png')

  useEffect((torta) => {
    setImagem(torta)

  })


  function abrir_fechar() {
    setAberto(!aberto);
  }

  return (
    <div className="sidebarsupremacy">
      <button className="botao-aparecer" onClick={abrir_fechar}>
        {prop.tema === "escuro" ? <img src="/assets/images/Hamburguer.png" alt="Menu icon" /> : <img src="./assets/images/Hamburguer.png" alt="Menu icon" />}
      </button>

      <div className={`Sidebar ${aberto ? "aberto" : "fechado"} ${prop.tema}`}>
        <div className="user">
          <img src={imagem} alt="User profile" />

          <h1>{prop.nome}</h1>
        </div>

        <div>
          <ul>
            <li className={prop.opa === "0" ? "opcao" : "sim"}>
              <Link to="/analitic">Analytics</Link>
            </li>

            <li className={prop.opa === "1" ? "opcao" : "ralvez"}>
              <Link to="/pedidos">Orders</Link>
            </li>

            <li className={prop.opa === "2" ? "opcao" : "nao"}>
              <Link to="/config">Settings</Link>
            </li>
          </ul>

          <ul className="exit">
            <li>
              <Link to="/">Exit Account</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}