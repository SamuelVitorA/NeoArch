import './index.scss';

import { useNavigate } from "react-router-dom";

export default function Not_found() {

    const navegacao = useNavigate();

    function nav () {
        navegacao('/');
    }

    return(
        <div className="not_found">
            <img src="/assets/images/image_not-found.webp" alt="Not_Found" />

            <h2> Desculpe, Não fomos capazes de encontrar a pagina. </h2>

            <button onClick={ nav } > Back to main Page </button>
        </div>
    )
}
 