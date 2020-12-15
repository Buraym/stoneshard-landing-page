import '../styles/errorstyle.css';
import { Link } from "react-router-dom";
import HeaderFundo from '../assets/header-fundo.svg';
import Logo from '../assets/logo.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

function Error404(){
    return(
        <div className="conteudo-erro">
            <header className="header-caixa">
                <img className="header-fundo" src={ HeaderFundo }/>
                <div className="header-menu">
                    <img className="header-logo" src={ Logo }/>
                    <ul className="header-lista">
                        <li className="header-lista-texto"> História </li>
                        <li className="header-lista-texto"> Mercenários </li>
                        <li className="header-lista-texto">Conteúdo</li>
                        <li className="header-lista-texto">Contato</li>
                    </ul>
                </div>
            </header>
            <div className="caixa-erro">
                <h1 className="mensagem-erro">
                    Desculpa, mas este endereço não existe !!!
                </h1>
                <Link to="/">
                    <button className="botao-erro">
                        Pagina Inicial
                    </button>
                </Link>
            </div>
            <footer className="footer-caixa">
                <div className="caixa-redes-sociais">
                    <Link to="/pagina-stoneshard-facebook">
                        <FacebookIcon className="icone" fontSize="large" />
                    </Link>
                    <Link to="/pagina-stoneshard-twitter">
                        <TwitterIcon className="icone" fontSize="large" />
                    </Link>
                    <Link to="/pagina-ink-stains-instagram">
                        <InstagramIcon className="icone" fontSize="large" />
                    </Link>
                </div>
                <div className="caixa-contatos">
                    <label> INFO@INKSTAINSGAMES.NET </label>
                </div>
                <div className="caixa-contribuicoes">
                    <label> Contribuições </label>
                </div>
            </footer>
        </div>
    );
}


export default Error404;