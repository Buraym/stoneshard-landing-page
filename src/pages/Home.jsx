import '../styles/homestyle.css';
import { Link } from "react-router-dom";
import HeaderFundo from '../assets/header-fundo.svg';
import Logo from '../assets/logo.png';
import FotoFundoHome from '../assets/footer/header.jpg';
import Foto1 from '../assets/footer/footer-2.png';
import Foto2 from '../assets/footer/footer-1.png';
import CardMercenario from '../components/CardMercenario';
import Jorgrim from '../assets/portrait/Jorgrim-portrait.png';
import Arna from '../assets/portrait/Arna-portrait.png';
import Dirwin from '../assets/portrait/Dirwin-portrait.png';
import Velmir from '../assets/portrait/Velmir-portrait.png';
import Jonna from '../assets/portrait/Jonna-portrait.png';
import Verren from '../assets/portrait/Verren-portrait.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Data from '../paginas.json';
import Mercenarios from '../mercenarios.json';

function Home(){

    const historia = Data[0];
    var historiatitulo = historia.titulo;
    var historiatexto1 = historia.texto1;
    var historiatexto2 = historia.texto2;

    const mercenarios = Data[1];
    var mercenariostitulo = mercenarios.titulo;
    var mercenariostexto = mercenarios.texto;

    const conteudos = Data[2];
    var conteudotitulo = conteudos.titulo;
    var conteudosubtitulo1 = conteudos.subtitulo1;
    var conteudosubtitulo2 = conteudos.subtitulo2;
    var conteudosubtitulo3 = conteudos.subtitulo3;

    return(
        <div className="conteudo-home">
            <header className="header-caixa">
                <img className="header-fundo" src={ HeaderFundo }/>
                <div className="header-menu">
                    <img className="header-logo" src={ Logo }/>
                    <ul className="header-lista">
                        <li className="header-lista-texto"> { historiatitulo } </li>
                        <li className="header-lista-texto"> { mercenariostitulo } </li>
                        <li className="header-lista-texto">Conteúdo</li>
                        <li className="header-lista-texto">Contato</li>
                    </ul>
                </div>
            </header>
            <div className="caixa-produto">
                <div className="caixa-produto-inferior">
                    <img className="foto-fundo" src={FotoFundoHome} />
                </div>
                <div className="caixa-produto-centro">
                    <h1 className="produto-titulo"> Stoneshard </h1>
                    <div className="caixa-produto-botao">
                        <Link to="/pagina-stoneshard-steam">
                            <button className="produto-botao">
                                <label className="produto-botao-texto"> Steam </label>
                            </button>
                        </Link>
                        <Link to="/pagina-stoneshard-gog">
                            <button className="produto-botao">
                                <label className="produto-botao-texto"> Gog </label>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="caixa-historia">
                <img className="imagem1" src={Foto1}/>
                <div>
                    <h3 className="historia-titulo"> { historiatitulo } </h3>
                </div>
                <div className="caixa-historia-texto">
                    <p className="historia-texto-1">
                        { historiatexto1 }
                    </p>
                    <p className="historia-texto-2">
                        { historiatexto2 }
                    </p>
                </div>
            </div>
            <div className="caixa-personagens">
                <img className="imagem2" src={Foto2}/>
                <div className="caixa-personagens-titulo">
                    <h3 className="personagens-titulo"> { mercenariostitulo } </h3>
                    <p className="historia-texto-1">
                        { mercenariostexto }
                    </p>
                </div>
                <div className="caixa-cards-personagem">
                    <div className="caixa-personagens-1">
                        <CardMercenario 
                            retrato={Jorgrim}
                            nome="Jorgrim"
                            passado="Salteador"
                        />
                    </div>
                    <div className="caixa-personagens-2">
                        <CardMercenario
                            retrato={Arna}
                            nome="Arna"
                            passado="Dama Cavalheira"
                        />
                    </div>
                    <div className="caixa-personagens-3">
                        <CardMercenario
                            retrato={Dirwin}
                            nome="Dirwin"
                            passado="Guarda Florestal"
                        />
                    </div>
                    <div className="caixa-personagens-4">
                        <CardMercenario
                            retrato={Velmir}
                            nome="Velmir"
                            passado="Vingador"
                        />
                    </div>
                    <div className="caixa-personagens-5">
                        <CardMercenario
                            retrato={Jonna}
                            nome="Jonna"
                            passado="Feiticeira"
                        />
                    </div>
                    <div className="caixa-personagens-6">
                        <CardMercenario
                            retrato={Verren}
                            nome="Verren"
                            passado="Caçador de Relíquias"
                        />
                    </div>
                </div>
            </div>
            <div className="caixa-conteudo">
                <div className="caixa-conteudo-titulo">
                    <h3> { conteudotitulo } </h3>
                </div>
                <div className="caixa-conteudo-texto">
                    <div className="caixa-conteudo-1">
                        <label>
                            { conteudosubtitulo1 }
                        </label>
                    </div>
                    <div className="caixa-conteudo-2">
                        <label>
                            { conteudosubtitulo2 }
                        </label>
                    </div>
                    <div className="caixa-conteudo-3">
                        <label>
                            { conteudosubtitulo3 }
                        </label>
                    </div>
                </div>
            </div>
            <div className="caixa-inscricao-home">
                <div className="caixa-conteudo-titulo">
                    <h3> Inscrição </h3>
                </div>
                <Link to="/inscricao">
                    <button>
                        <label> Clique Aqui para se Increver !!!</label>
                    </button>
                </Link>
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
                    <button> Contribuições </button>
                </div>
            </footer>
        </div>
    );
}

export default Home;