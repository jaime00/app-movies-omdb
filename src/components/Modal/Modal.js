import React from "react";

export default function Modal(props) {
    return (
        <div
            className="modal"
            id={"" + props.movie.imdbID}
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
        >
            <div
                className="modal-lg modal-dialog modal-dialog-centered black align-middle"
                role="document"
            >
                <div
                    className="modal-content"
                    style={{ backgroundColor: "whitesmoke" }}
                >
                    <div className="modal-header">
                        <h5 className="modal-title">{props.movie.Title}</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="p-3 row">
                        <div
                            className="rounded p-1 m-2 col-4"
                            style={{
                                width: "18rem",
                                border: "1px solid grey"
                            }}
                        >
                            <img
                                src={props.selectPoster(props.movie)}
                                className="card-img-top"
                                alt={props.movie.Title}
                            />
                        </div>
                        <div className="rounded p-1 m-2 col">
                            <div className="p-1">
                                <b>Year: </b>
                                {props.movie.Year}
                            </div>
                            <div className="p-1">
                                <b>Released: </b>
                                {props.movie.Released}
                            </div>
                            <div className="p-1">
                                <b>Genre: </b>
                                {props.movie.Genre}
                            </div>
                            <div className="p-1">
                                <b>Director: </b>
                                {props.movie.Director}
                            </div>
                            <div className="p-1">
                                <b>Plot: </b>
                                {props.movie.Plot}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
