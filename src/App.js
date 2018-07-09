import React, { Component } from 'react';
import './style/App.css';
import Navbar from './Navbar'
import Infos from './Infos'
import Search from './Search'

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        input: "",
        movie: {}
      }
    }


  onChangeInput = (event) => {
    this.setState({
      input: event.target.value
    });
    console.log(event.target.value)
  }

  getMovieData = (event) => {
    event.preventDefault()
    fetch(`http://www.omdbapi.com/?t=${this.state.input}&apikey=thewdb `)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ movie : data })
      })
      .catch(error => {
        console.log(error)
      })
  }



  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <Infos getMovieData={this.getMovieData} movie={this.state.movie} onChangeInput={this.onChangeInput}/>
        </div>
      </div>
    );
  }
}

export default App;
