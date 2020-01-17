import React from 'react';
import Gallery from '../components/Gallery';
import getMovies from '../components/getMovies'
import Nav from '../components/Nav'


export default function Home() {
    return (
<React.Fragment>
<Nav />
        <div className="RowContainer">
            {
                getMovies().map(movie => (
                    <Gallery
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        img={movie.img} />
                ))
            }


        </div>
        </React.Fragment>
    )
};


