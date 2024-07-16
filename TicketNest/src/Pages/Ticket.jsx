import { Button } from "../components/ui/Button";
import { PencilIcon, ClockIcon } from "../components/ui/Icons";
import { Badge } from '../components/ui/Badge';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/tickets/config";

function formatDateDifference(utcDateString) {
    const updatedAtUTC = new Date(utcDateString); 
    console.log (updatedAtUTC)
    const now = new Date();

    // Adjusting for UTC+05:30 timezone
    const timezoneOffsetMs = 5.5 * 60 * 60 * 1000; // 5.5 hours offset in milliseconds
    const updatedAtLocal = new Date(updatedAtUTC.getTime() + timezoneOffsetMs);

    // Calculate the difference in milliseconds
    const diffMs = now - updatedAtLocal;

    // Convert milliseconds to hours and days
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffHours < 24) {
        return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    } else {
        return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    }
}


function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
}

export default function Ticket() {
    const [ticket, setTicket] = useState();
    const { ticketId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (ticketId) {
            service.getTicket(ticketId).then((ticket) => {
                if (ticket) setTicket(ticket);
                else navigate("/dashboard");
            });
        } else {
            navigate("/dashboard");
        }
    }, [ticketId, navigate]);

    return ticket ? (
        <main className="flex-1 space-y-4 pt-14 pl-64">
        <div className="flex flex-col w-full min-h-screen p-4 md:flex-row md:gap-8 md:p-10">
            <main className="flex-1 space-y-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold">{ticket.title}</h1>
                    <Badge className="ml-5" variant="secondary">{ticket.status}</Badge>
                    <Button variant="ghost" size="icon" className="ml-auto">
                        <PencilIcon className="h-5 w-5" />
                        <span className="sr-only">Edit</span>
                    </Button>
                </div>
                <p className="text-muted-foreground">{ticket.description}</p>
                <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                        <div className="font-semibold">Ticket History</div>
                        <Button variant="outline" size="sm">View All</Button>
                    </div>
                    <div className="grid gap-4">
                        <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 rounded-full bg-muted p-2">
                                <ClockIcon className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <div className="grid gap-1">
                                <div className="font-medium">Ticket created by {ticket.owner}</div>
                                <div className="text-sm text-muted-foreground">{formatDate(ticket.createdAt)}</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        {ticket.workDone && ticket.workDone.map((work, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="flex-shrink-0 rounded-full bg-muted p-2">
                                    <PencilIcon className="h-5 w-5 text-muted-foreground" />
                                </div>
                                <div className="grid gap-1">
                                    <div className="font-medium">{work}</div>
                                    <div className="text-sm text-muted-foreground">
                                        {formatDateDifference(ticket.updatedAt[index])}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <aside className=" md:w-1/3 space-y-4">
                <div className="p-4 border rounded-md">
                    <h2 className="text-lg font-bold">Ticket Information</h2>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li><strong>State:</strong> Open</li>
                        <li><strong>Priority:</strong> High</li>
                        <li><strong>Owner:</strong> John Doe</li>
                        <li><strong>Responsible:</strong> Jane Smith</li>
                        <li><strong>Created At:</strong> {formatDate(ticket.createdAt)}</li>
                    </ul>
                </div>
                <div className="p-4 border rounded-md">
                    <h2 className="text-lg font-bold">Customer Information</h2>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li><strong>Customer Name:</strong> Acme Corp</li>
                    </ul>
                </div>
            </aside>
        </div>
        </main>
    ) : null;
}
