/* global chrome */
import React from 'react'
import {useAuth0} from '@auth0/auth0-react';

const redirectURL = chrome.identity.getRedirectURL();
const clientID = "pNKRl3xxn8v0moqcsajm0UA0sdvFqUtU";
const scopes = ["openid", "email", "profile"];

const UserManagementButton = () => {

    const handleClick = () => {

        let authURL = "https://clique2046.us.auth0.com/authorize";
        authURL += `?client_id=${clientID}`;
        const callbackUrl = chrome.identity.getRedirectURL();
        authURL += `&redirect_uri=${callbackUrl}`;
        authURL += `&response_type=token`;
        authURL += `&scope=${encodeURIComponent(scopes.join(' '))}`;
        console.log(authURL);

        chrome.identity.launchWebAuthFlow({
            url: authURL,
            interactive: true
        }, function(redirect_uri) {
            console.log("User has logged in");
            console.log(redirect_uri);

            var access_token = redirect_uri.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
            console.log(access_token);
    });
    }

    return (
        <button onClick={handleClick}>
            User Management
        </button>
    )
}

export default UserManagementButton