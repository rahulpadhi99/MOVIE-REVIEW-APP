import "./MovieCard.scss";
import IMovieCardProps from "./MovieCard";
import Image from "../Image";

const MovieCard = (props: IMovieCardProps) => {
  const {
    imageDetail,
    movieName,
    movieRelease,
    movieGenre,
    movieTime,
    movieRating,
    onClick,
  } = props;
  return (
    <div className="movie-card" onClick={onClick}>
      <div className="movie-image-container">
        <Image {...imageDetail} />
      </div>
      <div className="movie-details-container">
        <div className="movie-name">{movieName}</div>
        <div className="movie-time">
          <span>Run Time : </span>
          {movieTime}
        </div>
        <div className="movie-genre">
          <span>Genre : </span>
          {movieGenre}
        </div>
        <div className="movie-release">
          <span>Release Date : </span>
          {movieRelease}
        </div>
        <div className="movie-rating">
          <span>Ratings : </span>
          {movieRating}
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
