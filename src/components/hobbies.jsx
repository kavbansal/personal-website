import React, { Component } from 'react'
import piano from '../images/piano.jpg'
import movies from '../images/movies.png'
import games from '../images/ps5.png'
import tennis from '../images/tennis.png'

export default class Hobbies extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
        <h1>Here are some of my hobbies!</h1>
        <p>
        <img src={piano} className="Piano" alt="Playing Piano"/>
        <h4>Playing <b>piano</b></h4>
        </p>
        <p>
        <img src={movies} className="Movies" alt="Watching Movies" />
        <h4>Watching <b>movies</b></h4>
        </p>
        <p>
        <img src={tennis} className="Tennis" alt="Playing Tennis" />
        <h4>Playing <b>tennis</b></h4>
        </p>
        <p>
        <img src={games} className="Games" alt="Playing Videogames" />
        <h4>Playing <b>videogames</b></h4>
        </p>
        </header>
      </div>
    )
  }
}