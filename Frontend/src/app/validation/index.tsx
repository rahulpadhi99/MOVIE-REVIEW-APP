import * as yup from "yup";

export const AuthSchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  email: yup.string().email().required("Email is required field"),
  password: yup.string().min(5).max(10).required(),
});

export const SearchSchema = yup.object().shape({
  title: yup.string().required("Title is a required field"),
  year: yup.string(),
});

export const AddReviewSchema = yup.object().shape({
  ratings: yup.number(),
  description: yup.string().required("Description is a required field"),
});
