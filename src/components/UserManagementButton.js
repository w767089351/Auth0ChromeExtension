/* global chrome */
import React from 'react'
import {useAuth0} from '@auth0/auth0-react';

const UserManagementButton = () => {

    const handleClick = () => {
        window.open("http://localhost:3000/");
    };
    return (
        <button onClick={handleClick}>
            User Management
        </button>
    )
}

export default UserManagementButton