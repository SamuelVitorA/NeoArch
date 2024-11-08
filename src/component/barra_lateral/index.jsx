import "./index.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SideBar({ tema, nome, opa }) {
  const navigate = useNavigate();
  const [aberto, setAberto] = useState(false);

  function toggleSidebar() {
    setAberto((prev) => !prev);
  }

  function sair() {
    localStorage.removeItem("USUARIO");
    navigate("/login");
  }

  return (
    <div className={`sidebarsupremacy ${aberto ? "sidebar-aberto" : ""}`}>
      <button className="botao-aparecer" onClick={toggleSidebar}>
        <img src={`/assets/images/Hamburguer.png`} alt="Menu icon" />
      </button>

      <div className={`sidebar ${aberto ? "aberto" : "fechado"} ${tema}`}>
        <div className="user">
          <h1>{nome}</h1>
        </div>

        <ul>
          <li className={opa === "0" ? "opcao ativo" : "opcao"}>
            <Link to="/analitic">Analytics</Link>
          </li>
          <li className={opa === "1" ? "opcao ativo" : "opcao"}>
            <Link to="/pedidos">Orders</Link>
          </li>
          <li className={opa === "2" ? "opcao ativo" : "opcao"}>
            <Link to="/config">Settings</Link>
          </li>
        </ul>

        <ul className="exit">
          <li>
            <button className="sair-botao" onClick={sair}>
              Exit Account
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
