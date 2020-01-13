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
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div>
            <div className="RowContainer">
                <div className="PosterContainer">
                    <Link to='goodfellas'><Gallery title={"Goodfellas"} img={Goodfellas} id="goodfellas" /></Link>
                </div>
                <div className="PosterContainer">
                    <Gallery title={"Donnie Darko"} img={Donnie} id="donnie-darko" />
                </div>
                <div className="PosterContainer">
                    <Gallery title={"Leon"} img={Leon} id="leon" />
                </div>
                <div className="PosterContainer">
                    <Gallery title={"Matrix"} img={Matrix} id="matrix" />
                </div>
            </div>
            <div className="RowContainer">
                <div className="PosterContainer">
                    <Gallery title={"Stranger Things"} img={Stranger} id="stranger-things" />
                </div>
                <div className="PosterContainer">
                    <Gallery title={"Bourne Identity"} img={Bourne} id="bourne-identity" />
                </div>
                <div className="PosterContainer">
                    <Gallery title={"Alien"} img={Alien} id="alien" />
                </div>
                <div className="PosterContainer">
                    <Gallery title={"Spiderman"} img={Spider} id="spiderman" />
                </div>
            </div>
        </div>
    )
}


