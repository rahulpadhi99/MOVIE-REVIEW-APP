import Image from "../Image";
import IMovieDetailCardProps from "./MovieDetailCard";
import {
  MovieDetailContainerDiv,
  ImageContainerDiv,
  DetailsContainerDiv,
  MovieNameDiv,
  MovieReleaseDiv,
  MovieRunDiv,
  MovieGenreDiv,
  MovieActorsDiv,
  MovieDirectorDiv,
  MoviePlotDiv,
  MovieIMDBRatingDiv,
  MovieBoxOfficeDiv,
  StyledSpan,
} from "./styles";

const MovieDetailCard = (props: IMovieDetailCardProps) => {
  const movie = { ...props };
  return (
    <MovieDetailContainerDiv>
      <ImageContainerDiv>
        <Image src={movie.poster} alt="image.png" size="large"></Image>
      </ImageContainerDiv>
      <DetailsContainerDiv>
        <MovieNameDiv>{movie.title}</MovieNameDiv>
        <MovieReleaseDiv>
          <StyledSpan>Released On : </StyledSpan>
          {movie.released}
        </MovieReleaseDiv>
        <MovieRunDiv>
          <StyledSpan>Run Time : </StyledSpan>
          {movie.runTime}
        </MovieRunDiv>
        <MovieGenreDiv>
          <StyledSpan>Genre : </StyledSpan>
          {movie.genre}
        </MovieGenreDiv>
        <MovieActorsDiv>
          <StyledSpan>Actors : </StyledSpan>
          {movie.actors}
        </MovieActorsDiv>
        <MovieDirectorDiv>
          {" "}
          <StyledSpan>Director : </StyledSpan>
          {movie.director}
        </MovieDirectorDiv>
        <MoviePlotDiv>
          <StyledSpan>Story : </StyledSpan>
          {movie.plot}
        </MoviePlotDiv>
        <MovieIMDBRatingDiv>
          <StyledSpan>IMDB Rating : </StyledSpan>
          {movie.imdbRating}
        </MovieIMDBRatingDiv>
        <MovieBoxOfficeDiv>
          <StyledSpan>Box Office Collection : </StyledSpan>
          {movie.boxOffice}
        </MovieBoxOfficeDiv>
      </DetailsContainerDiv>
    </MovieDetailContainerDiv>
  );
};

export default MovieDetailCard;
