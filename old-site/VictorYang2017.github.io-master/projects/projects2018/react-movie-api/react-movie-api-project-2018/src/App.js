import React, { Component } from 'react';
import './App.css';
import PageInput from './components/PageInput/PageInput.js';
import Results from './components/Results/Results.js';
import Heading from './components/Heading/Heading.js';
import {TheMovieDatabase} from './util/TheMovieDatabase.js';

class App extends Component {
  state = {
    page: '1',
    movieTitles: [],
    totalPages: '0'
  }

  componentDidMount = (pageNumber) => {
    TheMovieDatabase.movieDatabase(pageNumber).then((movie)=>{
      this.setState({
        movieTitles: movie.theMovieResults,
        totalPages: movie.theMovieTotalPage
      });
      // console.log(TheMovieDatabase.movieDatabase(pageNumber));
    });

  }

  handleChange = (pageNumber) => {
    this.setState({
      page: pageNumber
    });
    !pageNumber ? this.componentDidMount(this.state.page) : this.componentDidMount(pageNumber);
  }


  render() {
    return (
      <div className="App">
        <Heading/>
        <Results 
        movieTitles={this.state.movieTitles}
        />
        <PageInput 
        totalPages={this.state.totalPages} 
        onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
