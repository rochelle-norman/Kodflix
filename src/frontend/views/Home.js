import React from 'react';
import Gallery from '../components/Gallery';
import getMovies from '../components/GalleryGet'
import Details from '../components/Details'

export default function Home() {
    return (
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
            <Details/>
        </div>

    )
};


