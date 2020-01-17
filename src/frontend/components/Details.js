import React from 'react';
import './Details.css'
import {Link} from 'react-router-dom';
import getMovies from './getMovies'


export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        //  message: this.props.match.params.movieId
        message: 'Hello from React'
        
        };
    }
 

    componentDidMount() {
        let id = this.props.match.params.id;
        let movie = getMovies()
        // let title = movie.title
        .find((movie) => movie.id === id);
       this.setState({movie})
       
    };

 

    render() {
      
        return (
            <div>
                <h1>{this.state.message}</h1>
                <Link to='/'>Back to home page</Link>
            </div>
        );
    }
}
