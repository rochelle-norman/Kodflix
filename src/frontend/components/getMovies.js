import Goodfellas from '../assets/Goodfellas.jpg'
import Leon from '../assets/Leon2.jpg'
import Donnie from '../assets/Donnie.jpg'
import Bourne from '../assets/Bourne.jpg'
import Alien from '../assets/Alien.jpg'
import Matrix from '../assets/Matrix.jpg'
import Spider from '../assets/Spiderman.jpg'
import Stranger from '../assets/Stranger-Things.jpg'

export default function getMovies() {
    return [
        { id: 'Goodfellas', title: 'Goodfellas', img: Goodfellas, synopsis: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate." },
        { id: 'Donnie Darko', title: 'Donnie Darko', img: Donnie, synopsis: "A troubled teenager is plagued by visions of a man in a large rabbit suit who manipulates him to commit a series of crimes, after he narrowly escapes a bizarre accident."},
        { id: 'Leon', title: 'Leon', img: Leon, synopsis: "Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade." },
        { id: 'Matrix', title: 'Matrix', img: Matrix, synopsis: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers." },
        { id: 'Stranger-things', title: 'Stranger Things', img: Stranger, synopsis: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back." },
        { id: 'Bourne', title: 'Bourne Identity', img: Bourne, synopsis: "A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins and attempting to regain his memory."},
        { id: 'Alien', title: 'Alien', img: Alien, synopsis: "After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun." },
        { id: 'Spiderman', title: 'Spiderman', img: Spider, synopsis: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family." }

    ];
}