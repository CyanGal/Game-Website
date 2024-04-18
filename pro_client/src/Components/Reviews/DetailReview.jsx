import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

const DetailReview = () => {
    const nav = useNavigate();
    const { id } = useParams();
    const [reviews, setReviews] = useState({});
    const { userInfo, setUserInfo } = useContext(UserContext);
    useEffect(() => {
        if (!userInfo.email) {
            axios.get('http://localhost:5000/user/', {
                withCredentials: true,
            }) 
                .then(response => {
                    setUserInfo(response.data);
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    },
        [userInfo, setUserInfo]);
    useEffect(() => {
        const getDate = async () => {
            await axios.get(`http://localhost:5000/readOne/${id}`)
                .then((res) => {
                  
                    console.log(res.data);
                    
                    setReviews(res.data);
                })
                .catch((err) => {
                    
                    console.log("Data not showing " + err);
                });
            
    
        };
        getDate();
    }, [id]);
    const deleteReview = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/delete/${id}`);
            nav('/reviews');
        } catch (err) {
            console.log("Couldn't delete review" + err);
        }
    };

    return (
        <>
            <Container className="my-5">
                <Row>
                    <Col xs={12} md={6}>

                        <h1>{reviews.review_title}</h1>
                        <p>{reviews.review_description}</p>
                      
                        {userInfo.email &&
                            (reviews.owner === userInfo.id ? (
                                <div className="d-grid gap-2 d-md-block">
                                    <Button variant="danger"  style={{backgroundColor:' #CA6E7F', borderColor:'#7D293D'}} onClick={() => deleteReview(id)}>Delete</Button> &nbsp;
                                    <Button variant="warning" style={{backgroundColor:' #EEE8A9', borderColor:'#D7A319'}} href={`/itemUpdate/${id}`}>Update</Button>
                                </div>
                            ) : (
                                <p></p>
                            ))}
                    </Col>
                </Row>
            </Container>
        </>
    );
}; 

export default DetailReview;
