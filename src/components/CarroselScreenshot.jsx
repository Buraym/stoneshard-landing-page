import React, { useState } from "react";
import "../styles/carroselstyle.css";
import ScreenShot1 from '../assets/screenshots/screenshot-2.jpg';
import ScreenShot3 from '../assets/locations/brynn-1.png';
import ScreenShot4 from '../assets/locations/brynn-2.jpg';
import ScreenShot5 from '../assets/locations/brynn-3.png';
import ScreenShot6 from '../assets/locations/locations-1.png';
import ScreenShot7 from '../assets/locations/locations-2.png';
import ScreenShot8 from '../assets/locations/locations-3.png';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function CarroselScreenshot(){

    const [pagina, setPagina] = useState(0);

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
                            <img className="screenshot1" src={ScreenShot1} alt="screenshot1"/>
                        </div>
                    :
                        null
            }
            {
                (pagina === 1)
                    ?
                        <div>
                            <img className="screenshot1" src={ScreenShot8} alt="screenshot2"/>
                        </div>
                    :
                        null
            }
            {
                (pagina === 2)
                    ?
                        <div>
                            <img className="screenshot1" src={ScreenShot3} alt="screenshot3"/>
                        </div>
                    :
                        null
            }
            {
                (pagina === 3)
                    ?
                        <div>
                            <img className="screenshot1" src={ScreenShot4} alt="screenshot4"/>
                        </div>
                    :
                        null
            }
            {
                (pagina === 4)
                    ?
                        <div>
                            <img className="screenshot1" src={ScreenShot5} alt="screenshot5"/>
                        </div>
                    :
                        null
            }
            {
                (pagina === 5)
                    ?
                        <div>
                            <img className="screenshot1" src={ScreenShot6} alt="screenshot6"/>
                        </div>
                    :
                        null

            }
            {
                (pagina === 6)
                    ?
                        <div>
                            <img className="screenshot2" src={ScreenShot7} alt="screenshot7"/>
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

export default CarroselScreenshot;