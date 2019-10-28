import React, { Component } from "react";
import "./Movie.css";
import Modal from "../Modal/Modal";

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.data = {};
        this.movie = React.createRef();
        this.state = {
            showModal: false
        };
    }
    selectPoster = movie => {
        return movie.Poster === "N/A"
            ? "https://lightwidget.com/wp-content/uploads/2018/05/local-file-not-found-295x300.png"
            : "" + movie.Poster;
    };

    async handlerClick() {
        if (this.data.imdbID !== this.props.movie.imdbID) {
            this.data = await this.props.fetchContent(this.props.movie.imdbID);
        }

        this.setState({
            showModal: true
        });
    }

    render() {
        return (
            <>
                <div
                    onClick={() => this.handlerClick()}
                    data-toggle="modal"
                    data-target={"#" + this.props.movie.imdbID}
                    className="rounded card m-1 movie"
                    ref={this.movie}
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
                {this.state.showModal ? (
                    <Modal movie={this.data} selectPoster={this.selectPoster} />
                ) : null}
            </>
        );
    }
}
