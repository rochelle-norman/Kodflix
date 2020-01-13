import React from 'react';
import Gallery from '../components/Gallery';
import Goodfellas from '../assets/Goodfellas.gif'
import Leon from '../assets/Leon2.jpg'
import Donnie from '../assets/Donnie.jpg'
import Bourne from '../assets/Bourne1.jpg'
import Alien from '../assets/alien.jpeg'
import Matrix from '../assets/matrix.jpg'
import Spider from '../assets/Spiderman.jpg'
import Stranger from '../assets/Stranger1.jpg'
import getMovies from '../components/GalleryGet'

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
        </div>

    )
};


