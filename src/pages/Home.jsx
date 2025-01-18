import '../App.scss'
import MovieList from '../components/MovieList/MovieList'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
   return (
      <>
        <Navbar/>
        <MovieList/>
      </>
    )
  }
