/* global chrome */
import './App.css';
import React from 'react';
import UserManagementButton from './components/UserManagementButton';


class App extends React.Component {

  componentDidMount() {
    // Add listener when component mounts
    chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
        console.log(request);
        sendResponse({tyep: 'MsgFromChrome', msg: 'Hello, I am chrome extension~'})
        });
    }

  render() {
    return(
      <UserManagementButton />

    )
  }
}

export default App;