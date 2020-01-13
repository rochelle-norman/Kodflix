import React from 'react';
import './Gallery.css'
import { Link } from 'react-router-dom';


export default function Gallery(props) {
    return (
        <div className="RowContainer">
            <div className="PosterContainer">
                <Link to={props.id}><img className="CoverImage" src={props.img} alt='Movie Poster'></img></Link>
                <div className="Title"><h1>{props.title}</h1></div>
            </div>
        </div>
    )
}


{/*  <Link to={props.id}><img className="CoverImage" src={props.img} alt='Movie Poster'></img></Link>
                <div className="Title"><h1>{props.title}</h1></div> */}