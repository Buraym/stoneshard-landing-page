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

import ScreenShot1 from '../assets/screenshots/screenshot-2.jpg';
import ScreenShot3 from '../assets/locations/brynn-1.png';
import ScreenShot4 from '../assets/locations/brynn-2.jpg';
import ScreenShot5 from '../assets/locations/brynn-3.png';
import ScreenShot6 from '../assets/locations/locations-1.png';
import ScreenShot7 from '../assets/locations/locations-2.png';
import ScreenShot8 from '../assets/locations/locations-3.png';
import Roadmap from '../assets/roadmap.png';

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

    const mercenario1 = Mercenarios[0];
    var nome1 = mercenario1.nome;
    var passado1 = mercenario1.passado;
    var raca1 = mercenario1.raca;
    var genero1 = mercenario1.genero;
    var caracteristica1 = mercenario1.caracteristica;
    var afinidade1 = mercenario1.afinidade;

    const mercenario2 = Mercenarios[1];
    var nome2 = mercenario2.nome;
    var passado2 = mercenario2.passado;
    var raca2 = mercenario2.raca;
    var genero2 = mercenario2.genero;
    var caracteristica2 = mercenario2.caracteristica;
    var afinidade2 = mercenario2.afinidade;
    
    const mercenario3 = Mercenarios[2];
    var nome3 = mercenario3.nome;
    var passado3 = mercenario3.passado;
    var raca3 = mercenario3.raca;
    var genero3 = mercenario3.genero;
    var caracteristica3 = mercenario3.caracteristica;
    var afinidade3 = mercenario3.afinidade;

    const mercenario4 = Mercenarios[3];
    var nome4 = mercenario4.nome;
    var passado4 = mercenario4.passado;
    var raca4 = mercenario4.raca;
    var genero4 = mercenario4.genero;
    var caracteristica4 = mercenario4.caracteristica;
    var afinidade4 = mercenario4.afinidade;

    const mercenario5 = Mercenarios[4];
    var nome5 = mercenario5.nome;
    var passado5 = mercenario5.passado;
    var raca5 = mercenario5.raca;
    var genero5 = mercenario5.genero;
    var caracteristica5 = mercenario5.caracteristica;
    var afinidade5 = mercenario5.afinidade;

    const mercenario6 = Mercenarios[5];
    var nome6 = mercenario6.nome;
    var passado6 = mercenario6.passado;
    var raca6 = mercenario6.raca;
    var genero6 = mercenario6.genero;
    var caracteristica6 = mercenario6.caracteristica;
    var afinidade6 = mercenario6.afinidade;


    return(
        <div className="conteudo-home">
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
                            nome={nome1}
                            passado={passado1}
                            raca={raca1}
                            genero={genero1}
                            caracteristica={caracteristica1}
                            afinidade={afinidade1}
                        />
                    </div>
                    <div className="caixa-personagens-2">
                        <CardMercenario
                            retrato={Arna}
                            nome={nome2}
                            passado={passado2}
                            raca={raca2}
                            genero={genero2}
                            caracteristica={caracteristica2}
                            afinidade={afinidade2}
                        />
                    </div>
                    <div className="caixa-personagens-3">
                        <CardMercenario
                            retrato={Dirwin}
                            nome={nome3}
                            passado={passado3}
                            raca={raca3}
                            genero={genero3}
                            caracteristica={caracteristica3}
                            afinidade={afinidade3}
                        />
                    </div>
                    <div className="caixa-personagens-4">
                        <CardMercenario
                            retrato={Velmir}
                            nome={nome4}
                            passado={passado4}
                            raca={raca4}
                            genero={genero4}
                            caracteristica={caracteristica4}
                            afinidade={afinidade4}
                        />
                    </div>
                    <div className="caixa-personagens-5">
                        <CardMercenario
                            retrato={Jonna}
                            nome={nome5}
                            passado={passado5}
                            raca={raca5}
                            genero={genero5}
                            caracteristica={caracteristica5}
                            afinidade={afinidade5}
                        />
                    </div>
                    <div className="caixa-personagens-6">
                        <CardMercenario
                            retrato={Verren}
                            nome={nome6}
                            passado={passado6}
                            raca={raca6}
                            genero={genero6}
                            caracteristica={caracteristica6}
                            afinidade={afinidade6}
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
                        <div className="caixa-screenshots">
                            <img className="screenshot1" src={ScreenShot1} />
                            <img className="screenshot1" src={ScreenShot8} />
                            <img className="screenshot1" src={ScreenShot3} />
                            <img className="screenshot1" src={ScreenShot4} />
                            <img className="screenshot1" src={ScreenShot5} />
                            <img className="screenshot1" src={ScreenShot6} />
                            <img className="screenshot2" src={ScreenShot7} />
                        </div>
                    </div>
                    <div className="caixa-conteudo-3">
                        <label className="subtitulo-conteudo">
                            { conteudosubtitulo3 }
                        </label>
                        <div className="caixa-roadmap">
                            <img className="roadmap" src={Roadmap} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="caixa-inscricao-home">
                <div className="caixa-conteudo-titulo">
                    <h3> Gostaria de se Increver para receber mais novidades sobre Stoneshard ? </h3>
                </div>
                <Link to="/inscricao">
                    <button className="botao-inscricao-home">
                        <label> Clique Aqui para se Increver !!!</label>
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

export default Home;