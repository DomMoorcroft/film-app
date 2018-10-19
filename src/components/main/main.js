import React, { Component } from 'react';

import './main.css';
import Search from '../search/search';

class Main extends Component {
    
    render() {

        return(

            <div className="container">

                <div className="row">
                    <h1>Film App</h1>
                </div>

                <div className="row">
                    <Search />
                </div>
                
            </div>

        );

    }

}

export default Main;