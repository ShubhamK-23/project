/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from "react-router-dom";
import { Package2Icon, } from "../ui/Icons";

import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth/auth'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../features/auth/authSlice'
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "../ui/Dropdown-menu";
import { Button } from "../ui/Button";


function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const dispatch = useDispatch()
    const naviagte = useNavigate()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
            naviagte('/login'); 
        });
    };

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: !authStatus
    },
    {
      name: 'Tickets',
      slug: "/tickets",
      active: authStatus
    },
    {
      name: 'Users',
      slug: "/users",
      active: authStatus
    },
    {
      name: 'Settings',
      slug: "/settings",
      active: authStatus
    },
    {
      name: 'About us',
      slug: "/about",
      active: true
    },
    {
      name: 'Contatct us',
      slug: "/contact",
      active: true
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full flex h-14 items-center border-b border-gray-200 bg-white px-4 z-50">
      <Link to="/" className="flex items-center gap-2">
        <Package2Icon className="h-6 w-6" />
        <span className="font-semibold text-lg">TicketNest</span>
      </Link>
      {authStatus && (
        <div className="ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/Images/male_avatar.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logoutHandler}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </header>
  );
}

export default Header;