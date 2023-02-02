import Image from "../Image";
import IMovieCardProps from "./MovieCard";
import {
  StyledSpan,
  MovieNameDiv,
  MovieCardDiv,
  MovieTimeDiv,
  MovieGenreDiv,
  MovieReleaseDiv,
  ImagContainerDiv,
  DetailsContainerDiv,
} from "./styles";

const MovieCard = (props: IMovieCardProps) => {
  const {
    imageDetail,
    movieName,
    movieRelease,
    movieGenre,
    movieTime,
    onClick,
  } = props;
  return (
    <MovieCardDiv onClick={onClick}>
      <ImagContainerDiv>
        <Image {...imageDetail} />
      </ImagContainerDiv>
      <DetailsContainerDiv>
        <MovieNameDiv>{movieName}</MovieNameDiv>
        <MovieTimeDiv>
          <StyledSpan>Run Time : </StyledSpan>
          {movieTime}
        </MovieTimeDiv>
        <MovieGenreDiv>
          <StyledSpan>Genre : </StyledSpan>
          {movieGenre}
        </MovieGenreDiv>
        <MovieReleaseDiv>
          <StyledSpan>Release Date : </StyledSpan>
          {movieRelease}
        </MovieReleaseDiv>
      </DetailsContainerDiv>
    </MovieCardDiv>
  );
};
export default MovieCard;
