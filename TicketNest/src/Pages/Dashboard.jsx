/* eslint-disable no-unused-vars */
import React from "react";
import {Link} from "react-router-dom";
import { Button } from "../components/ui/Button";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '../components/ui/Card';
import {Package2Icon,BellIcon, HomeIcon,PackageIcon, UsersIcon, SettingsIcon, SearchIcon, ActivityIcon, ClockIcon, CheckCircleIcon } from '../components/ui/Icons'
import { Input } from "../components/ui/Input";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../components/ui/Table";
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "../components/ui/Dropdown-menu";

function Dashboard() {
  return (
    <div className="grid min-h-screen bg-gray-100/40 lg:grid-cols-[280px_1fr] ">
    <div className="hidden border-r border-gray-200 bg-gray-100/40 lg:block">
     <div className="flex h-full flex-col gap-2">
       <div className="flex h-16 items-center border-b px-6">
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
             className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 "
             href="#"
           >
             <HomeIcon className="h-4 w-4" />
             Home
           </Link>
           <Link
             className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 "
             href="#"
           >
             <PackageIcon className="h-4 w-4" />
             Tickets
           </Link>
           <Link
             className="flex items-center gap-3 rounded-lg px-3 py-2  text-gray-500 transition-all hover:text-gray-900 "
             href="#"
           >
             <UsersIcon className="h-4 w-4" />
             Users
           </Link>
           <Link
             className="flex items-center gap-3 rounded-lg px-3 py-2  text-gray-500 transition-all hover:text-gray-900 "
             href="#"
           >
             <SettingsIcon className="h-4 w-4" />
             Settings
           </Link>
         </nav>
       </div>
       <div className="mt-auto p-4">
         <Card>
           <CardHeader className="pb-4">
             <CardTitle>Upgrade to Pro</CardTitle>
             <CardDescription>Unlock all features and get unlimited access to our support team</CardDescription>
           </CardHeader>
           <CardContent>
             <Button className="w-full" size="sm">
               Upgrade
             </Button>
           </CardContent>
         </Card>
       </div>
     </div>
   </div>

   <div className="flex flex-col">
   <div className="flex flex-col min-h-screen">
     <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 ">
       <Link className="lg:hidden" href="#">
         <Package2Icon className="h-6 w-6" />
         <span className="sr-only">Home</span>
       </Link>
       <div className="w-full flex-1">
         <form>
           <div className="relative">
             <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 " />
             <Input
               className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 "
               placeholder="Search tickets..."
               type="search"
             />
           </div>
         </form>
       </div>
       <DropdownMenu>
         <DropdownMenuTrigger asChild>
           <Button
             className="rounded-full border border-gray-200 w-8 h-8  "
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
           <DropdownMenuItem>Logout</DropdownMenuItem>
         </DropdownMenuContent>
       </DropdownMenu>
     </header>
     <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
       <div className="flex items-center gap-4">
         <h1 className="font-semibold text-lg md:text-2xl">Tickets</h1>
         <Button className="ml-auto" size="sm">
           New Ticket
         </Button>
       </div>

       <div className="flex flex-col gap-2">
         <div className="grid gap-2 md:grid-cols-3">
           <Card>
             <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
               <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
               <ActivityIcon className="w-4 h-4" />
             </CardHeader>
             <CardContent>
               <div className="text-2xl font-bold">120</div>
             </CardContent>
           </Card>
           <Card>
             <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
               <CardTitle className="text-sm font-medium">Pending Tickets</CardTitle>
               <ClockIcon className="w-4 h-4" />
             </CardHeader>
             <CardContent>
               <div className="text-2xl font-bold">30</div>
             </CardContent>
           </Card>
           <Card>
             <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
               <CardTitle className="text-sm font-medium">Resolved Tickets</CardTitle>
               <CheckCircleIcon className="w-4 h-4" />
             </CardHeader>
             <CardContent>
               <div className="text-2xl font-bold">170</div>
             </CardContent>
           </Card>
         </div>
         <Card>
          
           <div className="border-t border-gray-200 ">
             <Table>
               <TableHeader>
                 <TableRow>
                   <TableHead className="w-[100px]">Ticket</TableHead>
                   <TableHead className="min-w-[150px]">Title</TableHead>
                   <TableHead className="hidden md:table-cell">Assignee</TableHead>
                   <TableHead className="hidden md:table-cell">Created On</TableHead>
                   <TableHead className="hidden sm:table-cell">Priority</TableHead>
                   <TableHead className="text-right">Status</TableHead>
                 </TableRow>
               </TableHeader>
               <TableBody>
                 <TableRow>
                   <TableCell className="font-medium">#3210</TableCell>
                   <TableCell>UI/UX Design for New Feature</TableCell>
                   <TableCell className="hidden md:table-cell">Olivia Martin</TableCell>
                   <TableCell className="hidden md:table-cell">February 20, 2022</TableCell>
                   <TableCell className="hidden sm:table-cell">High</TableCell>
                   <TableCell className="text-right">Open</TableCell>
                 </TableRow>
                 <TableRow>
                   <TableCell className="font-medium">#3209</TableCell>
                   <TableCell>Database Migration</TableCell>
                   <TableCell className="hidden md:table-cell">Ava Johnson</TableCell>
                   <TableCell className="hidden md:table-cell">January 5, 2022</TableCell>
                   <TableCell className="hidden sm:table-cell">High</TableCell>
                   <TableCell className="text-right">Pending</TableCell>
                 </TableRow>
                 <TableRow>
                   <TableCell className="font-medium">#3204</TableCell>
                   <TableCell>Mobile App Testing</TableCell>
                   <TableCell className="hidden md:table-cell">Michael Johnson</TableCell>
                   <TableCell className="hidden md:table-cell">August 3, 2021</TableCell>
                   <TableCell className="hidden sm:table-cell">Low</TableCell>
                   <TableCell className="text-right">Resolved</TableCell>
                 </TableRow>
                 <TableRow>
                   <TableCell className="font-medium">#3203</TableCell>
                   <TableCell>Server Maintenance</TableCell>
                   <TableCell className="hidden md:table-cell">Lisa Anderson</TableCell>
                   <TableCell className="hidden md:table-cell">July 15, 2021</TableCell>
                   <TableCell className="hidden sm:table-cell">High</TableCell>
                   <TableCell className="text-right">Open</TableCell>
                 </TableRow>
                 <TableRow>
                   <TableCell className="font-medium">#3202</TableCell>
                   <TableCell>API Integration</TableCell>
                   <TableCell className="hidden md:table-cell">Samantha Green</TableCell>
                   <TableCell className="hidden md:table-cell">June 5, 2021</TableCell>
                   <TableCell className="hidden sm:table-cell">High</TableCell>
                   <TableCell className="text-right">Pending</TableCell>
                 </TableRow>
                 <TableRow>
                   <TableCell className="font-medium">#3201</TableCell>
                   <TableCell>Feature Enhancement</TableCell>
                   <TableCell className="hidden md:table-cell">Adam Barlow</TableCell>
                   <TableCell className="hidden md:table-cell">May 20, 2021</TableCell>
                   <TableCell className="hidden sm:table-cell">Low</TableCell>
                   <TableCell className="text-right">Resolved</TableCell>
                 </TableRow>
                 <TableRow>
                   <TableCell className="font-medium">#3207</TableCell>
                   <TableCell>Customer Support</TableCell>
                   <TableCell className="hidden md:table-cell">Sophia Anderson</TableCell>
                   <TableCell className="hidden md:table-cell">November 2, 2021</TableCell>
                   <TableCell className="hidden sm:table-cell">High</TableCell>
                   <TableCell className="text-right">Open</TableCell>
                 </TableRow>
                 <TableRow>
                   <TableCell className="font-medium">#3206</TableCell>
                   <TableCell>Feature Update</TableCell>
                   <TableCell className="hidden md:table-cell">Daniel Smith</TableCell>
                   <TableCell className="hidden md:table-cell">October 7, 2021</TableCell>
                   <TableCell className="hidden sm:table-cell">Low</TableCell>
                   <TableCell className="text-right">Resolved</TableCell>
                 </TableRow>
               </TableBody>
             </Table>
           </div>
         </Card>
       </div>
     </main>
   </div>
 </div>
</div>
  );
}

export default Dashboard;