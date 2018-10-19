import React, { Component } from 'react';

import './filmList.css';
import Film from '../film/film';

class FilmList extends Component {

    render() {

        console.log("FilmList - ", this.props.filmResults);

        return(

            <div>
                {this.props.filmResults.map( movie => (
                    <Film id={movie.id} title={movie.title} vote_average={movie.vote_average} overview={movie.overview} image={movie.poster_path} release_date={movie.release_date} />
                ))}
            </div>

        )

    }

}

export default FilmList;