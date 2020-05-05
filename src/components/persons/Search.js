import React, { Component } from 'react';

class Search extends Component {


        render() {
            return (
                <div>
                    <div className="jumbotron">
                        <h4 className="display-1">ReactHub</h4>
                        <p className="lead">Enter a Github username into the search box below</p>
                        <hr />
    
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" ref="username" placeholder="Enter a username..."></input>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }
    }


export default Search;