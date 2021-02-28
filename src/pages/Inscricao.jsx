import { useState } from "react";
import '../styles/inscricaostyle.css';
import HeaderFundo from '../assets/header-fundo.svg';
import Logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import Checkbox from '@material-ui/core/Checkbox';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Inscricao(){

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    var chat_texto = {
        nome: nome,
        email: email,
        telefone: telefone,
    }

    function handleSubmit(event){
        console.log("Nome: ",chat_texto.nome," | Email: ",chat_texto.email," | Telefone: ",chat_texto.email," | Data de Nascimento: ",chat_texto.data," |");
        event.preventDefault();
    }

    function handleChangeNome(e){
        setNome(e.target.value);
    }

    function handleChangeEmail(e){
        setEmail(e.target.value);
    }

    function handleChangeTelefone(e){
        setTelefone(e.target.value);
    }

    return(
        <div className="conteudo-home">
            <header className="header-caixa">
                <img className="header-fundo" src={ HeaderFundo } alt="header fundo"/>
                <div className="header-menu">
                    <img className="header-logo" src={ Logo } alt="logo empresa"/>
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
                <div>
                    <form className="caixa-formulario"onSubmit={handleSubmit}>
                        Nome: 
                        <input className="input" type="text" onChange={handleChangeNome}/>
                        E-mail: 
                        <input className="input" type="text" onChange={handleChangeEmail}/>
                        Telefone: 
                        <input className="input" type="text" onChange={handleChangeTelefone}/>
                        <div>
                            <Checkbox color="primary"/>
                            Receber Newsletter sobre as últimas atualizações ?
                        </div>
                        <input className="botao-inscrever-texto" type="submit"/>
                    </form>
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