import './App.css';
import About from './components/about'
import Hobbies from './components/hobbies'
import {default as Navigation} from './components/navigation'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <About />} />
          <Route path="/hobbies" exact component={() => <Hobbies />} />
        </Switch>
      </Router>
    </div>
{/*       
      <header className="App-header">
        
        <About></About>
        <p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/kavanbansal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        &nbsp;&nbsp;
        <a
          className="App-link"
          href="https://github.com/kavbansal"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        </p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
       */}
    </div>
  );
}

export default App;
