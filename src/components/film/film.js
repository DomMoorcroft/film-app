import React, { Component } from 'react';

import './film.css';

class Film extends Component {

    render(filmObject) {
        console.log("props = ", this.props);

        let filmImageUrl = "";

        if(this.props.image) {
            filmImageUrl = "https://image.tmdb.org/t/p/w500" + this.props.image;
        }
        else {
            filmImageUrl = "https://via.placeholder.com/367x200?text=No+image+available";
        }

        return(

            <div className="card">
                <img src={filmImageUrl} alt={this.props.title} className="card-image"/>
                <div className="card-info">
                    <h3>{this.props.title}</h3>
                    <p className="card-info-desc">{this.props.overview}</p>
                    <p id="cardInfoRating">Rating: {this.props.vote_average}</p>
                    <p id="cardInfoReleaseDate">Release date: {this.props.release_date}</p>
                </div>
            </div>

        )

    }

};

export default Film;