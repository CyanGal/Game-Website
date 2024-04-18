import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateReview = () => {
    const nav = useNavigate();
    const { id } = useParams();
    const [reviews, setReviews] = useState({});
    const [review_title, setTitle] = useState("");
    const [review_description, setDescription] = useState("");

    useEffect(() => { 
        const getDate = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/readOne/${id}`);
                setReviews(res.data);
                setTitle(res.data.review_title);
                setDescription(res.data.review_description);
            } catch (err) {
                console.log("Data not shown" + err);
            }
        };
        getDate();
    }, [id]);

    const updateDate = async (e) => {
        e.preventDefault();
        const updatedReview = { ...reviews };

        updatedReview.review_description = review_description;
        updatedReview.review_title = review_title;

        try {
            await axios.patch(`http://localhost:5000/updateReview/${id}` , updatedReview);
            nav('/reviews');
        } catch (err) {
            console.log("Data not updated" + err);
        }
    };

    return (
        <>
            <Container className="my-5">
                <Row>
                    <Col>
                        <Form className="w-70" onSubmit={updateDate}>
                            <Form.Group className="mb-3" controlId="Title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Title"
                                    value={review_title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="Description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={review_description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </Form.Group>
                            <Button variant="warning" type="submit">
                                Update
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default UpdateReview;
