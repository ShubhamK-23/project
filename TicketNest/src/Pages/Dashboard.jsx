/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "../components/ui/Button";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '../components/ui/Card';
import {ActivityIcon, ClockIcon, CheckCircleIcon } from '../components/ui/Icons'
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../components/ui/Table";
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "../components/ui/Dropdown-menu";

function Dashboard() {
  return (
    <div className="flex-1 space-y-4 pt-14 pl-64">
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
  );
}

export default Dashboard;