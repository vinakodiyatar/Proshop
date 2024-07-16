import { FaStar, FaRegStar, FaStarHalf } from "react-icons/fa";
const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      <spna>
        {value >= 1 ? (
          <FaStar />
        ) : value >= 0.5 ? (
          <FaStarHalf />
        ) : (
          <FaRegStar />
        )}
      </spna>
      <spna>
        {value >= 2 ? (
          <FaStar />
        ) : value >= 1.5 ? (
          <FaStarHalf />
        ) : (
          <FaRegStar />
        )}
      </spna>
      <spna>
        {value >= 3 ? (
          <FaStar />
        ) : value >= 2.5 ? (
          <FaStarHalf />
        ) : (
          <FaRegStar />
        )}
      </spna>
      <spna>
        {value >= 4 ? (
          <FaStar />
        ) : value >= 3.5 ? (
          <FaStarHalf />
        ) : (
          <FaRegStar />
        )}
      </spna>
      <spna>
        {value >= 5 ? (
          <FaStar />
        ) : value >= 4.5 ? (
          <FaStarHalf />
        ) : (
          <FaRegStar />
        )}
      </spna>
      <span className="rating-text">{text && text}</span>
    </div>
  );
};

export default Rating;
