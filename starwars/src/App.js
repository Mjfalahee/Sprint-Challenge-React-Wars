import React, { Component } from 'react';
import './App.scss';
import Character from './components/Character';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      filmstate:[]
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/')
    // this.getFilms('https://swapi.co/api/films')
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        //console.log(data);
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };


  // getFilms = URL => { 
  //    fetch(URL)
  //   .then(res => {
  //      return res.json();
  //    })
  //    .then(data => {
  //    let output = data.results;
  //    this.setState({ filmstate: output});
  //    console.log(this.state.filmstate);
  //    })
  //    .catch(err => {
  //        throw new Error(err);
  //        });
  //    }


  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="characterlist">
        {this.state.starwarsChars.map(character => 
          <Character character={character} key={character.name}/>)}
        </div>
        </div>
    );
  }
}

export default App;
