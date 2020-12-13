import '../styles/homestyle.css';
import CardFundo from '../assets/card-1.png';

function CardMercenario(props){
    return(
        <div className="card">
            <div className="card-parte-1">
                <img className="card-fundo" src={CardFundo} />
            </div>
            <div className="card-parte-2">
                <div className="caixa-retrato">
                    <img className="card-retrato" src={ props.retrato } />
                </div>
                <div className="caixa-info">
                    <div className="caixa-info-especial ">
                        <label className="info-nome"> { props.nome } </label>
                        <label className="info-passado"> { props.passado } </label>
                    </div>
                    <label className="info-raca"> { props.raca } </label>
                    <label className="info-genero"> { props.genero } </label>
                    <label className="info-peculiaridade"> { props.peculiaridade } </label>
                    <label className="info-afinidade"> { props.afinidade } </label>
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