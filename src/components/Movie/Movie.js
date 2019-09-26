import React, { Component } from "react";
import "./Movie.css";

export default class Movie extends Component {
    selectPoster(props) {
        if (props.Poster === "N/A") {
            return "https://lightwidget.com/wp-content/uploads/2018/05/local-file-not-found-295x300.png";
        } else {
            return "" + props.Poster;
        }
    }
    render() {
        return (
            <div className="">
                <div
                    className="card p-2 m-2 inline-block"
                    style={{ width: "18rem" }}
                >
                    <img
                        src={this.selectPoster(this.props.movie)}
                        class="card-img-top"
                        alt=""
                    />
                    <div class="card-body">
                        <h5 class="card-text">{this.props.movie.Title}</h5>
                    </div>
                </div>
            </div>
        );
    }
}
