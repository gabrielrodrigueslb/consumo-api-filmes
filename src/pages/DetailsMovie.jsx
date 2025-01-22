import { Link, useParams } from 'react-router-dom';
import { getMovies } from '../js/api';
import { IoArrowBackOutline, IoPersonSharp } from 'react-icons/io5';
import { FaStar, FaCalendarAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar/Navbar';
import { useState, useEffect } from 'react';

import './DetailsMovie.scss';

export default function DetailsMovie() {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await getMovies();
        setMovies(res);
      } catch (error) {
        console.error('Erro ao buscar os filmes:', error);
      }
    };

    fetchMovies();
  }, []);

  // Encontra o filme com base no id, se id e movies existirem
  const movie = movies.find((movie) => movie.id === parseInt(id));

  // Verifica se movie é undefined antes de renderizar o conteúdo
  if (!movie) {
    return <div>Loading...</div>;
  }

  console.log(movie);
  return (
    <div className="details-movie">
      <Navbar />

      <div className="container-icon">
        <Link className="icon-arrow" to={'/'}>
          <IoArrowBackOutline />
        </Link>
      </div>

      <div className="card-de-infos">
        <img
          className="capa"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="infos">
          <h1 className="title">{movie.title}</h1>
          <p className="description">{movie.overview}</p>
          <div className='sub-infos'>
              <p className='rating'>
                <FaStar />
                {movie.vote_average}
              </p>
              <p className='date'><FaCalendarAlt />{movie.release_date}</p>
              <p className="popularity"><IoPersonSharp />{movie.popularity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
