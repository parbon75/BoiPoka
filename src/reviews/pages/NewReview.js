import React from "react";


import Input from "../../shared/components/FormElements/Input";
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/components/util/validators';
import './ReviewForm.css';
import { useForm } from "../../shared/hooks/form-hook";



const NewReview = () => {

    const [formState, inputHandler] = useForm({
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

    }, false);



    const reviewSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); //need to send this to the backend
    };

    // const authorInputHandler = useCallback((id, value, isValid) => { }, []);
    // const reviewInputHandler = useCallback((id, value, isValid) => { }, []);

    return (
        <form className="review-form" onSubmit={reviewSubmitHandler}>
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please Enter A Valid Title"
                onInput={inputHandler}
            />

            <Input
                id="author"
                element="input"
                type="text"
                label="Author"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please Enter A Valid Author"
                onInput={inputHandler}
            />

            <Input
                id="review"
                element="textarea"
                type="text"
                label="Review"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please Enter A Valid Review (at least 5 charecters)"
                onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>
                ADD REVIEW
            </Button>
        </form>
    );

};

export default NewReview;