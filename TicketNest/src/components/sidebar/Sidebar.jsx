/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from "react-router-dom";
import { Button } from "../ui/Button";
import { Package2Icon,BellIcon, HomeIcon, PackageIcon, UsersIcon, LineChartIcon } from '../ui/Icons'
import { useSelector } from 'react-redux';

function Sidebar() {

  const authStatus = useSelector((state) => state.auth.status);
  return authStatus ? (
    <>
        <aside className="fixed top-14 left-0 w-64 h-full border-r bg-gray-100/40 z-40">
        <div className="flex  h-auto flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="">TicketNest</span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                to="/tickets"
              >
                <PackageIcon className="h-4 w-4" />
                Tickets
              </Link>
              <Link 
                to="/dashboard"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                href="#"
              >
                <UsersIcon className="h-4 w-4" />
                Dashboard
              </Link>
              <Link 
                to = "/#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                href="#"
              >
                <LineChartIcon className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
        </div>
      </aside> 
    </>
  ) : null
}

export default Sidebar