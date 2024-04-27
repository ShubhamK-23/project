/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from "react-router-dom";
import { Button } from "../components/ui/Button";
import { CardContent, Card } from '../components/ui/Card';
import {Package2Icon,SearchIcon, DownloadIcon, ChevronsRightIcon, ChevronsLeftIcon } from '../components/ui/Icons'
import { Badge } from '../components/ui/Badge'
import { Input } from "../components/ui/Input";
import { Checkbox } from '../components/ui/Checkbox'
import SideBar from '../components/sidebar/Sidebar'
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../components/ui/Table";
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "../components/ui/Dropdown-menu";


export default function TicketsPage() {
    return (
      <div className="grid min-h-screen items-start w-full gap-2 lg:grid-cols-[280px_1fr]">
        <SideBar> </SideBar>
        <div className="flex flex-col">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6">
            <Link className="lg:hidden" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="sr-only text-gray-500">Home</span>
            </Link>
            <div className="w-full flex-1">
              <form>
                <div className="relative">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 " />
                  <Input
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
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
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
                  <Table className="min-w-[800px]">
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
    )
  }