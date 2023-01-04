import axios from "axios";
import React, { useState } from "react";
import Wrapper from "../wrapper/LoginPageWrapper";

function Loginpage() {
  const [showLogin, setShowLogin] = useState(true);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function formSubmitHandler(e) {
    e.preventDefault();
    const { name, email, password, confirmPassword } = userDetails;

    if (showLogin) {
      login({ email, password });
    } else {
      if (password !== confirmPassword) {
        return;
      }
      logout({ name, email, password });
    }
  }

  async function login(userData) {
    try {
      const { data } = await axios.post(`/api/v1/user/login`, userData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function logout(userData) {
    try {
      const { data } = await axios.post(`/api/v1/user/signup`, userData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Wrapper>
      <div className="session-form">
        <div className="head">
          <h1> {showLogin ? <p>sign in</p> : <p>sign up</p>} </h1>
        </div>
        <div className="body">
          <form onSubmit={formSubmitHandler}>
            {!showLogin && (
              <div className="form-content">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="enter name"
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, name: e.target.value })
                  }
                />
              </div>
            )}
            <div className="form-content">
              <label htmlFor="email">email address</label>
              <input
                type="email"
                id="email"
                placeholder="enter email"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
              />
            </div>
            <div className="form-content">
              <label htmlFor="password">password</label>
              <input
                type="password"
                id="password"
                placeholder="enter password"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
              />
            </div>
            {!showLogin && (
              <div className="form-content">
                <label htmlFor="confirm-password">confirm password</label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="enter confirm password"
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>
            )}
            <div className="form-content">
              <button type="submit">
                {showLogin ? <p>sign in</p> : <p>sign up</p>}
              </button>
            </div>
            <div className="form-content">
              {showLogin ? (
                <p>
                  new customer?{" "}
                  <span onClick={() => setShowLogin(false)}>register</span>
                </p>
              ) : (
                <p>
                  already registered?
                  <span onClick={() => setShowLogin(true)}>login</span>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default Loginpage;
