import React from "react";
import { useParams } from "react-router";

import './ReviewForm.css';
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH, VALIDATOR_MIN } from "../../shared/components/util/validators";

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

    const reviewId = useParams().reviewId;

    const identifiedReview = DUMMY_REVIEWS.find(r => r.id === reviewId);

    if (!identifiedReview) {
        return (
            <div className="center">
                <h2>Could Not Find Review</h2>

            </div>
        );
    }

    return (
        <form className="review-form">
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid Title"
                onInput={() => { }}
                value={identifiedReview.bookTitle}
                valid={true}
            />
            <Input
                id="author"
                element="input"
                type="text"
                label="Author"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid Author"
                onInput={() => { }}
                value={identifiedReview.bookAuthor}
                valid={true}
            />
            <Input
                id="review"
                element="textarea"
                label="Review"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid review. At Least 5 chars"
                onInput={() => { }}
                value={identifiedReview.description}
                valid={true}
            />
            <Button type="submit" disabled={true}>UPDATE REVIEW</Button>
        </form>
    );
};

export default EditReview;