import '../styles/inscricaostyle.css';
import HeaderFundo from '../assets/header-fundo.svg';
import Logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
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
                    <input className="input" type="text"/>
                    <input className="input" type="text"/>
                    <input className="input" type="text"/>
                    <input className="input" type="text"/>
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
                    <FacebookIcon fontSize="medium"/>
                    <InstagramIcon fontSize="medium"/>
                </div>
                <div className="caixa-contatos">
                    { null }
                </div>
                <div className="caixa-contribuicoes">
                    { null }
                </div>
            </footer>
        </div>
    );
}

export default Inscricao;