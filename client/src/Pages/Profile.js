import React from 'react';
import { Redirect } from 'react-router';

export default function Profile() {
  const userData = JSON.parse(localStorage.getItem('userData'));

  if (userData && userData.token) return <div>{userData.user.name}</div>;
  else return <Redirect to="/" />;
}
