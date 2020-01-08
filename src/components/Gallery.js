import React from 'react';
import './Gallery.css'

function Gallery(props) {

    return (
        <div className="RowContainer">
          <div className="PosterContainer">
            <img className = "CoverImage" src={props.img} alt='Movie Poster'></img>
              <div className ="Title"><h1>{props.title}</h1></div>
         </div>
        </div>
    )
}

export default Gallery;