import '../styles/inscricaostyle.css';
import HeaderFundo from '../assets/header-fundo.svg';
import Logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import Checkbox from '@material-ui/core/Checkbox';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Inscricao(){

    function onChange(){
        return(  null  );
    }

    function onSubmit(){
        return(  null  );
    }

    return(
        <div className="conteudo-home">
            <header className="header-caixa">
                <img className="header-fundo" src={ HeaderFundo }/>
                <div className="header-menu">
                    <img className="header-logo" src={ Logo }/>
                    <ul className="header-lista">
                        <li className="header-lista-texto"> História </li>
                        <li className="header-lista-texto"> Mercenarios </li>
                        <li className="header-lista-texto">Conteúdo</li>
                        <li className="header-lista-texto">Contato</li>
                    </ul>
                </div>
            </header>
            
            <div className="caixa-inscricao">
                <div className="caixa-conteudo-titulo">
                    <h3> Inscrição </h3>
                </div>
                <div className="caixa-formulario">
                    Nome: 
                    <input className="input" type="text"/>
                    E-mail: 
                    <input className="input" type="text"/>
                    Telefone: 
                    <input className="input" type="text"/>
                    Data de Nascimento: 
                    <input className="input" type="text"/>
                    <div>
                        <Checkbox color="primary"/>
                        Receber Newsletter sobre as últimas atualizações ?
                    </div>
                    <Link to="">
                        <button className="botao-inscrever">
                            <label className="botao-inscrever-texto">
                                Se inscrever
                            </label>
                        </button>
                    </Link>
                </div>
            </div>
            <footer className="footer-caixa">
                <div className="caixa-redes-socias">
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

export default Inscricao;