import '../styles/homestyle.css';

function Home(){
    return(
        <div>
            <header>
                <ul>
                    <li>Hitória</li>
                    <li>Personagens</li>
                    <li>Conteúdo</li>
                    <li>Contato</li>
                </ul>
            </header>
            <section>

                <div className="caixa-historia-titulo">
                    <h3 className="historia-titulo"> História </h3>
                </div>

                <div className="caixa-historia-texto">
                    <p className="historia-texto-1">
                        Stoneshard é um complexo RPG em turnos em mundo aberto. Experimente a vida implacável de um mercenário medieval: viaje por reinos divididos pela guerra, assine contratos, lute, cuide de seus ferimentos e desenvolva sem restrições seu personagem.
                    </p>
                    <p className="historia-texto-2">
                        A guerra sempre deixa suas marcas: vilas em ruínas, masmorras infestadas por monstros e estradas abandonadas. Viaje por Aldor e descubra mais sobre o passado. A economia em tempos de guerra é cruel, mas também apresenta muitas oportunidades: contratos, caças ao tesouro, comércio de mercadorias variadas. Construa sua fortuna enquanto atravessa a região.
                    </p>
                </div>

            </section>
            <section>
                <div className="caixa-titulo-personagens">
                    <h3> Mercenários </h3>
                </div>
            </section>
            <section>
                <div className="caixa-titulo-conteudo">
                    <h3> Conteúdo do jogo </h3>
                </div>
            </section>
            <footer>
                <div></div>
                <div></div>
            </footer>
        </div>
    );
}

export default Home;