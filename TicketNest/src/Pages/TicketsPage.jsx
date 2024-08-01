/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import {DownloadIcon,ChevronsRightIcon,ChevronsLeftIcon,} from "../components/ui/Icons";
import service from "../appwrite/tickets/config";
import Tickets from "../components/tickets/Tickets";
import {TableHead,TableRow,TableHeader,Table,TableBody,} from "../components/ui/Table";
import { CardContent, Card } from "../components/ui/Card";
import { useFetchInterceptor } from "../Interceptor/Interceptor";
import {useLoading}  from "../Context/LoadingContext";
import { Query } from "appwrite";

export default function TicketsPage() {
  const [tickets, setTickets] = useState([]);
  const {isLoading, setIsLoading} = useLoading();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalTickets, setTotalTickets] = useState(0);
  const [cursor, setCursor] = useState(null)
  const [prevCursors, setPrevCursors] = useState([])
  const ticketsPerPage = 7;

  useFetchInterceptor();

  const fetchTickets = (page,  cursor) => {
    setIsLoading(true);
    let query = [Query.limit(ticketsPerPage)];
    if(cursor){
      query.push(Query.cursorAfter(cursor));
    }
    service
    .getOpenTickets()
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

  useEffect(() => {
    fetchTickets(currentPage, null)
  }, []);

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

  console.log(isLoading);

  return (
    <>
    {isLoading ? (
        <div className="flex-1 space-y-4 pt-14 pl-64">
          <header>Loading...</header>
        </div>
      ) : (
      <div className="flex-1 space-y-4 pt-11 pl-64">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Tickets</h1>
          <div className="flex items-center gap-2">
            <Link to="/addticket">
              <Button size="sm">New Ticket</Button>
            </Link>
            <Button size="sm" variant="outline">
              <DownloadIcon className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-10 shrink-0"></TableHead>
                  <TableHead className="font-bold">Ticket</TableHead>
                  <TableHead className="font-bold">Customer</TableHead>
                  <TableHead className="font-bold">Title</TableHead>
                  <TableHead className="font-bold">Status</TableHead>
                  <TableHead className="font-bold">Priority</TableHead>
                  <TableHead className="font-bold">Responsible</TableHead>
                  <TableHead className="justify-end font-bold">Last update</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tickets.map((ticket) => (
                  <Tickets key={ticket.ticketId} {...ticket} />
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center md:items-start md:gap-8">
          <div className="flex items-center gap-2 text-xs md:gap-4">
            <Button className="h-6 w-6" 
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
            <Button className="h-6 w-6" 
                size="icon" 
                variant="outline"
                onClick={handleNextPage}
                disabled={currentPage * ticketsPerPage >= totalTickets}>
              <ChevronsRightIcon className="h-4 w-4" />
              <span className="sr-only">Next page</span>
            </Button>
          </div>
          <div className="ml-auto flex gap-4 md:gap-2">
            <Link to="/addticket">
              <Button size="sm">New ticket</Button>
            </Link>
          </div>
        </div>
      </div>
      )}
    </>
  );
}
