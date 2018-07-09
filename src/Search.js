import React, { Component } from 'react';


class Search extends Component {
  render (){
    return(
      <div>
        <h1 className="align-middle">Movie Search</h1>
          <div className="input-group mb-3">
          <form action="">
            <input onChange={this.props.onChangeInput} type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
            <button onClick={this.props.getMovieData} type="submit">Search Movie</button>
            </form>
          </div>
      </div>
  )
}
}

export default Search;
