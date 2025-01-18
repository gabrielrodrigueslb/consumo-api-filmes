import { useEffect, useState } from 'react';
import axios from 'axios';
import './index.scss';
import MovieCard from '../MovieCard/MovieCard';

import ReactLoading from 'react-loading';

// chaveapi 0ce106132cb8f41a3ef20a2ba965f049

// link https://api.themoviedb.org/3/discover/movie

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovies();
  }, []);



  const getMovies = async () => {
    await axios({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        api_key: '0ce106132cb8f41a3ef20a2ba965f049',
        language: 'pt-BR',
      },
    }).then((response) => {
      setMovies(response.data.results);
      console.log(response.data.results);
    });

    setIsLoading(false)
  };

  if(isLoading){
    return(
      <div className='loading-container'>
         <ReactLoading type='spin' color='#6046ff' height={'5%'} width={'5%'} />
      </div>
    )
  }

  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          overview={movie.overview}
          poster_path={movie.poster_path}
          vote_average={movie.vote_average}
        />
      ))}
    </ul>
  );
}
