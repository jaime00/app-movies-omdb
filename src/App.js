import React from "react";
import Movie from "./components/Movie/Movie";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    onSubmitForm = e => {
        if (this.inputText !== "") e.preventDefault();
        console.log(this.inputText.value);
        this.searchMovie(this.inputText.value);
        // this.inputText.value = "";
        this.inputText.focus();
    };

    searchMovie() {
        fetch(
            "https://www.omdbapi.com/?s=" +
                (this.inputText.value + "&apikey=344d2014")
        )
            .then(res => res.json())
            .then(data => {
                this.setState({ movies: data.Search });
            });
    }

    render() {
        return (
            <>
                <header className="">
                    <div className="container p-5">
                        <img
                            src="https://avatars2.githubusercontent.com/u/20992836?s=460&v=4"
                            className="logo m-3"
                            alt=""
                        />
                        <h2 className="m-3">Search your favorite content </h2>
                        <form onSubmit={this.onSubmitForm}>
                            <input
                                type="text"
                                className="form-control search"
                                placeholder="Enter here..."
                                autoFocus
                                ref={input => (this.inputText = input)}
                                required
                            ></input>
                            <input
                                type="submit"
                                value="Search"
                                className="btn btn-primary btn-lg mt-3"
                            />
                        </form>
                    </div>
                </header>
                <div className="card-deck movies text-center">
                    {this.state.movies.map(movie => {
                        return <Movie movie={movie} />;
                    })}
                </div>
            </>
        );
    }
}

export default App;
