import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Inscricao from './pages/Inscricao';
import teste from './pages/teste';

function App() {
  return (
    <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path='/pagina-stoneshard-steam' component={() => { 
              window.location.href = 'https://store.steampowered.com/app/625960/Stoneshard/'; 
              return null;
            }}/>
            <Route path='/pagina-stoneshard-gog' component={() => { 
              window.location.href = 'https://www.gog.com/game/stoneshard'; 
              return null;
            }}/>
            <Route path='/pagina-stoneshard-facebook' component={() => { 
              window.location.href = 'https://www.facebook.com/Stoneshard/'; 
              return null;
            }}/>
            <Route path='/pagina-stoneshard-twitter' component={() => { 
              window.location.href = 'https://twitter.com/stone_shard?lang=de'; 
              return null;
            }}/>
            <Route path='/pagina-ink-stains-instagram' component={() => { 
              window.location.href = 'https://www.instagram.com/ink_stains_games/?hl=pt-br'; 
              return null;
            }}/>
            <Route path="/inscricao" exact component={Inscricao} />
            <Route path="/teste" exact component={teste} />
            <Route path="*" component={Error404} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;