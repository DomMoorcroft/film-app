import React, { Component } from 'react';
import Axios from 'axios';

import './main.css';
import Search from '../search/search';

class Main extends Component {

    state = {
        searchTitle: "Search for a film",
        filmResults: []
    }
    
    render() {

        this.searchEvent = event => {
            this.getFilms(event.target.value);
        }

        this.getFilms = (searchQuery) => {
            const apiKey = "db47a6decc6fe973e6d918302d7e403f";
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

            </div>

        );

    }

}

export default Main;