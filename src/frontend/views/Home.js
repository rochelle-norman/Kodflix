import React, { Component } from 'react';
import Gallery from '../components/Gallery';
import getMovies from '../components/getMovies'
import { Link } from 'react-router-dom';
import Nav from '../components/Nav'


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            movieList: []

        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        fetch('/rest/movies')
            .then(response => response.json())
            .then(movieList => {
                console.log(movieList)
                this.setState({movieList:movieList.movieList})
                // this.setState({ movieList: movieList.movieList }, () => {
                //     let movie = this.state.movieList.find((movie) => movie.id === id)
                //     this.setState({ movie })
                //})
                return movieList})
            }
    render() {
        return (
            <>
                <Nav />
                <div className="RowContainer">
                    {
                        this.state.movieList.map(movies => (
                            <Link
                                key={movies.id}
                                id={movies.id}
                                poster={movies.img}>Hello</Link> 
                        ))
                    }
                </div>
            </>
        )
    }
};


