import React, { Component } from 'react';

import './filmList.css';

class FilmList extends Component {

    render() {

        console.log("FilmList - ", this.props.filmResults);

        return(

            <div>
                {this.props.filmResults.map( movie => (
                    <p>{movie.title}</p>
                ))}
            </div>

        )

    }

}

export default FilmList;