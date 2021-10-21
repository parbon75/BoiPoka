import React from "react";

import UserList from "../components/UserList";

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Mehdad Hossain',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSaGCS06HqWF5hzrewCJVTMqGUG54t1mdFZLJfWeYoFyAqt4G8WY6gMhZ_5mhLywH6&usqp=CAU',
            reviews: 3
        }
    ];

    return <UserList items={USERS} />;
};

export default Users;