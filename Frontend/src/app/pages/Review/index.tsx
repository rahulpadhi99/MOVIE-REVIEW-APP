import Rating from "../../components/Rating";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import { useLocation } from "react-router-dom";
import TextArea from "../../components/TextArea";
import React, { useEffect, useState } from "react";
import { addReview, deleteReview, getReviews, updateReview } from "./Services";
import useQueryHook from "../../hooks/useQueryHook";
import ReviewCard from "../../components/ReviewCard";
import useMutationHook from "../../hooks/useMutationHook";
import IReviewProps, { IReviewDataProps, IReviewFormData } from "./Review";
import MovieDetailCard from "../../components/MovieDetailCard";
import {
  ReviewTextFieldDiv,
  ReviewContainerDiv,
  ReviewDetailDiv,
  MovieAndAddReviewDiv,
  MovieDetailDiv,
  ReviewDataDiv,
  ReviewForm,
  ReviewSummaryDiv,
  ReviewSummaryHeaderDiv,
  ReviewSummaryDetailDiv,
  TotalReviewDiv,
  TotalContentDiv,
  PositiveContentDiv,
  AverageContentDiv,
  NegativeContentDiv,
  CountDiv,
  PositiveReviewDiv,
  AverageReviewDiv,
  ReviewRatingDiv,
  NegativeReviewDiv,
  ReviewFormHeaderDiv,
  ReviewDetailHeaderDiv,
  ReviewSpanDiv,
} from "./styles";
import Avatar from "../../components/Avatar";
import { FormProvider, useForm } from "react-hook-form";
import { AddReviewSchema, SearchSchema } from "../../validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { ISearchData } from "../Home/Home";

const Review = (props: IReviewProps) => {
  const location = useLocation();
  const movieDetail = location?.state;
  const intialValue: IReviewFormData = {
    ratings: 0.5,
    description: "",
  };
  const [canGetAllReviews, setCanGetAllReviews] = useState(false);
  const [reviewFormData, setReviewFormData] =
    useState<IReviewFormData>(intialValue);
  const [allReviewData, setAllReviewData] = useState<IReviewDataProps[]>();
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  const { refetch: refetchAllReviews } = useQueryHook(
    ["getReviews"],
    getReviews,
    movieDetail?._id,
    {
      enabled: canGetAllReviews,
      onSuccess: (data: any) => {
        setAllReviewData(data);
      },
      onError: (error: any) => {},
      onSettled: () => {
        setCanGetAllReviews(false);
      },
    }
  );

  const { mutate: mutateAddReview } = useMutationHook(["addReview"], addReview);
  const { mutate: mutateUpdateReview } = useMutationHook(
    ["updateReview"],
    updateReview
  );
  const { mutate: mutateDeleteReview } = useMutationHook(
    ["updateReview"],
    deleteReview
  );

  const positiveReviews = allReviewData?.filter((e) => e.ratings > 3);
  const averageReviews = allReviewData?.filter((e) => e.ratings === 3);
  const negativeReviews = allReviewData?.filter((e) => e.ratings < 3);

  const submitRatingHandler = (
    event: React.SyntheticEvent<Element, Event>,
    value: number | null
  ) => {
    setReviewFormData((prev) => ({ ...prev, ratings: value }));
  };

  const submitReviewHandler = (data: IReviewFormData) => {
    const formData = { ...reviewFormData, ...data };
    isUpdating
      ? mutateUpdateReview(formData, {
          onSuccess: () => {
            refetchAllReviews();
          },
          onError: (error) => {},
          onSettled: () => {
            setIsUpdating(false);
            setReviewFormData(intialValue);
            methods.reset();
          },
        })
      : mutateAddReview(formData, {
          onSuccess: () => {
            refetchAllReviews();
          },
          onError: (error) => {
            console.log(error);
          },
          onSettled: () => {
            setIsUpdating(false);
            setReviewFormData(intialValue);
            methods.reset();
          },
        });
  };

  const updateReviewHandler = (review: IReviewDataProps) => {
    const { _id, ratings, description } = review;
    setIsUpdating(true);
    setReviewFormData({ reviewId: _id, ratings, description });
  };

  const deleteReviewHandler = (id: string) => {
    mutateDeleteReview(id, {
      onSuccess: () => {
        refetchAllReviews();
      },
      onError: (error) => {},
    });
  };

  useEffect(() => {
    setCanGetAllReviews(true);
    setReviewFormData((prev) => ({ ...prev, movieId: movieDetail?._id }));
  }, [movieDetail?._id]);

  const methods = useForm<IReviewFormData>({
    resolver: yupResolver(AddReviewSchema),
  });

  return (
    <>
      <Layout>
        <ReviewContainerDiv>
          <MovieAndAddReviewDiv>
            <MovieDetailDiv>
              <MovieDetailCard {...movieDetail} />
            </MovieDetailDiv>
            <ReviewSummaryDiv>
              <ReviewSummaryHeaderDiv>Review Summary</ReviewSummaryHeaderDiv>
              <ReviewSummaryDetailDiv>
                <TotalReviewDiv>
                  <Avatar name="count" background="orange">
                    <TotalContentDiv>
                      <CountDiv>{allReviewData?.length}</CountDiv>
                      Total
                    </TotalContentDiv>
                  </Avatar>
                </TotalReviewDiv>
                <PositiveReviewDiv>
                  <Avatar name="count" background="orange">
                    <PositiveContentDiv>
                      <CountDiv>{positiveReviews?.length}</CountDiv>
                      Positive
                    </PositiveContentDiv>
                  </Avatar>
                </PositiveReviewDiv>
                <AverageReviewDiv>
                  <Avatar name="count" background="orange">
                    <AverageContentDiv>
                      <CountDiv>{averageReviews?.length}</CountDiv>
                      Average
                    </AverageContentDiv>
                  </Avatar>
                </AverageReviewDiv>
                <NegativeReviewDiv>
                  <Avatar name="count" background="orange">
                    <NegativeContentDiv>
                      <CountDiv>{negativeReviews?.length}</CountDiv>
                      Negative
                    </NegativeContentDiv>
                  </Avatar>
                </NegativeReviewDiv>
              </ReviewSummaryDetailDiv>
            </ReviewSummaryDiv>
          </MovieAndAddReviewDiv>
          <ReviewDetailDiv>
            <ReviewDetailHeaderDiv>Reviews</ReviewDetailHeaderDiv>
            <ReviewDataDiv>
              {allReviewData?.map((review) => {
                return (
                  <ReviewCard
                    user={review.user}
                    ratings={review.ratings}
                    description={review.description}
                    onUpdate={() => updateReviewHandler(review)}
                    onDelete={() => deleteReviewHandler(review._id)}
                  />
                );
              })}
            </ReviewDataDiv>
            <FormProvider {...methods}>
              <ReviewForm onSubmit={methods.handleSubmit(submitReviewHandler)}>
                <ReviewFormHeaderDiv>Submit a review</ReviewFormHeaderDiv>
                <ReviewRatingDiv>
                  Submit Rating :
                  <ReviewSpanDiv>
                    <Rating
                      size="large"
                      name="ratings"
                      value={reviewFormData?.ratings}
                      onChange={submitRatingHandler}
                    />
                  </ReviewSpanDiv>
                </ReviewRatingDiv>
                <ReviewTextFieldDiv>
                  <TextArea
                    row="2"
                    column="4"
                    name="description"
                    label="Comment : "
                    placeholder="Write a review"
                    defaultValue={reviewFormData?.description}
                    isValidated
                    register={methods.register}
                    error={methods.formState.errors.description?.message}
                  />
                </ReviewTextFieldDiv>
                <Button kind="secondary">
                  {isUpdating ? "Update" : "Submit"}
                </Button>
              </ReviewForm>
            </FormProvider>
          </ReviewDetailDiv>
        </ReviewContainerDiv>
      </Layout>
    </>
  );
};

export default Review;
