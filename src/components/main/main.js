import React, { Component } from 'react';
import Axios from 'axios';

import './main.css';
import Search from '../search/search';
import FilmList from '../filmList/filmList';

class Main extends Component {

    state = {
        searchTitle: "Search for a film",
        filmResults: []
    }
    
    render() {

        const apiKey = "db47a6decc6fe973e6d918302d7e403f";

        this.getLatestFilms = () => {
            
            const url = "https://api.themoviedb.org/3/discover/movie?api_key=" + apiKey;

            Axios.get(`${url}&sort_by=popularity.desc`)
                .then ( (response) => {
                    this.setState({filmResults: response.data.results});
                    console.log(response.data.results);
                })
                .catch( err => {
                    console.log(err);
                })
        }

        this.searchEvent = event => {
            this.getFilms(event.target.value);
        }

        this.getFilms = (searchQuery) => {
            const url = "https://api.themoviedb.org/3/search/movie?api_key=" + apiKey;

            Axios.get(`${url}&query=${searchQuery}&include_adult=false`)
                .then ( (response) => {
                    this.setState({filmResults: response.data.results});
                    console.log(response.data.results);
                })
                .catch( err => {
                    console.log(err);
                })
            
        };

        this.getLatestFilms();

        return(

            <div>
                <div className="container">
                    <div className="row">
                        <h1>Film App</h1>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <Search searchEvent={this.searchEvent} searchTitle={this.state.searchTitle} />
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <FilmList filmResults={this.state.filmResults} />
                    </div>
                </div>

            </div>

        );

    }

}

export default Main;