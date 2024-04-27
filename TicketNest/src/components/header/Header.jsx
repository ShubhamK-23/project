/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from "react-router-dom";
import { Package2Icon, UserIcon, LogOutIcon } from "../ui/Icons"
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import LogoutBtn from '../logout/LogoutBtn';

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: 'Login',
      slug: "/login",
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: "/signup",
      active: !authStatus
    },
    {
      name: 'Dashboard',
      slug: "/dashboard",
      active: authStatus
    },
    {
      name: 'Tickets',
      slug: "/tickets",
      active: authStatus
    },

  ]


  return (
    <> 
    <div className="bg-gray-50/90 border-t border-b border-gray-200 ">
        <div className="container px-4 md:px-6">
          <nav className="flex items-center justify-between h-[60px]">
            <div className="flex items-center space-x-4">
              <Link className="flex items-center space-x-2" href="#">
              <Package2Icon className="h-6 w-6" />
                <span className="font-semibold">TicketNest</span>
              </Link>
              {authStatus && (
              <div className="hidden md:flex items-center space-x-4">
                <ul className='flex items-center space-x-2'>
                  {navItems.map((item) => 
                    item.active?(
                      <li key={item.name}>
                        <button onClick={() => navigate(item.slug)}>
                          {item.name} 
                        </button>
                      </li>
                    ):null
                  )}
                </ul>
              </div>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-4">
              {!authStatus && (
              <ul className='flex items-center space-x-2'>
                  {navItems.map((item) => 
                    item.active?(
                      <li key={item.name}>
                        <button onClick={() => navigate(item.slug)}>
                          {item.name} 
                        </button>
                      </li>
                    ):null
                  )}
                </ul>
                )}
                {authStatus && (
                  <>
                  <Link
                  className="flex items-center space-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium shadow transition-colors hover:bg-gray-50 hover:text-gray-900 "
                  href="#"
                >
                  <UserIcon className="w-4 h-4" />
                  <span>Profile</span>
                </Link>
                  <LogoutBtn></LogoutBtn>
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}


  
  
  

export default Header