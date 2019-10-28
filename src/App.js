import React from "react";
import "./App.css";
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
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

    async fetchContent(id) {
        let aux = {};
        await fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=344d2014`)
            .then(res => res.json())
            .then(data => {
                aux = data;
            });
        return aux;
    }

    render() {
        // console.log(this.state);
        return (
            <Main
                searchMovie={this.searchMovie}
                state={this.state}
                fetchContent={this.fetchContent}
            />
        );
    }
}
function Main(props) {
    return (
        <div id="main">
            <Search searchMovie={props.searchMovie} />
            <Results state={props.state} fetchContent={props.fetchContent} />
            <Footer />
        </div>
    );
}
export default App;
