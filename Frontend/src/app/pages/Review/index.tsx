import IReviewProps, { IReviewDataProps } from "./Review";
import Layout from "../../components/Layout";
import ReviewCard from "../../components/ReviewCard";
import {
  ReviewTextFieldDiv,
  ReviewContainerDiv,
  ReviewDetailDiv,
  MovieAndAddReviewDiv,
  MovieDetailDiv,
  ReviewDataDiv,
  ReviewFormDiv,
  ReviewSummaryDiv,
  ReviewSummaryHeaderDiv,
  ReviewSummaryDetailDiv,
  TotalReviewDiv,
  PositiveReviewDiv,
  AverageReviewDiv,
  ReviewRatingDiv,
  NegativeReviewDiv,
  ReviewFormHeaderDiv,
  ReviewDetailHeaderDiv,
  ReviewSpanDiv,
  StyledSpan,
} from "./styles";
import MovieDetailCard from "../../components/MovieDetailCard";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useQueryHook from "../../hooks/useQueryHook";
import { addReview, getReviews } from "./Services";
import useMutationHook from "../../hooks/useMutationHook";
import React from "react";

const Review = (props: IReviewProps) => {
  const location = useLocation();
  const movieDetail = location?.state;
  const [allReviewData, setAllReviewData] = useState<IReviewDataProps[]>();
  const [canGetAllReviews, setCanGetAllReviews] = useState(false);
  const [checked, setChecked] = useState([false, false, false, false, false]);

  useQueryHook(["getReviews"], getReviews, movieDetail?._id, {
    enabled: canGetAllReviews,
    onSuccess: (data: any) => {
      setAllReviewData(data);
    },
    onError: (error: any) => {
      console.log(error);
    },
    onSettled: () => {
      setCanGetAllReviews(false);
    },
  });

  const {
    data,
    error: mutationError,
    mutate,
  } = useMutationHook(["addReview"], addReview);

  const positiveReviews = allReviewData?.filter((e) => e.ratings > 3);
  const averageReviews = allReviewData?.filter((e) => e.ratings === 3);
  const negativeReviews = allReviewData?.filter((e) => e.ratings < 3);

  const submitRatingHandler = (
    event: React.MouseEvent<HTMLDivElement>,
    value: number
  ) => {};

  useEffect(() => {
    setCanGetAllReviews(true);
  }, [movieDetail?._id]);

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
                <TotalReviewDiv>{allReviewData?.length}</TotalReviewDiv>
                <PositiveReviewDiv>{positiveReviews?.length}</PositiveReviewDiv>
                <AverageReviewDiv>{averageReviews?.length}</AverageReviewDiv>
                <NegativeReviewDiv>{negativeReviews?.length}</NegativeReviewDiv>
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
            <ReviewFormDiv>
              <ReviewFormHeaderDiv>Submit a review</ReviewFormHeaderDiv>
              <ReviewRatingDiv>
                Submit Rating :
                <ReviewSpanDiv>
                  {checked.map((value, index) => {
                    return (
                      <StyledSpan
                        className={`fa fa-star ${value && "checked"}`}
                        onClick={(event) => submitRatingHandler(event, index)}
                      ></StyledSpan>
                    );
                  })}
                </ReviewSpanDiv>
              </ReviewRatingDiv>
              <ReviewTextFieldDiv>
                <TextArea
                  name="review"
                  row="2"
                  column="4"
                  label="Comment : "
                  placeholder="Write a review"
                />
              </ReviewTextFieldDiv>
              <Button kind="secondary" onClick={() => {}}>
                Submit
              </Button>
            </ReviewFormDiv>
          </ReviewDetailDiv>
        </ReviewContainerDiv>
      </Layout>
    </>
  );
};

export default Review;
