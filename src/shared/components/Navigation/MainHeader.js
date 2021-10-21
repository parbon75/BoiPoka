//the main header shell component will be written in this file

import React from "react";

import './MainHeader.css';

const MainHeader = props => {
    return <header className="main-header">{props.children}</header>; //props.children is a placeholder for anything that will be returned in the MainNavigation.js File
};

export default MainHeader;