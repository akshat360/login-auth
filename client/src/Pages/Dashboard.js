import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Dashboard() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const { _id } = userData.user;
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/user/${_id}`)
      .then((res) => {
        if (res?.data?.user && res?.data?.user.role !== 1) {
          localStorage.setItem('userData', JSON.stringify(res.data));
          console.log(res?.data?.user);
          history.push('/');
        }
      })
      .catch((err) => console.log(err));
  }, []);
  if (userData && userData.user.role === 1) return <div>Super User</div>;
  else return <Redirect to="/" />;
}
