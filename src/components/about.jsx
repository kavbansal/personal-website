import React, { Component } from 'react'
import logo from '../images/logo.svg';

export default class About extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
        <h1>Hi! I'm Kavan Bansal.</h1>
        <h3>I am a third-year undergraduate student at Johns Hopkins University.</h3>
        <p><b>Majors:</b> Computer Science, Computer Engineering</p>
        <p><b>Minors:</b> Entrepreneurship and Management, Applied Mathematics and Statistics</p>
      
      
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
    )
  }
}