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
        e.preventDefault();
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
                        <form>
                            <input
                                type="text"
                                className="form-control "
                                placeholder="Enter name Favorite Content"
                                required
                                autoFocus
                                ref={input => (this.inputText = input)}
                            />
                            <input
                                type="submit"
                                value="Search"
                                className="btn btn-primary btn-lg mt-3"
                                onClick={this.onSubmitForm}
                            />
                        </form>
                    </div>
                </header>
                <div className="row movies">
                    {this.state.movies.map(movie => {
                        return <Movie movie={movie} />;
                    })}
                </div>
            </>
        );
    }
}

export default App;
