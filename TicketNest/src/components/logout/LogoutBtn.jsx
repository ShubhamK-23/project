/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth/auth'
import { logout } from '../../features/auth/authSlice'
import { Link, useNavigate } from 'react-router-dom';
import { LogOutIcon } from '../ui/Icons'


function LogoutBtn() {
    const dispatch = useDispatch()
    const naviagte = useNavigate()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
            naviagte('/login'); 
        });
    };
  return (
    <>
                    <Link onClick={logoutHandler} 
                          className="flex items-center space-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium shadow transition-colors hover:bg-gray-50 hover:text-gray-900 "
                          href="#"
                    >
                            <LogOutIcon className="w-4 h-4" />
                            <span>Log Out</span>
                    </Link>
                  </>
  )
}

export default LogoutBtn