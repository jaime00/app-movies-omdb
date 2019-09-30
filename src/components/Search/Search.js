import React, { Component } from "react";
import Movie from "../Movie/Movie";
import SearchNotFound from "../SearchNoFound/SearchNotFound";

export default class Seach extends Component {
    render() {
        return this.props.state.movies === undefined ? (
            <SearchNotFound />
        ) : (
            <div className="card-deck results text-center">
                {this.props.state.movies.map(movie => {
                    return <Movie movie={movie} key={movie.imdbID} />;
                })}
            </div>
        );
    }
}
