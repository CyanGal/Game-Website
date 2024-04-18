import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Review from "./Review";
import './ReviewsStyles.css';
import ScrollToTopButton from "../ScrollButton/ScrollToTopButton";
 
const Reviews = () => {

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getDate = async () => {
      await axios.get("http://localhost:5000/readAllReviews")
        .then((res) => {
          console.log(res.data);
          setReviews(res.data);
        })
        .catch(err => {
          console.log("Data not shown" + err);
        });
    }
    getDate()
  }, [])


  return (
    <>
      <div className="background-image"></div>
      <Container className="my-5">
        <h1 id="reviewTitle">Reviews page</h1>
        <div className="d-flex justify-content-around row">
          {
            reviews.map((review, index) => {
              return (
                <div className="mt-5 me-md-5 col" key={index}>
                  <Review {...review} />
                </div>
              )
            })
          }
        </div>
      </Container>
      <ScrollToTopButton />
    </>
  )
}

export default Reviews;