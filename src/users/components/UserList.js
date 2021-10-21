import React from "react";

import UserListItem from "./UserListItem";
import Card from "../../shared/components/UIElements/Card";

import './UserList.css';

const UserList = props => {
    if (props.items.length === 0) {          //if there is no user to show
        return (
            <div className="center">
                <Card>
                    <h1>No Users Found!!!</h1>
                </Card>
            </div>
        );
    }

    return (
        <ul className="users-list">
            {props.items.map(user => {    //if there is atleast one user
                return <UserListItem
                    key={user.id}
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    reviewCount={user.reviews}
                />;
            })}
        </ul>
    );
};

export default UserList;