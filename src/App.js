import React from "react";
import "./App.css";
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            movieName: "",
            loading: false
        };
    }

    removeSameIds = data => {
        let ids = []
        data.Search.forEach(movie => ids.push(movie.imdbID))
        let dist = [...new Set(ids)];
        if (dist.length === ids.length) return data.Search
        let newData = []
        dist.forEach(id => {
            let found = data.Search.find(element => (element.imdbID === id));
            newData.push(found);
        })
        return newData
    }

    searchMovie = async (movieName) => {
        if (this.state.movieName !== movieName) {
            this.setState({ loading: true })
            this.timeoutId = setTimeout(async () => {
                let response = await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=344d2014`);
                let data = await response.json();
                if (data.Response === "True") {
                    data = this.removeSameIds(data)
                    this.setState({ movies: data, movieName, loading: false });
                } else {
                    this.setState({ movies: undefined, movieName, loading: false });
                }
            }, 0);
        }
    };
    componentWillUnmount() {
        clearTimeout(this.timeoutId)
    }
    render() {
        return (
            <>
                <Search searchMovie={this.searchMovie} />
                <Results state={this.state} fetchContent={this.fetchContent} />
                <Footer />
            </>
        );
    }
}

export default App;
