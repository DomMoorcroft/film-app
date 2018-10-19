import React, { Component } from 'react';

import './search.css';

class Search extends Component {

    render() {

        return(

            <div>

                <h2 className="search-title">{this.props.searchTitle}</h2>

                <input type="text" placeholder="Search for a film" className="search-input" onChange={this.props.searchEvent}/>
                
            </div>

        )

    }

}

export default Search;