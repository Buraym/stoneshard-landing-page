import '../styles/errorstyle.css';
import { Link } from "react-router-dom";

function Error404(){
    return(
        <div>
            <header>
                <ul>
                    <li>Hitória</li>
                    <li>Personagens</li>
                    <li>Conteúdo</li>
                    <li>Contato</li>
                </ul>
            </header>
            <section>
                <h2> Desculpe, esta pagina não consta nesse dominio !!!</h2>
                <Link to="/">
                    <button>
                        <label> Voltar a Página Principal </label>
                    </button>
                </Link>
            </section>
            <footer>
                <div></div>
                <div></div>
            </footer>
        </div>
    );
}


export default Error404;