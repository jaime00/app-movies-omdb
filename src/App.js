import React from "react";
import "./App.css";
import Main from "./components/Main/Main.js";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    searchMovie = name => {
        fetch(`https://www.omdbapi.com/?s=${name}&apikey=344d2014`)
            .then(res => res.json())
            .then(data => {
                this.setState({ movies: data.Search });
            });
    };

    render() {
        console.log(this.state);
        return (
            <>
                <Main searchMovie={this.searchMovie} />
                <Search state={this.state} />
                <Footer />
            </>
        );
    }
}

export default App;
