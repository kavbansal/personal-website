import logo from './logo.svg';
import './App.css';
import About from './components/about'

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
