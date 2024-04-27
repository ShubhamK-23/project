/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, {useState }from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {login as authLogin} from '../../features/auth/authSlice'
import {Button, Input} from '../index'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth/auth'
import {useForm} from 'react-hook-form'
import {Label} from '../ui/Label'
import {Card} from '../ui/Card'


function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState("")
    const {register , handleSubmit} = useForm()

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if( session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin(userData));
                navigate("/")

            }
            
        } catch (error) {
            console.log("Error in Login Component : ", error);
            
        }
    }
  return (

    <form onSubmit={handleSubmit(login)} className=" h-max flex flex-col items-center justify-center gap-5 p-01 bg-white shadow-xl rounded-xl font-inter">
    <div className="flex flex-col min-h-screen">

      <main className="flex-1 grid gap-4 items-center">
        <Card className="w-full max-w-sm mx-auto">
        <div className="container grid gap-6 px-4 py-6 lg:gap-8 lg:py-12">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-gray-500 ">Enter your email below to login to your account</p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-6">
            <div className="space-y-4">
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
                  <Link className="ml-auto  inline-block text-sm underline" href="#">
                    Forgot your password?
                  </Link>
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
              <Button className="w-full" type="submit">
                Login
              </Button>
              <Button className="w-full" variant="outline">
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?
              <Link 
                to="/signup"
                className="underline" href="#">
                Sign up
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

export default Login