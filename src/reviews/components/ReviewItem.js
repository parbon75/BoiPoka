import React from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import './ReviewItem.css';

const ReviewItem = props => {
    return (
        <li className="review-item">
            <Card className="review-item__content">
                <div className="review-item__image">
                    <img src={props.image} alt={props.title} />
                </div>
                <div className="review-item__info">
                    <h2>{props.title}</h2>
                    <h3>{props.author}</h3>
                    <p>{props.description}</p>
                </div>
                <div className="review-item__actions">
                    <Button inverse to={`/reviews/${props.id}`}>EDIT</Button>
                    <Button >DELETE</Button>
                </div>
            </Card>

        </li>
    );
};

export default ReviewItem;