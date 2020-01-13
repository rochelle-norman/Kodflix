import Goodfellas from '../assets/Goodfellas.gif'
import Leon from '../assets/Leon2.jpg'
import Donnie from '../assets/Donnie.jpg'
import Bourne from '../assets/Bourne1.jpg'
import Alien from '../assets/alien.jpeg'
import Matrix from '../assets/matrix.jpg'
import Spider from '../assets/Spiderman.jpg'
import Stranger from '../assets/Stranger1.jpg'

export default function getMovies() {
    return [
        { id: 'goodfellas', title: 'Goodfellas', img: Goodfellas },
        { id: 'donnie-darko', title: 'Donnie Darko', img: Donnie },
        { id: 'leon', title: 'Leon', img: Leon, },
        { id: 'matrix', title: 'Matrix', img: Matrix, },
        { id: 'stranger-things', title: 'Stranger Things', img: Stranger, },
        { id: 'bourne identity', title: 'Bourne Identity', img: Bourne, },
        { id: 'alien', title: 'Alien', img: Alien, },
        { id: 'spiderman', title: 'Spiderman', img: Spider, }

    ];
}