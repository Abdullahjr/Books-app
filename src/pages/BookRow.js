import React, { Component } from 'react';
import FilmPoster from './FilmPoster'
import Favorite from './Favorite';


class BookRow extends Component {

  
    render() {

        const year = new Date(this.props.film.release_date);
    
        return (
          <div className="film-row" onClick={() => this.props.handleDetailsClick(this.props.film)}>
            <FilmPoster film={this.props.film}/>
    
            <div className="film-summary">
              <Favorite onFavoriteToggle={this.props.onFavoriteToggle} isFavorite={this.props.isFavorite}/>
              <h1>{this.props.film.title}</h1>
              <p>{ year.getFullYear()}</p>
            </div>
          </div>
        );
      }
}

export default BookRow;