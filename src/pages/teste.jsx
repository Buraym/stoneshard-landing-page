import '../styles/testestyle.css';
import CardMercenario from '../components/CardMercenario';
import Jorgrim from '../assets/portrait/Jorgrim-portrait.png';

function Home(){

    return(
        <div className="conteudo-teste">
            <CardMercenario
                retrato={Jorgrim}
                nome="Jorgrim"
                passado="Salteador"
                raca="Anão"
                genero="Masculino"
                peculiaridade="Frenesi Berserker"
                afinidade="Espadas, Armas Duplas, Escudos, Maestria de Combate"
                bio1="Não muito tempo atrás, as pessoas de Aldor tremiam de medo no momento em que alguém mencionava Tyr, o Caolho, um lendário líder dos salteadores Fjall. O bando de Tyr era famoso por seus audaciosos ataques na fronteira norte - até mesmo as tropas bem armadas dos senhores locais sofreram derrota após derrota por esses anões ferozes. Jorgrim era um deles, o melhor guerreiro do bando que nunca havia perdido uma única batalha em sua vida."
                bio2="No entanto, com o passar do tempo, a brutalidade do Caolho em relação aos povoados capturados tornou-se perturbadora demais até para seus próprios subordinados. Jorgrim era quem mais desprezava a crueldade desnecessária: sempre acreditou que a violência contra os fracos e indefesos não é digna de um verdadeiro guerreiro."
                bio3="Não se sabe quando Tyr cruzou a linha final, mas eventualmente a paciência de Jorgrim se esgotou e o couro cabeludo do líder do bandido encontrou seu lugar na longa lista de troféus do anão. Deixada sem orientação, a banda se desfez: alguns anões voltaram para Fjall, enquanto outros, incluindo Jorgrim, decidiram ir para o sul e tentar a sorte como mercenários."
            />
        </div>
    );
}

export default Home;