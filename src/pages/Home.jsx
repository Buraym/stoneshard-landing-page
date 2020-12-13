import '../styles/homestyle.css';
import HeaderFundo from '../assets/header-fundo.svg';
import Logo from '../assets/logo.png';
import CardMercenario from '../components/CardMercenario';
import Jorgrim from '../assets/portrait/Jorgrim-portrait.png';
import Arna from '../assets/portrait/Arna-portrait.png';
import Dirwin from '../assets/portrait/Dirwin-portrait.png';
import Velmir from '../assets/portrait/Velmir-portrait.png';
import Jonna from '../assets/portrait/Jonna-portrait.png';
import Verren from '../assets/portrait/Verren-portrait.png';
import Data from '../paginas.json';
import Mercenarios from '../mercenarios.json'

function Home(){

    const historia = Data[0];
    var historiatitulo = historia.titulo;
    var historiatexto1 = historia.texto1;
    var historiatexto2 = historia.texto2;

    const mercenarios = Data[1];
    var mercenariostitulo = mercenarios.titulo;
    var mercenariostexto = mercenarios.texto;
    var nome1 = historia.titulo;
    var passado1 = historia.texto1;
    var raca1 = historia.texto2;

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
            <div className="caixa-historia">
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
                <div className="caixa-personagens-titulo">
                    <h3 className="personagens-titulo"> { mercenariostitulo } </h3>
                    <p className="historia-texto-1">
                        { mercenariostexto }
                    </p>
                </div>
                <div className="caixa-personagens-1">
                    <CardMercenario retrato={Jorgrim} nome="Jorgrim" passado="Salteador"/>
                </div>
                <div className="caixa-personagens-2">
                    <CardMercenario retrato={Arna} nome="Arna" passado="Dama Cavalheira"/>
                </div>
                <div className="caixa-personagens-3">
                    <CardMercenario retrato={Dirwin} nome="Dirwin" passado="Guarda Florestal"/>
                </div>
                <div className="caixa-personagens-4">
                    <CardMercenario retrato={Velmir} nome="Velmir" passado="Vingador"/>
                </div>
                <div className="caixa-personagens-5">
                    <CardMercenario retrato={Jonna} nome="Jonna" passado="Feiticeira"/>
                </div>
                <div className="caixa-personagens-6">
                    <CardMercenario retrato={Verren} nome="Verren" passado="Caçador de Relíquias"/>
                </div>
            </div>
            <div className="caixa-conteudo">
                <div className="caixa-conteudo-titulo">
                    <h3> { null } </h3>
                </div>
                <div className="caixa-conteudo-texto">
                    <p>
                        { null }
                    </p>
                    <p>
                        { null }
                    </p>
                </div>
            </div>
            <footer>
                <div className="caixa-redes-socias"> { null } </div>
                <div className="caixa-contatos"> { null } </div>
                <div className="caixa-contribuicoes"> { null } </div>
            </footer>
        </div>
    );
}

export default Home;