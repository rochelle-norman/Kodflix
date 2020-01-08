import React from 'react';
import Gallery from '../components/Gallery';
import Gooofellas from './assets/Goodfellas.gif'
import Leon from './assets/Leon2.jpg'
import Donnie from './assets/Donnie.jpg'
import Bourne from './assets/Bourne1.jpg'
import Alien from './assets/alien.jpeg'
import Matrix from './assets/matrix.jpg'
import Fight from './assets/Fight.jpg'
import Spider from './assets/Spiderman.jpg'

function Home(){
    return (
       
<div className="Container">
<div className="RowContainer">
  <div className="PosterContainer">
    <img className = "CoverImage" src={Gooofellas} alt='Goofellas Poster'></img>
      <div className ="Title"><h1>Goodfellas</h1></div>
  </div>
    <div className="PosterContainer">
      <img className = "CoverImage" src={Donnie} alt='Donnie Darko Poster'></img>
        <div className ="Title"><h1>Donnie Darko</h1></div>
    </div>
    <div className="PosterContainer">
      <img className = "CoverImage" src={Leon} alt='Leon Poster'></img>
        <div className ="Title"><h1>Leon</h1></div>
  </div>
    <div className="PosterContainer">
      <img className = "CoverImage" src={Bourne} alt='Bourne Identity Poster'></img>
        <div className ="Title"><h1>Bourne Identity</h1></div>
  </div>
 </div>
    <div className="RowContainer">
      <div className="PosterContainer">
        <img className = "CoverImage" src={Matrix} alt='Matrix Poster'></img>
          <div className ="Title"><h1>Matrix</h1></div>
  </div>
      <div className="PosterContainer">
        <img className = "CoverImage" src={Fight} alt='Fight Club Poster'></img>
          <div className ="Title"><h1>Fight Club</h1></div>
        </div>
      <div className="PosterContainer">
        <img className = "CoverImage" src={Alien} alt='Alien Poster'></img>
          <div className ="Title"><h1>Alien</h1></div>
        </div>
      <div className="PosterContainer">
        <img className = "CoverImage" src={Spider} alt='Spiderman Poster'></img>
          <div className ="Title"><h1>Spiderman</h1></div>
            </div>
  </div>
</div>
    )
}

export default Home