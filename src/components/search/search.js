import React, { Component } from 'react';

import './search.css';

class Search extends Component {

    render() {

        return(

            <div>

                <h2 className="search-title">Search for a film</h2>

                <input type="text" placeholder="Search for a film" className="search-input" />
                
            </div>

        )

    }

}

export default Search;