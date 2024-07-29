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

export default function TicketsPage() {
  const [tickets, setTickets] = useState([]);
  const {isLoading, setIsLoading} = useLoading()

  useFetchInterceptor();

  useEffect(() => {
    setIsLoading(true);
    service
      .getAllTickets()
      .then((response) => {
        if (response && response.documents) {
          setTickets(response.documents);
          console.log(response);
        }
      })
      .catch((error) => {
        console.log("Error fetching tickets:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setIsLoading]);

  console.log(isLoading);

  return (
    <>
    {isLoading ? (
        <div className="flex-1 space-y-4 pt-14 pl-64">
          <header>Loading...</header>
        </div>
      ) : (
      <div className="flex-1 space-y-4 pt-14 pl-64">
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
                  <TableHead className="font-normal">Ticket</TableHead>
                  <TableHead className="font-normal">Customer</TableHead>
                  <TableHead className="font-normal">Title</TableHead>
                  <TableHead className="font-normal">Status</TableHead>
                  <TableHead className="font-normal">Priority</TableHead>
                  <TableHead className="font-normal">Agent</TableHead>
                  <TableHead className="justify-end font-normal">
                    Last update
                  </TableHead>
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
            <Button className="h-6 w-6" size="icon" variant="outline">
              <ChevronsLeftIcon className="h-4 w-4" />
              <span className="sr-only">Previous page</span>
            </Button>
            <span className="font-medium">1-5 of 20</span>
            <Button className="h-6 w-6" size="icon" variant="outline">
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
