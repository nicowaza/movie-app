import React, { Component } from 'react';
import "./style/Infos.css"

import Search from "./Search"

const Infos = ({onChangeInput, movie, getMovieData}) => {
  return(
    <div>
    <Search getMovieData={getMovieData} onChangeInput={onChangeInput}/>
      <div className="card">
      <img className="card-img-top" src={movie.Poster} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Plot}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </div>
  )
}

export default Infos;
