import React from "react";
import ReviewList from "../components/ReviewList";

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

const UserReviews = () => {

    return <ReviewList items={DUMMY_REVIEWS} />;
};

export default UserReviews;