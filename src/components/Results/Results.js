import React, { Component } from "react";
import Movie from "../Movie/Movie";
import SearchNotFound from "../SearchNoFound/SearchNotFound";
import Loader from 'react-loader-spinner'

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

        if (this.props.state.loading) return <Loader type="ThreeDots" color="white" height={80} width={80} />

        return (
            <div>

                {(this.props.state.movies.length !== 0) ? <NumberSearch state={this.props.state} /> : ""}

                {this.props.state.movies.map(movie => {
                    return (
                        <div className="d-inline-block" key={movie.imdbID}>
                            <Movie
                                movie={movie}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}
