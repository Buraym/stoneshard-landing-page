import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Inscricao from './pages/Inscricao';

function App() {
  return (
    <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/inscricao" exact component={Inscricao} />
            <Route path="*" component={Error404} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
