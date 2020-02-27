import React from 'react';
import './Details.css'
import { Link, Redirect } from 'react-router-dom';
import NotFound from './NotFound'



export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: this.props.match.params.id,
            // synopsis:  this.props.match.params.id.synopsis,
        };
    }

    getFirst() {
        let id = this.props.match.params.id;
        let movie = this.state.movieList.find((movie) => movie.id === id);
        this.setState({ movie })
    }


    componentDidMount() {
        fetch('/rest/movies')
            .then(response => response.json())
            .then(movieList => {
                this.setState({ movieList: movieList.movieList })
                return movieList})
            .then(() => this.getFirst())
    };

    render() {
        let { movie } = this.state;
        if (this.state.movie === undefined) {
            return <Redirect to='/NotFound' />
        }
        else {
            return (
                <div>

                    <div className="detailsContainer">
                        <div className="detailsRight">
                            <h1>{movie.id}</h1>
                            <p>{movie.synopsis}</p>
                            <Link to='/'>Back to home page</Link>
                        </div>
                        <div className="detailsLeft">
                         <img src={movie.img && require(`../assets/${movie.img}.jpg`)} alt="" />
                        </div>
                    </div>

                </div>
            );
        }

    }
}

// <img className="synopsisImage" src={this.state.movie.img} alt="Movie" />

// <img src={require(`../assets/${movie.id}.jpeg`)} alt="" />