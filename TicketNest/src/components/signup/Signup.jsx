// eslint-disable-next-line no-unused-vars
import React, {useState }from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Button, Input} from '../index'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth/auth'
import {useForm} from 'react-hook-form'
import {login } from '../../features/auth/authSlice'
import {Label} from '../ui/Label'
import {Card} from '../ui/Card'


function Signup() {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()

  const create = async(data) => {
    setError("")
    try {
      const userData = await authService.createAccount(data)
      if(userData) dispatch(login(userData))
      navigate("/")
    } catch (error) 
    {
      console.log("Error in Signup component:: ERROR",error);
      
    }
  }
  
  return (
   
    <form onSubmit={handleSubmit(create)} className="h-max flex flex-col items-center justify-center gap-5 p-1 bg-white shadow-xl rounded-xl font-inter">
     <div className="flex flex-col min-h-screen">

<main className="flex-1 grid gap-4 items-center">
  <Card className="w-full max-w-sm mx-auto">
  <div className="container grid gap-6 px-4 py-6 lg:gap-8 lg:py-08">
    <div className="space-y-2 text-center">
      <h1 className="text-3xl font-bold">Create Account</h1>
      <p className="text-gray-500 ">Enter your information to get started</p>
    </div>
    <div className="mx-auto w-full max-w-sm space-y-6">
      <div className="space-y-4">
    <div className="space-y-1">
              <Label htmlFor="username">Name</Label>
              <Input
            placeholder="Enter your name"
            label="Name:"
            type="text"
            {...register('name', {
                required: true,
            })}
            className="pl-12 pr-4 h-10 rounded-lg border border-gray-300 outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
            id="name_field"
        />
    </div>

        <div className="space-y-2">
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
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
      className="pl-12 pr-4 h-10 rounded-lg border border-gray-300 outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500" id="email_field" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input
          label="Password: "
          type="password"
          placeholder="Enter Your Password"
          {...register("password", {
              required: true,
          })}
            className="pl-12 pr-4 h-10 rounded-lg border w-full border-gray-300 outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500" 
            id="password_field" 
          />

        </div>
        <div className="space-y-2"></div>
        <Button className="w-full" type="submit">
          Sign Up
        </Button>
        <Button className="w-full" variant="outline">
          Sign up with Google
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        Already have an account? 
        <Link 
          to="/login"
          className="underline" >
          Login
        </Link>
      </div>
    </div>
  </div>
  </Card>
</main>
<footer className="py-4 border-t ">
  <div className="container flex justify-between items-center px-4 text-sm ">
    <nav className="flex space-x-4">
      <Link className="font-medium" href="#">
        Terms of Service
      </Link>
      <Link className="font-medium" href="#">
        Privacy Policy
      </Link>
      <Link className="font-medium" href="#">
        Contact Us
      </Link>
    </nav>
    <div className="text-gray-500">© 2023 TicketNest. All rights reserved.</div>
  </div>
</footer>
</div>
      </form>
  

  )
}

export default Signup