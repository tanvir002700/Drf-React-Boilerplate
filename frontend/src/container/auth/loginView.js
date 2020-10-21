import React, { useState, useContext } from 'react';
import useFetch from 'use-http';
import { AuthContext } from '../../context/auth/context';
import { useHistory } from "react-router-dom";



const LoginView = props => {
  const { authState, authDispatch } = useContext(AuthContext);
  const [loginRequest, loginResponse] = useFetch('/api/auth/login');
  const history = useHistory();

  const onSubmit = async e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const data = {email: email.value, password: password.value};
    const res = await loginRequest.post('/', data);
    if(loginResponse.ok) {
      authDispatch({type: 'SIGNIN_SUCCESS', payload: res.auth_token});
      history.push('/');
    }
  };

  return (
    <React.Fragment>
      <h1>this is login page</h1>
      <form onSubmit={onSubmit}>
        <input type="email" name="email"/>
        <input type="password" name="password"/>
        <button type="submit">Login</button>
      </form>
    </React.Fragment>
  );
};

export default LoginView;
