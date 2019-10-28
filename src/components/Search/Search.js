import React, { Component } from "react";
import "./Search.css";

export default class Search extends Component {
    onSubmitForm = e => {
        e.preventDefault();
        this.props.searchMovie(this.inputText.value);
        // this.inputText.vxalue = "";
        this.inputText.focus();
    };

    render() {
        return (
            <div>
                <div className="container p-5 search">
                    <h1>SEARCH YOUR FAVORITE CONTENT</h1>
                    <a
                        href="https://github.com/jaime00/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://avatars2.githubusercontent.com/u/20992836?s=460&v=4"
                            className="m-5 rounded"
                            id="logo"
                            title="Click Me!"
                            alt="My Profile on Github"
                        />
                    </a>
                    <form onSubmit={this.onSubmitForm}>
                        <input
                            type="text"
                            className="form-control searchInput p-4"
                            placeholder="Enter here..."
                            autoFocus
                            ref={input => (this.inputText = input)}
                            required
                        />

                        <input
                            type="submit"
                            value="Search"
                            className="btn btn-primary btn-lg mt-3 btn-outline-warning"
                        />
                    </form>
                </div>
            </div>
        );
    }
}
