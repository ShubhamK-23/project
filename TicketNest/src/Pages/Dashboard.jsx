/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/Button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "../components/ui/Card";
import {
  ActivityIcon,
  ClockIcon,
  CheckCircleIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "../components/ui/Icons";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "../components/ui/Table";
import service from "../appwrite/tickets/config";
import { useFetchInterceptor } from "../Interceptor/Interceptor";
import Tickets from "../components/tickets/Tickets";
import { useLoading } from "../Context/LoadingContext";
import { Link } from "react-router-dom";
import { Query } from "appwrite";


function Dashboard() {
  const [tickets, setTickets] = useState([]);
  const {isLoading, setIsLoading} = useLoading();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalTickets, setTotalTickets] = useState(0);
  const [totalOpenTickets, setTotalOpenTickets] = useState(0);
  const [totalClosedTickets, setTotalClosedTickets] = useState(0);
  const [totalW4CRTickets, setTotalW4CRTickets] = useState(0);
  const [cursor, setCursor] = useState(null)
  const [prevCursors, setPrevCursors] = useState([])
  const ticketsPerPage = 7;

  useFetchInterceptor()
  
  const fetchTickets = (page,  cursor) => {
    setIsLoading(true);
    let query = [Query.limit(ticketsPerPage)];
    if(cursor){
      query.push(Query.cursorAfter(cursor));
    }
    service
    .getAllTickets(query)
    .then((response)=> {
      if(response && response.documents) {
        setTickets(response.documents);
        setTotalTickets(response.total)
        if(response.documents.length > 0){
          setCursor(response.documents[response.documents.length - 1].$id);
        }
        console.log(response)
      }

    })
    .catch((error) => {
      console.log("Error Fetching Documents", error);
    })
    .finally(() => {
      setIsLoading(false)
    })
  }

  const fetchOpentickets = () =>{
    setIsLoading(true);
    service.getTicketsByStatus("open")
    .then((response)=> { 
      if(response && response.documents) {
        setTotalOpenTickets(response.documents.length)
      }
    })
    .catch((error)=> {
      console.log("Error Fetching Documents", error);
    })
    .finally(() => {
      setIsLoading(false)
      })
  }

  const fetchClosedtickets = () =>{
    setIsLoading(true);
    service.getTicketsByStatus("Closed Successfully")
    .then((response)=> { 
      if(response && response.documents) {
        setTotalClosedTickets(response.documents.length)
      }
    })
    .catch((error)=> {
      console.log("Error Fetching Documents", error);
    })
    .finally(() => {
      setIsLoading(false)
      })
  }

  const fetchW4CRtickets = () =>{
    setIsLoading(true);
    service.getTicketsByStatus("Wait For Customer Response")
    .then((response)=> { 
      if(response && response.documents) {
        setTotalW4CRTickets(response.documents.length)
      }
    })
    .catch((error)=> {
      console.log("Error Fetching Documents", error);
    })
    .finally(() => {
      setIsLoading(false)
      })
  }

  useEffect(() => {
    fetchTickets(currentPage, null)
    fetchOpentickets();
    fetchClosedtickets();
    fetchW4CRtickets();

  },[]);

  const handleNextPage = () => {
    if(currentPage * ticketsPerPage < totalTickets) {
      setPrevCursors((prev) => [...prev, cursor]);
      setCurrentPage(currentPage + 1);
      fetchTickets(currentPage + 1, cursor);
    }
  }

  const handlePreviousPage = () => {
    if(currentPage > 1) {
      const newPrevCursors = prevCursors.slice(0, -1);
      const newCursor = newPrevCursors[newPrevCursors.length - 1] || null;
      setPrevCursors(newPrevCursors);
      setCurrentPage(currentPage - 1);
      fetchTickets(currentPage - 1, newCursor);
    }
  };

  return (
    <>
    {isLoading ? (
        <div className="flex-1 space-y-4 pt-14 pl-64">
          <header>Loading...</header>
        </div>
      ) :
    (<div className="flex-1 space-y-1 pt-6 pl-64">
      <main className="flex flex-1 flex-col gap-4 p-2 md:gap-6 md:p-6 ">
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-lg md:text-2xl">Tickets</h1>
          <Button className="ml-auto" size="sm">
            New Ticket
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <div className="grid gap-2 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Open Tickets
                </CardTitle>
                <ActivityIcon className="w-4 h-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalOpenTickets}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                Wait For Customer Response
                </CardTitle>
                <ClockIcon className="w-4 h-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalW4CRTickets}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Resolved Tickets
                </CardTitle>
                <CheckCircleIcon className="w-4 h-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalClosedTickets}</div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center md:items-start md:gap-8">

          <div className="ml-auto items-center gap-2 text-xs flex  md:gap-4">
          <Button  
              className="h-6 w-6" 
              size="icon" 
              variant="outline"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              <ChevronsLeftIcon className="h-4 w-4" />
              <span className="sr-only">Previous page</span>
          </Button>
              <span className="font-medium">
                  {`${(currentPage - 1) * ticketsPerPage + 1}-${Math.min(
                          currentPage * ticketsPerPage,
                          totalTickets
                      )} of 
                    ${totalTickets}`}
              </span>
            <Button 
                className="h-6 w-6" 
                size="icon" 
                variant="outline"
                onClick={handleNextPage}
                disabled={currentPage * ticketsPerPage >= totalTickets}
              >
              <ChevronsRightIcon className="h-4 w-4" />
              <span className="sr-only">Next page</span>
            </Button>
          </div>
        </div>

          <Card>
            <div className="border-t border-gray-200 ">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-10 shrink-0"></TableHead>
                    <TableHead className="w-[100px] font-bold">Ticket</TableHead>
                    <TableHead className="min-w-[150px] font-bold">Customer</TableHead>
                    <TableHead className="hidden md:table-cell font-bold">
                      Title
                    </TableHead>
                    <TableHead className="hidden md:table-cell font-bold">
                      Status
                    </TableHead>
                    <TableHead className="hidden sm:table-cell font-bold">
                      Priority
                    </TableHead>
                    
                    <TableHead className="hidden sm:table-cell font-bold">
                      Responsible
                    </TableHead>
                    <TableHead className="hidden sm:table-cell font-bold">Updated At</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody> 
                {tickets.map((ticket) => (
                  <Tickets key={ticket.ticketId} {...ticket} />
                ))}
                </TableBody>
              </Table>
            </div>
          </Card>
          
        </div>
      </main>
    </div>
  )}
    </>
  );
}

export default Dashboard;
