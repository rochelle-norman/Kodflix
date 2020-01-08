import React from 'react';

function Gallery(props) {

    return (
        <div className="Container">
        <div className="RowContainer">
          <div className="PosterContainer">
            <img className = "CoverImage" src={props.img} alt='Movie Poster'></img>
              <div className ="Title"><h1>{props.title}</h1></div>
          </div>
            <div className="PosterContainer">
            <img className = "CoverImage" src={props.img} alt='Movie Poster'></img>
            <div className ="Title"><h1>{props.title}</h1></div>
            </div>
            <div className="PosterContainer">
            <img className = "CoverImage" src={props.img} alt='Movie Poster'></img>
            <div className ="Title"><h1>{props.title}</h1></div>
          </div>
            <div className="PosterContainer">
            <img className = "CoverImage" src={props.img} alt='Movie Poster'></img>
            <div className ="Title"><h1>{props.title}</h1></div>
          </div>
         </div>
            <div className="RowContainer">
              <div className="PosterContainer">
              <img className = "CoverImage" src={props.img} alt='Movie Poster'></img>
              <div className ="Title"><h1>{props.title}</h1></div>
          </div>
              <div className="PosterContainer">
              <img className = "CoverImage" src={props.img} alt='Movie Poster'></img>
              <div className ="Title"><h1>{props.title}</h1></div>
                </div>
              <div className="PosterContainer">
              <img className = "CoverImage" src={props.img} alt='Movie Poster'></img>
              <div className ="Title"><h1>{props.title}</h1></div>
                </div>
              <div className="PosterContainer">
              <img className = "CoverImage" src={props.img} alt='Movie Poster'></img>
              <div className ="Title"><h1>{props.title}</h1></div>
                    </div>
          </div>
        </div>
    )
}

export default Gallery;