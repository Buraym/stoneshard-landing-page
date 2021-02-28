import '../styles/cardstyle.css';
import CardFundo from '../assets/card-1.png';
import { useEffect } from 'react';

function CardMercenario(props){

    useEffect( ()=> {
        const card = document.querySelector('#card');
        const container = document.querySelector('#card-tela');
        const retrato = document.querySelector('#card-retrato');
        const nome = document.querySelector('#nome');
        const passado = document.querySelector('#passado');
        const raca = document.querySelector('#raca');
        const genero = document.querySelector('#genero');
        const peculiaridade = document.querySelector('#peculiaridade');
        const afinidade = document.querySelector('#afinidade');

        container.addEventListener("mousemove", (e) => {
            let xAxis = (window.innerHeight / 2 - e.pageY) / 10;
            let yAxis = (window.innerWidth / 2 - e.pageX) / -12;
            card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
        });
        container.addEventListener("mouseenter", (e) => {
            card.style.transition = "none";
            retrato.style.transform = "translateZ(50px)";
            nome.style.transform = "translateZ(50px)";
            passado.style.transform = "translateZ(50px)";
            raca.style.transform = "translateZ(20px)";
            genero.style.transform = "translateZ(20px)";
            peculiaridade.style.transform = "translateZ(20px)";
            afinidade.style.transform = "translateZ(20px)";
        });
        container.addEventListener("mouseleave", (e) => {
            card.style.transition = "all 0.5s ease";
            card.style.transform = `translatez(0px)`;
            retrato.style.transform = "translateZ(0px)";
            nome.style.transform = "translatez(0px)";
            passado.style.transform = "translateZ(0px)";
            raca.style.transform = "translateZ(0px)";
            genero.style.transform = "translateZ(0px)";
            peculiaridade.style.transform = "translateZ(0px)";
            afinidade.style.transform = "translateZ(0px)";
        });
    }); 

    return(
        <div id="card-tela">
            <div id="card">
                <img id="card-fundo" src={CardFundo} alt="card mercenario fundo"/>
                <div className="card-parte-info">
                    <div className="caixa-retrato">
                        <img id="card-retrato" src={ props.retrato } alt="mercenario retrato"/>
                    </div>
                    <div className="caixa-info">
                        <div className="caixa-info-especial">
                            <label id="nome"> { props.nome } </label>
                            <label id="passado"> { props.passado } </label>
                        </div>
                        <div className="caixa-info-secundaria">
                            <div>
                                <label id="raca"> Raça: { props.raca } </label>
                            </div>
                            <div>
                                <label id="genero"> Gênero: { props.genero } </label>
                            </div>
                            <div>
                                <label id="peculiaridade"> Característica: { props.caracteristica } </label>
                            </div>
                            <div>
                                <label id="afinidade"> Afinidade: { props.afinidade } </label>
                            </div>
                        </div>
                    </div>
                    <div className="caixa-bio">
                        <p className="bio1">
                            { props.bio1 }
                        </p>
                        <p className="bio2">
                            { props.bio2 }
                        </p>
                        <p className="bio3">
                            { props.bio3 }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardMercenario;