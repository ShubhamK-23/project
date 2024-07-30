/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, BarChartIcon, TicketIcon, UsersIcon, SettingsIcon } from '../ui/Icons'
import { useSelector } from 'react-redux';

function Sidebar() {
  const authStatus = useSelector((state) => state.auth.status);
  const location = useLocation();

  const navItems = [
    { name: 'Home', icon: HomeIcon, path: '/' },
    { name: 'Dashboard', icon: UsersIcon, path: '/dashboard' },
    { name: 'Tickets', icon: TicketIcon, path: '/tickets' },
    { name: 'Analytics', icon: BarChartIcon, path: '/analytics' },
    { name: 'Team', icon: UsersIcon, path: '/team' },
    { name: 'Settings', icon: SettingsIcon, path: '/settings' },
  ];

  return authStatus ? (
    <aside className="fixed top-14 left-0 w-64 h-full bg-white border-r border-gray-200 z-40">
      <nav className="flex flex-col p-4 gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-gray-100 ${
                location.pathname === item.path ? 'bg-gray-100' : ''
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  ) : null;
}

export default Sidebar;