import React, { Component } from "react";
import "./Main.css";
export default class Main extends Component {
    onSubmitForm = e => {
        e.preventDefault();
        this.props.searchMovie(this.inputText.value);
        // this.inputText.value = "";
        this.inputText.focus();
    };

    render() {
        return (
            <header className="">
                <div className="container p-5">
                    <h1>SEARCH YOUR FAVORITE MOVIES</h1>
                    <a
                        href="https://github.com/jaime00/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://avatars2.githubusercontent.com/u/20992836?s=460&v=4"
                            className="logo m-5 rounded "
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
            </header>
        );
    }
}
