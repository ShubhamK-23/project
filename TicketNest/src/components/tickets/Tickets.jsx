/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from "react-router-dom";
import { Checkbox } from '../ui/Checkbox';
import { Badge } from '../ui/Badge';
import { TableRow, TableCell } from "../ui/Table";

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // getMonth() returns 0-11
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
}


function Tickets({ ticketId, customerName, title, status, priority, responsiblePerson, updatedAt }) {

  const getBadgeVariant = (priority) => {
    switch (priority) {
        case 'High':
            return 'destructive';
        case 'Low':
            return 'outline';
        case 'Medium':
            return 'secondary';
        default:
            return 'default';
    }
};
    return (
      <TableRow>
      <TableCell className="w-10 shrink-0">
        <Checkbox />
      </TableCell>
      <TableCell>
        <Link to={`/ticket/${ticketId}`} className="block w-full font-semibold">
          #{ticketId}
        </Link>
      </TableCell>
      <TableCell>
        <Link to={`/ticket/${ticketId}`} className="block w-full">
          {customerName}
        </Link>
      </TableCell>
      <TableCell>
        <Link to={`/ticket/${ticketId}`} className="block w-full">
          {title}
        </Link>
      </TableCell>
      <TableCell>
        <Link to={`/ticket/${ticketId}`} className="block w-full">
          {status}
        </Link>
      </TableCell>
      <TableCell>
        <Link to={`/ticket/${ticketId}`} className="block w-full">
          <Badge variant={getBadgeVariant(priority)}>{priority}</Badge>
        </Link>
      </TableCell>
      <TableCell>
        <Link to={`/ticket/${ticketId}`} className="block w-full">
          {responsiblePerson}
        </Link>
      </TableCell>
      <TableCell>
        <Link to={`/ticket/${ticketId}`} className="block w-full">
          {formatDate(updatedAt[0])}
        </Link>
      </TableCell>
    </TableRow>  
      );
}

export default Tickets;
