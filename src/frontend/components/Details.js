import React from 'react';
import './Details.css'
import { Link, Redirect } from 'react-router-dom';
import getMovies from './getMovies'
import NotFound from './NotFound'



export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: this.props.match.params.id,
            // synopsis:  this.props.match.params.id.synopsis,
        };
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        let movie = getMovies()
            .find((movie) => movie.id === id);
        this.setState({ movie, })

        fetch('/rest/movies')
            .then(response => response.json())
            .then(movieList => {
                this.setState({ movieList })
                return movieList
            })


    };

    render(props) {

        if (this.state.movie === undefined) {
            return <Redirect to='/NotFound' />
        }
        else {
            return (
                <div>

                    <div className="detailsContainer">
                        <div className="detailsRight">
                            <h1>{this.state.movie.id}</h1>
                            <p>{this.state.movie.synopsis}</p>
                            <Link to='/'>Back to home page</Link>
                        </div>
                        <div className="detailsLeft">
                            <img className="synopsisImage" src={this.state.movie.img} alt="Movie" />
                        </div>
                    </div>

                </div>
            );
        }

    }
}
