import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(5).max(10).required(),
});

export const SearchSchema = yup.object().shape({
  title: yup.string().required(),
  year: yup.string(),
});

export const AddReviewSchema = yup.object().shape({
  ratings: yup.number(),
  description: yup.string().required(),
});
