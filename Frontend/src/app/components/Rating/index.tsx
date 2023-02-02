import { IRating } from "./Rating";
import { Rating } from "@mui/material";

const RatingComponent = (props: IRating) => {
  return <Rating {...props} precision={0.5} />;
};

export default RatingComponent;
