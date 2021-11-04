import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import './ReviewForm.css';
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/components/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import Card from "../../shared/components/UIElements/Card";


const DUMMY_REVIEWS = [
    {
        id: 'r1',
        bookTitle: 'REKKAN',
        bookAuthor: 'Nazim Uddin',
        description: 'The best crime/psychological thriller i have ever read. Recommended',
        bookImage: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1578208691l/50279253.jpg',
        creator: 'u1'

    },

    {
        id: 'r2',
        bookTitle: 'Tuntuni O Chotachchu',
        bookAuthor: 'Muhammad Zafar Iqbal',
        description: 'The best kids book i have ever read',
        bookImage: 'https://bdebooks.com/wp-content/uploads/2017/10/20798288.jpg',
        creator: 'u2'

    }

];

const EditReview = () => {

    const [isLoading, setIsLoading] = useState(true);

    const reviewId = useParams().reviewId;




    const [formState, inputHandler, setFormData] = useForm(
        {
            title: {
                value: '',
                isValid: false
            },

            author: {
                value: '',
                isValid: false
            },

            review: {
                value: '',
                isValid: false
            }

        },
        false
    );

    const identifiedReview = DUMMY_REVIEWS.find(r => r.id === reviewId);

    useEffect(() => {
        if (identifiedReview) {
            setFormData(
                {
                    title: {
                        value: identifiedReview.bookTitle,
                        isValid: true
                    },

                    author: {
                        value: identifiedReview.bookAuthor,
                        isValid: true
                    },

                    review: {
                        value: identifiedReview.description,
                        isValid: true
                    }

                },
                true
            );
        }
        setIsLoading(false);

    }, [setFormData, identifiedReview]);


    const reviewUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    };





    if (!identifiedReview) {
        return (
            <div className="center">
                <Card>
                    <h2>Could Not Find Review</h2>
                </Card>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="center">
                <h2>Loading...</h2>

            </div>
        );
    }

    return (
        <form className="review-form" onSubmit={reviewUpdateSubmitHandler}>
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid Title"
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValidity={formState.inputs.title.isValid}
            />
            <Input
                id="author"
                element="input"
                type="text"
                label="Author"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid Author"
                onInput={inputHandler}
                initialValue={formState.inputs.author.value}
                initialValidity={formState.inputs.author.isValid}
            />
            <Input
                id="review"
                element="textarea"
                label="Review"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid review. At Least 5 chars"
                onInput={inputHandler}
                initialValue={formState.inputs.review.value}
                initialValidity={formState.inputs.review.isValid}
            />
            <Button type="submit" disabled={!formState.isValid}>UPDATE REVIEW</Button>
        </form>
    );
};

export default EditReview;