import React, { Component } from "react";
import "./Search.css";
import UserIconGitHub from "../../images/UserIconGitHub.png";
export default class Search extends Component {
    onSubmitForm = e => {
        e.preventDefault();
        this.props.searchMovie(this.inputText.value);
        // this.inputText.placeholder = this.inputText.value;
        // this.inputText.value = "";
        this.inputText.focus();
    };

    render() {
        return (
            <div>
                <div className="container p-5 search">
                    <h1 className="glow">SEARCH YOUR FAVORITE CONTENT</h1>
                    <a
                        href="https://github.com/jaime00/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={UserIconGitHub}
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
                            ref={input => this.inputText = input}
                            required
                        />

                        <input
                            type="submit"
                            value="Search"
                            className="btn btn-lg mt-3 search-button"
                        />
                    </form>
                </div>
            </div>
        );
    }
}
