import StarRating from '../StarRate/StarRating';
import './index.scss';
import PropTypes from 'prop-types';

MovieCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
};

export default function MovieCard(props) {
  return (
    <li className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
          alt={props.title}
        />
      </div>
      <div className="movie-infos">
        <p className="movie-title">{props.title}</p>
        {props.vote_average > 0 &&  <StarRating rating={props.vote_average} />}
        <div className="hidden-content">
          {props.overview && (
            <p className="description">
              {props.overview.length > 100
                ? `${props.overview.substring(0, 100)}...`
                : props.overview}
            </p>
          )}
          <button className="btn-default">Ver mais</button>
        </div>
      </div>
    </li>
  );
}
