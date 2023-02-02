import IImageProps from "../Image/Image";

export default interface IMovieCardProps {
  movieName: string;
  movieTime: string;
  movieGenre: string;
  onClick: () => void;
  movieRelease: string;
  imageDetail: IImageProps;
}
