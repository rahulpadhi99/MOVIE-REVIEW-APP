import IImageProps from "../Image/Image";

export default interface IMovieCardProps {
  imageDetail: IImageProps;
  movieName: string;
  movieRelease: string;
  movieGenre: string;
  movieTime: string;
  onClick: () => void;
}
