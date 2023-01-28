import { Rating } from "@mui/material";
import { IRating } from "./Rating";

const RatingComponent = (props: IRating) => {
  return <Rating {...props} precision={0.5} />;
};

export default RatingComponent;
