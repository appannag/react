import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './Welcome';
import Login from './Login';
import LoginSuccessful from './LoginSuccessful';
import Register from './Register';
import RegisterSuccessful from './RegisterSuccessful';
import ChatList from './ChatList';
import UserList from './UserList';
import EditUser from './EditUser';
import DocumentList from './DocumentList';
import Logout from './Logout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
    <Welcome />
    <Login />
    <LoginSuccessful />
    <Register />
    <RegisterSuccessful  />
    <EditUser />
    <ChatList />
    <UserList />
    <DocumentList />
      <Logout />
 </div>
);

