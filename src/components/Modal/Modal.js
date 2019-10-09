import React from "react";

export default function Modal(props) {
    return (
        <div
            className="modal fade"
            id={"" + props.movie.imdbID}
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
        >
            <div
                className="modal-dialog modal-dialog-centered black"
                role="document"
            >
                <div className="modal-content">
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
                    <div className="row p-3">
                        <div
                            className="rounded p-1 m-2 col"
                            style={{ width: "18rem", border: "1px solid grey" }}
                        >
                            <img
                                src={props.selectPoster(props.movie)}
                                className="card-img-top"
                                alt={props.movie.Title}
                            />
                        </div>
                        <div className="rounded p-1 m-2 col">
                            <div className="">
                                <b>Year:</b>
                                {props.movie.Year}
                            </div>
                            <div className="">
                                <b>Released:</b>
                                {props.movie.Released}
                            </div>
                            <div className="">
                                <b>Genre:</b>
                                {props.movie.Genre}
                            </div>
                            <div className="">
                                <b>Director:</b>
                                {props.movie.Director}
                            </div>
                            <div className="">
                                <b>Plot:</b>
                                {props.movie.Plot}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
