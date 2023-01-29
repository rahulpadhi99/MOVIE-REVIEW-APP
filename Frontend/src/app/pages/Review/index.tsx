import Rating from "../../components/Rating";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import { useLocation } from "react-router-dom";
import TextArea from "../../components/TextArea";
import React, { useEffect, useState } from "react";
import { addReview, getReviews } from "./Services";
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

const Review = (props: IReviewProps) => {
  const location = useLocation();
  const movieDetail = location?.state;
  const intialValue: IReviewFormData = {
    movieId: "",
    ratings: null,
    description: "",
  };
  const [canGetAllReviews, setCanGetAllReviews] = useState(false);
  const [reviewFormData, setReviewFormData] =
    useState<IReviewFormData>(intialValue);
  const [allReviewData, setAllReviewData] = useState<IReviewDataProps[]>();

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

  const { mutate } = useMutationHook(["addReview"], addReview);

  const positiveReviews = allReviewData?.filter((e) => e.ratings > 3);
  const averageReviews = allReviewData?.filter((e) => e.ratings === 3);
  const negativeReviews = allReviewData?.filter((e) => e.ratings < 3);

  const submitRatingHandler = (
    event: React.SyntheticEvent<Element, Event>,
    value: number | null
  ) => {
    setReviewFormData((prev) => ({ ...prev, ratings: value }));
  };

  const submitReviewHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate(reviewFormData, {
      onSuccess: () => {
        refetchAllReviews();
        setReviewFormData(intialValue);
      },
      onError: (error) => {},
    });
  };

  const textChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewFormData((prev) => ({ ...prev, description: event.target.value }));
  };

  useEffect(() => {
    setCanGetAllReviews(true);
    setReviewFormData((prev) => ({ ...prev, movieId: movieDetail?._id }));
  }, [movieDetail?._id]);
  //150px
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
                    description={review.description}
                    ratings={review.ratings}
                  />
                );
              })}
            </ReviewDataDiv>
            <ReviewForm onSubmit={submitReviewHandler}>
              <ReviewFormHeaderDiv>Submit a review</ReviewFormHeaderDiv>
              <ReviewRatingDiv>
                Submit Rating :
                <ReviewSpanDiv>
                  <Rating
                    size="large"
                    value={reviewFormData?.ratings}
                    onChange={submitRatingHandler}
                  />
                </ReviewSpanDiv>
              </ReviewRatingDiv>
              <ReviewTextFieldDiv>
                <TextArea
                  row="2"
                  column="4"
                  name="review"
                  label="Comment : "
                  placeholder="Write a review"
                  onChange={textChangeHandler}
                  value={reviewFormData?.description}
                />
              </ReviewTextFieldDiv>
              <Button kind="secondary">Submit</Button>
            </ReviewForm>
          </ReviewDetailDiv>
        </ReviewContainerDiv>
      </Layout>
    </>
  );
};

export default Review;
