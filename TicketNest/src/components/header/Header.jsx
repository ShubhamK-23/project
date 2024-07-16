/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from "react-router-dom";
import { Package2Icon, SearchIcon } from "../ui/Icons";
import { Input } from "../ui/Input";
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

  return !authStatus ? (
    <>
    <header className="fixed top-0 left-0 w-full flex h-14 items-center gap-4 border-b border-gray-200 bg-gray-50/90 px-6 z-50">
        <div className="container px-4 md:px-6">
          <nav className="flex items-center justify-between h-[60px]">
            <div className="flex items-center space-x-4"> 
              {authStatus && (
                <div className="hidden md:flex items-center space-x-4">
                  {navItems.map((item) => 
                    item.active ? (
                      <Link key={item.name} to={item.slug}>
                        {item.name}
                      </Link>
                    ) : null
                  )}
                </div>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-4">
                {!authStatus && (
                  <ul className='flex items-center space-x-2'>
                    {navItems.map((item) => 
                      item.active ? (
                        <li key={item.name}>
                          <button onClick={() => navigate(item.slug)}>
                            {item.name} 
                          </button>
                        </li>
                      ) : null
                    )}
                  </ul>
                )}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  ) : (
    <>
      <header className="fixed top-0 left-0 w-full flex h-14 items-center gap-4 border-b border-gray-200 bg-gray-50/90 px-6 z-50">
        
          <Link className="lg:hidden" to="/">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only text-gray-500">Home</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 " />
                <Input
                  id="search"
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3"
                  placeholder="Search"
                  type="search"
                />
                
              </div>
              
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 "
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
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
        </header>
      
  </>
  );
}

export default Header;