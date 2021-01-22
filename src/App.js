import './App.css';
import About from './components/about'
import Hobbies from './components/hobbies'
import {default as Navigation} from './components/navigation'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
       <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <About />} />
          <Route path="/personal-website" exact component={() => <About />} />
          <Route path="/hobbies" exact component={() => <Hobbies />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
