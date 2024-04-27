/* eslint-disable no-unused-vars */
import React from 'react'
import { Checkbox } from '../../components/ui/Checkbox';
import { Badge } from '../../components/ui/Badge';
import { CardContent, Card } from '../../components/ui/Card';
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../../components/ui/Table";

function Tickets() {
  return (
    <>
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
                                <TableCell> <Badge variant="gray">Open</Badge></TableCell>
                                <TableCell><Badge variant="orange">High</Badge></TableCell>
                                <TableCell>Agent Smith</TableCell>
                                <TableCell className="justify-end text-sm">2 hours ago</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    </>
  )
}

export default Tickets