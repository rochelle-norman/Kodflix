import React from 'react';
import './Gallery.css'
import { Link } from 'react-router-dom';

export default class extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         movie: [],
    //         movieList: []

    //     }
    // }
    // getFirst() {
    //     let id = this.props.match.params.id;
    //     let movie = this.state.movieList.find((movie) => movie.id === id);
    //     this.setState({ movie })
    // }
    // componentDidMount() {
    //     let id = this.props.match.params.id;
    //     fetch('/rest/movies')
    //         .then(response => response.json())
    //         .then(movieList => {

    //             this.setState({movieList:movieList.movieList})
    // this.setState({ movieList: movieList.movieList }, () => {
    //     let movie = this.state.movieList.find((movie) => movie.id === id)
    //     this.setState({ movie })
    //})
    // return movieList})
    // .then(() => this.getFirst())
    // }


    render() {

        return (
            <div className="RowContainer">
                <div className="PosterContainer">

                    <div className="Title"><h1></h1></div>
                    
                </div>
            </div>
        )

    }

}

// <div className="Title"><h1>{movies.title}</h1></div>
// export default function Gallery(props) {
//     return (
//         <div className="RowContainer">
//             <div className="PosterContainer">
//                 <Link to={props.id}><img className="CoverImage" src={props.img} alt='Movie Poster'></img></Link>
//                 <div className="Title"><h1>{props.title}</h1></div>
//             </div>
//         </div>
//     )
// };


// fetch('/rest/movies')
// .then(response => response.json())
// .then(movieList => this.setState({ movieList: movieList }))
// .then(() => this.checkMovie())
// .then(() => this.setState({ loaded: true }));

// }

// checkMovie() {
// let id = this.props.match.params.id;
// console.log(this.state.id)
// let movie = this.state.movie.find((movie) => movie.id === id)
// console.log(this.state.movie)
// this.setState({ movie });
// return movie;
// }

// <Link to={this.state.props.movie.id}></Link>

// <div className="Title"><h1>{this.state.props.movie.title}</h1></div>

// let id = this.props.match.params.id;
// let movie = this.state.movieList.find((movie) => movie.id === id);
// this.setState({ movie, })
// fetch('/rest/movies')
//     .then(response => response.json())
//     .then(movieList => {
//         this.setState({ movieList: movieList }, () => {
//             let movie = this.state.movieList.find((movie) => movie.id === id)
//             this.setState({ movie })
//         })
//         return movieList
//     });


// <img className="CoverImage" src={this.state.movie && this.state.movie.img} alt='Movie Poster'></img> 

// <img src={`${process.env.PUBLIC_URL}/assets/alien.jpeg`}/>


// export default function Gallery(props) {
//     return (
//         <div className="RowContainer">
//             <div className="PosterContainer">
//                 <Link to={props.id}><img className="CoverImage" src={props.img} alt='Movie Poster'></img></Link>
//                 <div className="Title"><h1>{props.title}</h1></div>
//             </div>
//         </div>
//     )
// };

// <img src={require(`../assets/${movie.id}.jpeg`)} alt="" />


// export default class extends React.Component {

//     constructor() {
//         super();
//         this.state = { movies: [], loaded: false };
//     }

//     componentDidMount() {
//         fetch('/rest/movies')
//             .then(response => response.json())
//             .then(movies => this.setState({ movies: movies }))
//             .then(() => this.setState({ loaded: true }));
//     }

//     content() {
//         let { movies } = this.state;
//         return (
//             <div>
//                 <div>

//                 </div>
//                 <div className="RowContainer">
//                     {
//                         movies.map(movie => (
//                             <Link
//                                 key={movie.id}
//                                 id={movie.id}
//                                 name={movie.name}
//                                 year={movie.year}
//                                 cover={movie.cover} 
//                             />
//                         ))
//                     }
//                 </div>
//             </div>
//         );
//     }

//     render() {
//         return this.state.loaded ? this.content() : <div></div>;
//     }
// }
