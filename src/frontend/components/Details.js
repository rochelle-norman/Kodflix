import React from 'react';
import './Details.css'
import {Link} from 'react-router-dom';
import getMovies from './getMovies'


export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         movie: "Hello, this will be the details page for each Movie & TV show :",
        };
    }
 
    componentDidMount() {
        let movieId = this.props.match.params.movieId;
        let movie = getMovies()
        .find((movie) => movie.id === movieId);
       this.setState({movie})
    };

    render() {
      
        return (
            <div>
          
                <h1>{this.state.movie.title}</h1>
                <Link to='/'>Back to home page</Link>
            </div>
        );
    }
}
