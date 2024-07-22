// eslint-disable-next-line no-unused-vars
import React, {useState }from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Button, Input} from '../index'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth/auth'
import {useForm} from 'react-hook-form'
import {login } from '../../features/auth/authSlice'
import {Label} from '../ui/Label'
import './Signup.css';


function Signup() {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const {register, handleSubmit, formState: { errors }} = useForm()

  const create = async(data) => {
    setError("")
    try {
      const userData = await authService.createAccount(data)
      if(userData) dispatch(login(userData))
      navigate("/dashboard")
    } catch (error) 
    {
      console.log("Error in Signup component:: ERROR",error);
      
    }
  }
  
  return (
    <div className="signup-container">
      <div className="signup-content">
      <div className="signup-image-container">
          <img
            className="signup-image"
            src="/Images/password.svg"
            alt="TicketNest banner"
          />
        </div>
        <div className="signup-form-container">
      <form onSubmit={handleSubmit(create)} className="signup-form">

            
                <h1 className="signup-title ">Create Account</h1>
                <p className="signup-subtitle">Enter your information to get started</p>
                {error && <p className="signup-error">{error}</p>}
              <div className="form-group">
                  <Label htmlFor="username">Name</Label>
                  <Input
                      placeholder="Enter your name"
                      label="Name:"
                      type="text"
                      {...register('name', {
                          required: true,
                      })}
                      className="signup-input"
                      id="name_field"
                  />
                  </div>
                  {errors.name && <p className="error-message">{errors.name.message}</p>}
                  {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                  <div className="form-group">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      placeholder="Enter Your Email"
                      label="Email:" 
                      type="email" 
                        {...register("email", {
                              required: true,
                              validate: {
                              matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                              "Email address must be a valid address",
                            }
                        })} 
                          className="signup-input" 
                          id="email_field" 
                      />
                      {errors.email && <p className="error-message">{errors.email.message}</p>}
                  </div>
                    <div className="form-group">
                      <Label htmlFor="password">Password</Label>
                      <Input
                          label="Password: "
                          type="password"
                          placeholder="Enter Your Password"
                          {...register("password", {
                              required: true,
                          })}
                            className="signup-input"
                            id="password_field" 
                      />
                        {errors.password && <p className="error-message">{errors.password.message}</p>}
                    </div>
                  
                  <Button className="signup-button" type="submit">
                    Sign Up
                  </Button>
                  <Button className="google-signup-button" variant="outline">
                    Sign up with Google
                  </Button>
                
                  <div className="signup-prompt">
                  Already have an account? 
                  <Link 
                    to="/login"
                    className="signup-link" >
                    Login
                  </Link>
                </div>
                
          
      </form>
      
      
      </div>
      
      </div>
      
      </div>

  )
}

export default Signup