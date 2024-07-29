/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../../features/auth/authSlice";
import { Button, Input } from "../index";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth/auth";
import { useForm } from "react-hook-form";
import { Label } from "../ui/Label";

import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false)
  const [loginError, setLoginError] = useState("");
  const { register, handleSubmit, formState: { errors }} = useForm();

  const login = async (data) => {
    setLoginError("");
    setLoader(true)
  
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          setLoader(false)
          navigate("/dashboard");
        } else {
          setLoginError("Username or Password Invalid");
          setLoader(false)
        }
      } else {
        setLoginError("Username or Password Invalid");
        setLoader(false)
      }
    } catch (error) {
      console.error("Error in Login Component:", error);
      setLoginError("Username or Password Invalid");
      setLoader(false)
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-image-container">
          <img
            className="login-image"
            src="/Images/Support.svg"
            alt="TicketNest banner"
          />
        </div>
        <div className="login-form-container">
          <form onSubmit={handleSubmit(login)} className="login-form">
            <h1 className="login-title">Login</h1>
            <p className="login-subtitle">
              Enter your email below to login to your account
            </p>
            
            <div className="form-group">
            <div className="password-label-container">
              <Label htmlFor="email">Email</Label>
            </div>
              <Input
                placeholder="Enter Your Email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Email address must be a valid address",
                  },
                })}
                className="login-input"
                id="email_field"
              />
              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
              
            </div>
            <div className="form-group">
              <div className="password-label-container">
                <Label htmlFor="password">Password</Label>
                <Link className="forgot-password" to="#">
                  Forgot your password?
                </Link>
              </div>
              <Input
                type="password"
                placeholder="Enter Your Password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="login-input"
                id="password_field"
                />
              {errors.password && (
                <p className="error-message">{errors.password.message}</p>
                
              )}
              {loginError && <p className="error-message">{loginError}</p>}
            </div>
            <Button className="login-button" type="submit">
              <span className="button-content">
                {loader ? (
                  <img src="/Images/SpinWhite.svg" alt="Loader" className="loader-icon" />
                ) : (
                  "Login"
                )}
              </span>
            </Button>
            <Button className="google-login-button" variant="outline">
              Login with Google
            </Button>
            <div className="signup-prompt"> 
              Don&apos;t have an account?
              <Link to="/signup" className="signup-link">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
