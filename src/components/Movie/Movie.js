import React, { Component } from "react";
import "./Movie.css";
import Modal from "../Modal/Modal";

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.movie = React.createRef();
        this.state = {
            data: {},
            showModal: false
        }
    }
    selectPoster = movie => {
        return movie.Poster === "N/A"
            ? "https://lightwidget.com/wp-content/uploads/2018/05/local-file-not-found-295x300.png"
            : "" + movie.Poster;
    };

    selectTitle = cadena => {
        let longitud = cadena.length;
        return longitud > 60
            ? cadena.slice(0, parseInt(longitud / 2)) + "..."
            : cadena;
    };

    fetchContent = async (id) => {
        return await fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=344d2014`)
            .then(res => res.json())
            .then(data => data)
    }

    LoadingModal = async () => {
        try {
            if (this.state.data.imdbID !== this.props.movie.imdbID) {
                let data = await this.fetchContent(this.props.movie.imdbID);
                this.setState({ data: data, showModal: true })
            }
        } catch (error) {
            console.error(error)
        }
    }
    render() {
        this.LoadingModal()
        return (
            <>
                <div
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
                        <p className="">
                            {this.selectTitle(this.props.movie.Title)}
                        </p>
                        <div>
                            <i href="#" className="badge year">
                                {this.props.movie.Year}
                            </i>
                        </div>
                    </div>
                </div>
                {(this.state !== undefined) && <Modal movie={this.state.data} selectPoster={this.selectPoster} />}
            </>
        );
    }
}
