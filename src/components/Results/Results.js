import React, { Component } from "react";
import Movie from "../Movie/Movie";
import SearchNotFound from "../SearchNoFound/SearchNotFound";

function NumberSearch(props) {
    return (
        <div className="container text-left text-white">
            Approximately {props.state.movies.length} results
        </div>
    );
}

export default class Results extends Component {
    render() {
        if (this.props.state.movies === undefined) return <SearchNotFound />;

        return (
            <div>
                {this.props.state.movies.length === 0 ? (
                    ""
                ) : (
                    <NumberSearch state={this.props.state} />
                )}
                {this.props.state.movies.map(movie => {
                    return (
                        <div className="d-inline-block" key={movie.imdbID}>
                            <Movie
                                state={this.props.state}
                                movie={movie}
                                fetchContent={this.props.fetchContent}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}
