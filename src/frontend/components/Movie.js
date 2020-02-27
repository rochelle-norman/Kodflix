import React from 'react'
import { Link } from 'react-router-dom'
import './Movie.css'



export default function Movie({ id, title }) {
  let url = `/${id}`;
  return (
    <div className='movie-cover-container'>
      <div className='movie-cover'>

        <Link to={url}><img src={require(`../assets/${id}.jpg`)} alt={`${title} movie cover`} /></Link>
      </div>
      <div className='movie-wall'>
        <div className="title-overlay">
          <h2>{`${id}`}</h2>
        </div>
      </div>
    </div>
  );
}


// export default function Movie(props) {
//     return (
//         <Link to={props.id} className='item'>
//             <img src={`../assets/${props.img}`} alt={`${props.title} 'Poster'`} />
//             <div className="overlay">
//                 <h2>{props.title}</h2>
//             </div>
//         </Link>
//     );
// }