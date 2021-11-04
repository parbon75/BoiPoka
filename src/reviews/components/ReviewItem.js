import React, { useState, useContext } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import './ReviewItem.css';
import Modal from "../../shared/components/UIElements/Modal";
import { AuthContext } from "../../shared/context/auth-context";


const ReviewItem = props => {

    const auth = useContext(AuthContext);

    const [showConfirmModal, setShowCofirmModal] = useState(false);

    const showDeleteWarningHandler = () => {
        setShowCofirmModal(true);
    };

    const cancelDeleteHandler = () => {
        setShowCofirmModal(false);
    };

    const confirmDeleteHandler = () => {
        console.log("Deleting.."); //this needs to be changed when the backend is up
    }


    return (
        <React.Fragment>
            <Modal
                show={showConfirmModal}
                onCancel={cancelDeleteHandler}
                header="Are you sure?"
                footerclass="review-item__modal-actions"
                footer={
                    <React.Fragment>
                        <Button inverse onClick={cancelDeleteHandler}>Cancel</Button>
                        <Button onClick={confirmDeleteHandler}>Delete</Button>
                    </React.Fragment>
                }
            >
                <p>Do you want to DELETE this review? Please note that this can NOT be undone.</p>

            </Modal>
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
                        {auth.isLoggedIn && <Button inverse to={`/reviews/${props.id}`}>EDIT</Button>}
                        {auth.isLoggedIn && <Button onClick={showDeleteWarningHandler}>DELETE</Button>}
                    </div>
                </Card>

            </li>
        </React.Fragment>
    );
};

export default ReviewItem;