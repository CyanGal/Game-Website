import React, { useState, useContext, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import axios from "axios";
import './CreateReviewStyles.css';

const CreateReview = () => {
    const nav = useNavigate()

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { userInfo, setUserInfo } = useContext(UserContext);
   
    useEffect(() => {
        if (!userInfo.email) {
           

            axios.get("http://localhost:5000/user/", {
                withCredentials: true,
            })
                .then((res) => {
                    setUserInfo(res.data); 
                    console.log(res.data);
                })
            
                .catch((err) => {
                    console.error("Error fetching user data:", err);
                });
        }
    }, [userInfo, setUserInfo]);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newReview = {
            review_title: title,
            review_description: description,
            userId: userInfo.id,
        };

        await axios.post("http://localhost:5000/makereview", newReview)
            .then((res) => {
                console.log("Review added");
                console.log(res.data);
                setTitle("");
                setDescription("");
                nav('/reviews');
            })
            .catch((err) => {
                console.log("Review not added" + err);
            });
    }
    return (
        <>
            <div className="background-image"></div>
            <div className="form-containerReview">
                <Form className="my-3" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="Title">
                        <h2 className="form-title">Create Review</h2>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter Title"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            as="textarea"
                            rows={3}
                            placeholder="Enter Description"
                        />
                    </Form.Group>
                    <Button className="buttonReview" variant="primary" type="submit">
                        Create
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default CreateReview;