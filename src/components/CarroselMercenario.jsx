import React, { useState } from "react";
import "../styles/carroselstyle.css";
import Mercenarios from '../mercenarios.json';
import CardMercenario from './CardMercenario';
import Jorgrim from '../assets/portrait/Jorgrim-portrait.png';
import Arna from '../assets/portrait/Arna-portrait.png';
import Dirwin from '../assets/portrait/Dirwin-portrait.png';
import Velmir from '../assets/portrait/Velmir-portrait.png';
import Jonna from '../assets/portrait/Jonna-portrait.png';
import Verren from '../assets/portrait/Verren-portrait.png';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function CarroselMercenario(){

    const [pagina, setPagina] = useState(0);

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

    return (
        <div className="carrosel-estrutura">
            <ChevronLeftIcon className="carrosel-botao" onClick={
                ()=>{
                        if(pagina > 0){
                            setPagina(pagina - 1)
                        }
                    }
                }
            />
            {
                (pagina === 0)
                    ?
                        <div>
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
                    :
                        null
            }
            {
                (pagina === 1)
                    ?
                        <div>
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
                    :
                        null
            }
            {
                (pagina === 2)
                    ?
                        <div>
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
                    :
                        null
            }
            {
                (pagina === 3)
                    ?
                        <div>
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
                    :
                        null
            }
            {
                (pagina === 4)
                    ?
                        <div>
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
                    :
                        null
            }
            {
                (pagina === 5)
                    ?
                        <div>
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
                    :
                        null

            }
            <ChevronRightIcon className="carrosel-botao" onClick={
                    () => {
                        if(pagina < 5){
                            setPagina(pagina + 1)
                        }
                    }
                }
            />
        </div>
    );
}

export default CarroselMercenario;