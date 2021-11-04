import React from "react";

import Card from "../../shared/components/UIElements/Card";
import ReviewItem from "./ReviewItem";
import Button from "../../shared/components/FormElements/Button";
import './ReviewList.css';

const ReviewList = props => {
    if (props.items.length === 0) {
        return (
            <div className="review-list center">
                <Card>
                    <h2>No reviews Found!!! Want to create one?</h2>
                    <Button to='/reviews/new'>Create</Button>
                </Card>
            </div>
        );
    }

    return (
        <ul className="review-list">
            {
                props.items.map
                    (
                        review => <ReviewItem
                            key={review.id}
                            id={review.id}
                            image={review.bookImage}
                            title={review.bookTitle}
                            author={review.bookAuthor}
                            description={review.description}
                            creatorId={review.creator}
                        />
                    )
            }
        </ul>
    );
};

export default ReviewList;
