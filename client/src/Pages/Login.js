import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import '../styles/main.css';
import img from '../assets/images/bg-01.jpg';

function Login(props) {
  const [email, setEmail] = useState('navkar@gmail.com');
  const [password, setPassword] = useState('Qwerty@123');
  const history = useHistory();

  const handleLogin = () => {
    console.log('axios');

    axios
      .post('http://localhost:5000/api/auth/signin', { email, password })
      .then((res) => {
        if (res?.data?.user) {
          localStorage.setItem('userData', JSON.stringify(res.data));
          console.log(res?.data?.user);

          history.push('/profile');
          // if(res?.data?.user.role===0){

          // }
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <div class="limiter">
        <div
          class="container-login100"
          style={{ backgroundImage: `url('${img}')` }}
        >
          <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <div class="login100-form validate-form">
              <span class="login100-form-title p-b-49">Login</span>

              <div
                class="wrap-input100 validate-input m-b-23"
                data-validate="email is reauired"
              >
                <span class="label-input100">email</span>
                <input
                  class="input100"
                  type="text"
                  name="email"
                  placeholder="Type your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span class="focus-input100" data-symbol="&#xf206;"></span>
              </div>

              <div
                class="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <span class="label-input100">Password</span>
                <input
                  class="input100"
                  type="password"
                  name="pass"
                  placeholder="Type your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span class="focus-input100" data-symbol="&#xf190;"></span>
              </div>

              <div class="text-right p-t-8 p-b-31">
                <a href="/">Forgot password?</a>
              </div>

              <div class="container-login100-form-btn">
                <div class="wrap-login100-form-btn">
                  <div class="login100-form-bgbtn"></div>
                  <button class="login100-form-btn" onClick={handleLogin}>
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="dropDownSelect1"></div>
    </div>
  );
}

export default Login;
