import React from 'react';
import './Details.css'
import { Link, Redirect } from 'react-router-dom';
import getMovies from './getMovies'



export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: this.props.match.params.id,
            movie: this.props.match.params.id
        };
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        let movie = getMovies()
            .find((movie) => movie.id === id);
        this.setState({ movie })

    };

    render() {

        if (this.state.movie === undefined) {
            return <Redirect to='/NotFound' />
        }
        else {
            return (
                <div>
                    <h1>{this.state.message}</h1>
                    <Link to='/'>Back to home page</Link>
                </div>
            );
        }

    }
}
