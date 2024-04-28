/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from "react-router-dom";
import { Button } from "../components/ui/Button";
import { CardContent, Card } from '../components/ui/Card';
import {Package2Icon,SearchIcon, DownloadIcon, ChevronsRightIcon, ChevronsLeftIcon } from '../components/ui/Icons'
import { Badge } from '../components/ui/Badge'
import { Input } from "../components/ui/Input";
import { Checkbox } from '../components/ui/Checkbox'
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../components/ui/Table";
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "../components/ui/Dropdown-menu";
import { Sidebar } from '../components';


export default function TicketsPage() {
    return (
      <>
      <div className="container w-auto mx-auto mt--10 px-4 "style={{ marginTop: '-46.1rem', marginLeft: '15rem' }}>    
      <div className="container mx-auto mt--10 px-4 ">
        <div className="flex flex-col flex-grow">
          
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
            <div className="flex items-center gap-4">
              <h1 className="font-semibold text-lg md:text-xl">Tickets</h1>
              <Button size="sm">New ticket</Button>
              <div className="ml-auto flex items-center gap-2">
                <Button size="xs" variant="outline">
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-auto">
                  <Table className="w-full">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-10 shrink-0">
                          <Checkbox />
                        </TableHead>
                        <TableHead className="font-normal">Ticket</TableHead>
                        <TableHead className="font-normal">Customer</TableHead>
                        <TableHead className="font-normal">Title</TableHead>
                        <TableHead className="font-normal">Status</TableHead>
                        <TableHead className="font-normal">Priority</TableHead>
                        <TableHead className="font-normal">Agent</TableHead>
                        <TableHead className="justify-end font-normal">Last update</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="w-10 shrink-0">
                          <Checkbox />
                        </TableCell>
                        <TableCell className="font-medium">TK001</TableCell>
                        <TableCell>John Doe</TableCell>
                        <TableCell className="font-medium">Issue with billing</TableCell>
                        <TableCell>
                          <Badge variant="default">Open</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="destructive">High</Badge>
                        </TableCell>
                        <TableCell>Agent Smith</TableCell>
                        <TableCell className="justify-end text-sm">2 hours ago</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="w-10 shrink-0">
                          <Checkbox />
                        </TableCell>
                        <TableCell className="font-medium">TK002</TableCell>
                        <TableCell>Jane Smith</TableCell>
                        <TableCell className="font-medium">Cannot access account</TableCell>
                        <TableCell>
                          <Badge variant="outline">Resolved</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">Medium</Badge>
                        </TableCell>
                        <TableCell>Agent Johnson</TableCell>
                        <TableCell className="justify-end text-sm">1 day ago</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="w-10 shrink-0">
                          <Checkbox />
                        </TableCell>
                        <TableCell className="font-medium">TK003</TableCell>
                        <TableCell>Sam Brown</TableCell>
                        <TableCell className="font-medium">Missing items in order</TableCell>
                        <TableCell>
                          <Badge variant="default">Open</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="destructive">High</Badge>
                        </TableCell>
                        <TableCell>Agent Wilson</TableCell>
                        <TableCell className="justify-end text-sm">30 minutes ago</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="w-10 shrink-0">
                          <Checkbox />
                        </TableCell>
                        <TableCell className="font-medium">TK004</TableCell>
                        <TableCell>Emily White</TableCell>
                        <TableCell className="font-medium">Request for refund</TableCell>
                        <TableCell>
                          <Badge variant="default">Open</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="destructive">High</Badge>
                        </TableCell>
                        <TableCell>Agent Parker</TableCell>
                        <TableCell className="justify-end text-sm">1 hour ago</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="w-10 shrink-0">
                          <Checkbox />
                        </TableCell>
                        <TableCell className="font-medium">TK005</TableCell>
                        <TableCell>Mike Johnson</TableCell>
                        <TableCell className="font-medium">Cannot add items to cart</TableCell>
                        <TableCell>
                          <Badge variant="default">Open</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="destructive">High</Badge>
                        </TableCell>
                        <TableCell>Agent Lee</TableCell>
                        <TableCell className="justify-end text-sm">1 day ago</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
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
                <Button size="sm">New ticket</Button>
              </div>
            </div>
          </main>
        </div>
        </div>
        </div>
        </>  
    
    )
  }