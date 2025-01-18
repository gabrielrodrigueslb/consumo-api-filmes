import './index.scss';
import { FaStar, FaRegStar } from 'react-icons/fa6';

import PropTypes from 'prop-types';

StartRating.propTypes = {
  rating: PropTypes.number,
};

export default function StartRating(props) {
  const numStars = Math.round((props.rating / 10) * 5);

  const fullStars = [];
  const emptyStars = [];

  for (let i = 0; i < 5; i++) {
    if (i < numStars) {
      fullStars.push(i);
    } else {
      emptyStars.push(i);
    }
  }

  return (
    < div className="movie-rate">
      {fullStars.map((index) => (
        <FaStar key={index} />
      ))}
      {emptyStars.map((index) => (
        <FaRegStar key={index} />
      ))}
    </div>
  );
}
