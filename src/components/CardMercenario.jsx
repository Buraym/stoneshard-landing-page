import '../styles/cardstyle.css';
import CardFundo from '../assets/card-1.png';

function CardMercenario(props){
    return(
        <div className="card">
            <img className="card-fundo" src={CardFundo} />
            <div className="card-parte-info">
                <div className="caixa-retrato">
                    <img className="card-retrato" src={ props.retrato } />
                </div>
                <div className="caixa-info">
                    <div className="caixa-info-especial">
                        <label className="info-nome"> { props.nome } </label>
                        <label className="info-passado"> { props.passado } </label>
                    </div>
                    <div className="caixa-info-secundaria">
                        <div>
                            <label className="info-raca"> Raça: { props.raca } </label>
                        </div>
                        <div>
                            <label className="info-genero"> Gênero: { props.genero } </label>
                        </div>
                        <div>
                            <label className="info-peculiaridade"> Característica: { props.peculiaridade } </label>
                        </div>
                        <div>
                            <label className="info-afinidade"> Afinidade: { props.afinidade } </label>
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
    );
}

export default CardMercenario;