import React from "react";
import "./Movie.css";

const selectPoster = props => {
    return props.Poster === "N/A"
        ? "https://lightwidget.com/wp-content/uploads/2018/05/local-file-not-found-295x300.png"
        : "" + props.Poster;
};

const Movie = props => {
    return (
        <div className="" key={props.movie.imdbID}>
            <div className="card p-1 m-2" style={{ width: "18rem" }}>
                <img
                    src={selectPoster(props.movie)}
                    className="card-img-top"
                    alt={props.movie.Title}
                />
                <div className="card-body">
                    <p className="card-title">{props.movie.Title}</p>
                    <i href="#" className="badge year">
                        {props.movie.Year}
                    </i>
                </div>
            </div>
        </div>
    );
};

export default Movie;
