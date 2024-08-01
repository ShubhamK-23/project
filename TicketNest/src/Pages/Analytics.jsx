/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuCheckboxItem } from "../components/ui/Dropdown-menu";
import { Button } from "../components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/Card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../components/ui/Table";
import { CalendarClockIcon, FlagIcon, TicketIcon, UserIcon } from '../components/ui/Icons';
import service from '../appwrite/tickets/config';
import PriorityAnalysis from '../components/Analytics/PriorityAnalysis';
import TicketTrendsAnalysis from '../components/Analytics/TicketTrendsAnalysis';



export function Analytics() {

    const [totalTickets, setTotalTickets] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [toalOpenTicket, setTotalOpenTickts] = useState(0);
    const [totalClosedTickets, setTotalClosedTickets] = useState(0);
    const [totalNonOpenTicket, setTotalNonOpenTickets] = useState(0)

    const fetchTickets = () => {
        setIsLoading(true);
        service.getAllTickets()
        .then((response) => {
            if(response && response.documents) {
                setTotalTickets(response.documents.length)
                setIsLoading(false)
            }
        }).catch((error) => {
            console.error("Error Fetching Total Number OF All Tickets.",error);
        }). finally(() => {
            setIsLoading(false)
        })
    }

    const fetchOpentickets = () => {
        setIsLoading(true);
        service.getOpenTickets()
        .then((response) => {
            if(response && response.documents) {
                setTotalOpenTickts(response.documents.length)
                setIsLoading(false)
                }
            })
            .catch((error) => {
                console.error("Error Fetching Total Number OF All Tickets.",error);
            })
            .finally(() => {
                setIsLoading(false)
            })
            
    }

    const fetchClosedtickets = () => {
        setIsLoading(true);
        service.getTicketsByStatus("Closed Successfully")
        .then((response) => {
            if(response && response.documents) {
                setIsLoading(false);
                setTotalClosedTickets(response.documents.length)
            }
        }).catch((error) => {
            console.error("Error Fetching Total Number OF Closed Tickets.",error);
        }).finally(() => {
            setIsLoading(false)
        })
    }

    const fetchNonOpentickets = () => {
        setIsLoading(true);
        service.getTicketsByStatus([
            "Pending reminder",
            "PAC+",
            "Wait For Customer Response",
            "Wait For Internal Response",
            "Wait For Update Install",
            "Wait For Update Release"
        ]).then((response) => {
            if(response && response.documents) {
                setIsLoading(false);
                setTotalNonOpenTickets(response.documents.length)
            }
        }).catch((error) => {
            console.error("Error Fetching Total Number OF Non Open Tickets.",error);
        }).finally(() => {
            setIsLoading(false)
        })
    }

    useEffect(()=> {
        fetchTickets();
        fetchOpentickets();
        fetchClosedtickets();
        fetchNonOpentickets();
    },[]);


    return (
    <>
      {isLoading ? (<div className="flex-1 space-y-1 pt-12 pl-64">
        <header>Loading...</header>
      </div>):(
    <div className="flex-1 space-y-1 pt-12 pl-64">
      <div className="flex flex-col min-h-screen bg-muted/40">
        <header
          className="sticky top-0 z-30 flex h-12 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:pl-8 font-bold">
          <h1 className="text-lg font-semibold md:text-xl">Analytics</h1>
          <div className="ml-auto flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <CalendarClockIcon className="h-4 w-4" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Date Range</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Select Date Range</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Today</DropdownMenuItem>
                <DropdownMenuItem>Yesterday</DropdownMenuItem>
                <DropdownMenuItem>Last 7 Days</DropdownMenuItem>
                <DropdownMenuItem>Last 30 Days</DropdownMenuItem>
                <DropdownMenuItem>This Month</DropdownMenuItem>
                <DropdownMenuItem>Last Month</DropdownMenuItem>
                <DropdownMenuItem>Custom Range</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <TicketIcon className="h-4 w-4" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Ticket Status</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by Ticket Status</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>Open</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Closed</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Pending</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>On Hold</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <FlagIcon className="h-4 w-4" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Priority</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by Priority</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>High</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Medium</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Low</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <UserIcon className="h-4 w-4" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Team Member</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by Team Member</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>John Doe</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Jane Smith</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Bob Johnson</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Sarah Lee</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-auto">
          <div className="grid gap-4 sm:gap-6 md:gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Ticket Overview</CardTitle>
                <CardDescription>A high-level overview of your ticket metrics.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                  <div
                    className="flex flex-col items-start gap-2 rounded-lg bg-background p-4 shadow-sm">
                    <div className="text-sm font-medium text-muted-foreground">Total Tickets</div>
                    <div className="text-3xl font-semibold">{totalTickets}</div>
                  </div>
                  <div
                    className="flex flex-col items-start gap-2 rounded-lg bg-background p-4 shadow-sm">
                    <div className="text-sm font-medium text-muted-foreground">Open Tickets</div>
                    <div className="text-3xl font-semibold">{toalOpenTicket}</div>
                  </div>
                  <div
                    className="flex flex-col items-start gap-2 rounded-lg bg-background p-4 shadow-sm">
                    <div className="text-sm font-medium text-muted-foreground">Closed Tickets</div>
                    <div className="text-3xl font-semibold">{totalClosedTickets}</div>
                  </div>
                  <div
                    className="flex flex-col items-start gap-2 rounded-lg bg-background p-4 shadow-sm">
                    <div className="text-sm font-medium text-muted-foreground">Non-Open Tickets</div>
                    <div className="text-3xl font-semibold">{totalNonOpenTicket}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="grid gap-4 sm:gap-6 md:gap-8 lg:grid-cols-2">
              <Card className="h-[500px]">
                <CardHeader>
                  <CardTitle>Ticket Trends</CardTitle>
                  <CardDescription>Visualize ticket trends over time.</CardDescription>
                </CardHeader>
                <CardContent className="h-[450px] pt-10 pr-16">
                  <TicketTrendsAnalysis />
                </CardContent>
              </Card>
              <Card className="h-[500px]">
                <CardHeader>
                  <CardTitle>Priority Analysis</CardTitle>
                  <CardDescription>Understand the distribution of ticket priorities.</CardDescription>
                </CardHeader>
                <CardContent className="h-[500px] pr-08">
                  <PriorityAnalysis />
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 sm:gap-6 md:gap-8 lg:grid-cols-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Team Performance</CardTitle>
                  <CardDescription>Evaluate the performance of your support team.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Team Member</TableHead>
                        <TableHead>Tickets Resolved</TableHead>
                        <TableHead>Avg. Resolution Time</TableHead>
                        <TableHead>Customer Satisfaction</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>John Doe</TableCell>
                        <TableCell>125</TableCell>
                        <TableCell>2 days</TableCell>
                        <TableCell>4.8/5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Jane Smith</TableCell>
                        <TableCell>98</TableCell>
                        <TableCell>3 days</TableCell>
                        <TableCell>4.6/5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Bob Johnson</TableCell>
                        <TableCell>82</TableCell>
                        <TableCell>4 days</TableCell>
                        <TableCell>4.3/5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Sarah Lee</TableCell>
                        <TableCell>65</TableCell>
                        <TableCell>5 days</TableCell>
                        <TableCell>4.1/5</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Customer Insights</CardTitle>
                  <CardDescription>Analyze customer feedback and satisfaction.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div
                      className="flex flex-col items-start gap-2 rounded-lg bg-background p-4 shadow-sm">
                      <div className="text-sm font-medium text-muted-foreground">Customer Satisfaction</div>
                      <div className="text-3xl font-semibold">4.7/5</div>
                    </div>
                    <div
                      className="flex flex-col items-start gap-2 rounded-lg bg-background p-4 shadow-sm">
                      <div className="text-sm font-medium text-muted-foreground">Positive Feedback</div>
                      <div className="text-3xl font-semibold">85%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Top Issues</CardTitle>
                <CardDescription>Identify the most common ticket issues.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Issue</TableHead>
                      <TableHead>Tickets</TableHead>
                      <TableHead>Avg. Resolution Time</TableHead>
                      <TableHead>Customer Satisfaction</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Billing-related issues</TableCell>
                      <TableCell>325</TableCell>
                      <TableCell>3 days</TableCell>
                      <TableCell>4.2/5</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Account setup problems</TableCell>
                      <TableCell>212</TableCell>
                      <TableCell>2 days</TableCell>
                      <TableCell>4.5/5</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Subscription cancellation</TableCell>
                      <TableCell>178</TableCell>
                      <TableCell>4 days</TableCell>
                      <TableCell>3.9/5</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Password reset requests</TableCell>
                      <TableCell>134</TableCell>
                      <TableCell>1 day</TableCell>
                      <TableCell>4.7/5</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Refund processing</TableCell>
                      <TableCell>92</TableCell>
                      <TableCell>5 days</TableCell>
                      <TableCell>4.1/5</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

          </div>
        </main>
      </div>
      </div>
    )}
    </>
    );
  }
