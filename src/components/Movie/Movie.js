import React from "react";
import "./Movie.css";
import Modal from "../Modal/Modal";

class Movie extends React.Component {
    selectPoster = props => {
        return props.Poster === "N/A"
            ? "https://lightwidget.com/wp-content/uploads/2018/05/local-file-not-found-295x300.png"
            : "" + props.Poster;
    };

    handleClick = () => {
        return this.props.findMovie(this.props.movie.imdbID);
    };

    render() {
        return (
            <>
                <div
                    onClick={() => this.handleClick()}
                    data-toggle="modal"
                    data-target={"#" + this.props.movie.imdbID}
                    className="rounded card m-1 movie"
                >
                    <img
                        src={this.selectPoster(this.props.movie)}
                        className="card-img-top"
                        alt={this.props.movie.Title}
                    />
                    <div className="card-body p-2">
                        <p className="">{this.props.movie.Title}</p>
                        <div>
                            <i href="#" className="badge year">
                                {this.props.movie.Year}
                            </i>
                        </div>
                    </div>
                </div>
                <Modal
                    movie={this.props.movie}
                    selectPoster={this.selectPoster}
                />
            </>
        );
    }
}

export default Movie;
