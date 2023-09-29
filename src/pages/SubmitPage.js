import React from 'react';
import SubmitForm from './SubmitForm';

const LoginPage = ({ onSend }) => {
  return (
    <div>
        <h1>Joke Information</h1>
        <SubmitForm onSend={onSend} />
    </div>
  );
}
export default LoginPage;