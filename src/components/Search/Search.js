import React, { Component } from "react";
import Movie from "../Movie/Movie";
import SearchNotFound from "../SearchNoFound/SearchNotFound";

export default class Search extends Component {
    findMovie = id => {
        return this.props.state.movies.filter(movie => movie.imdbID === id);
    };

    render() {
        if (this.props.state.movies === undefined) return <SearchNotFound />;

        return this.props.state.movies.map(movie => {
            return (
                <div className="d-inline-block">
                    <Movie
                        movie={movie}
                        key={movie.imdbID}
                        findMovie={this.findMovie}
                    />
                </div>
            );
        });
    }
}
