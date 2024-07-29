
import { useEffect, useState } from "react";
import TicketFormOld from "../components/ticketForm/TicketFormOld";
import { useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/tickets/config";

export default function EditTicket() {
    const [ticket, setTicket] = useState(null);
    const {ticketId} = useParams()
    const navigate = useNavigate();
    
    useEffect(() =>{
        if(ticketId) {
            service.getTicket(ticketId).then((ticket) => {
                if(ticket) {
                    setTicket(ticket)
                    console.log(ticket);
                }
            })
        }
        else {
            navigate('/')
        }
    }, [ticketId, navigate])

    return ticket ? (
        <div className="flex-1 space-y-4 pt-14 pl-64">
          <TicketFormOld ticket={ticket} />
        </div>
      ) : (
        <div className="flex-1 space-y-4 pt-14 pl-64">
          <header>Loading...</header>
        </div>
      );
}

