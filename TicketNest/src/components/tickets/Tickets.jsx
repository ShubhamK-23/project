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
    return (
        <TableRow>
          <TableCell className="w-10 shrink-0">
            <Checkbox />
          </TableCell>
          {[ticketId, customerName, title, status, priority, responsiblePerson, formatDate(updatedAt[0])].map((content, index) => (
            <TableCell key={index}>
              <Link to={`/ticket/${ticketId}`} className="block w-full">
                {
                 index === 4 ? <Badge variant="destructive">{content}</Badge> :
                 content}
              </Link>
            </TableCell>
          ))}
        </TableRow>  
      );
}

export default Tickets;
