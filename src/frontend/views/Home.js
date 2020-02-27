import React, { Component } from 'react';
import Gallery from '../components/Gallery';
import getMovies from '../components/getMovies'
import Nav from '../components/Nav'


export default class Home extends React.Component {

    componentDidMount() {
        console.log('home', this.props);
    }
    render() {
        return (
            <>
                <Nav />
                <div className="RowContainer">
                    {
                        getMovies().map(movie => (
                            <Gallery
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                img={movie.img} 
                                match={this.props.match} 
                            />
                        ))
                    }
                </div>
            </>
        )
    }
};


