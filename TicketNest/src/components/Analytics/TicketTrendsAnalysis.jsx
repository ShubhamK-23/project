/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import service from "../../appwrite/tickets/config";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer, ChartTooltipContent } from "../ui/Chart";


function TicketTrendsAnalysis() {
  const [isLoading, setIsLoading] = useState(false)
  const [ticketTrends, setTicketTrends] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      setIsLoading(true);
      try {
        const response = await service.getAllTickets();

        if (response && response.documents) {
          const tickets = response.documents;
          const trends = {};

          tickets.forEach((ticket) => {
            const createdDate = new Date(ticket.createdAt)
              .toISOString()
              .split("T")[0];
            const updatedDate =
              ticket.updatedAt.length > 0
                ? new Date(ticket.updatedAt[0]).toISOString().split("T")[0]
                : null;
            const status = ticket.status;

            if (!trends[createdDate]) {
              trends[createdDate] = {
                date: createdDate,
                created: 0,
                closed: 0,
              };
            }
            trends[createdDate].created += 1;

            if (status === "Closed Successfully" && updatedDate) {
              if (!trends[updatedDate]) {
                trends[updatedDate] = {
                  date: updatedDate,
                  created: 0,
                  closed: 0,
                };
              }
              trends[updatedDate].closed += 1;
            }
          });

          // Transform trends object to an array for Recharts
          const trendsArray = Object.values(trends).sort(
            (a, b) => new Date(a.date) - new Date(b.date)
          );
          setTicketTrends(trendsArray);
        } else {
          console.error("No documents found in response");
        }
      } catch (error) {
        console.error("Error fetching tickets:", error);
      } finally{
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div className="w-full h-full">
      <ChartContainer isLoading={isLoading}
        config={{
          desktop: {
            label: "Tickets",
            color: "#2a9d90",
          },
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            accessibilityLayer
            data={ticketTrends}
            vertical={false}
            margin={{
              top: 5,
              right: 30,
              bottom: 5,
            }}
          >
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(5, 10)}
            />
            <ChartTooltipContent
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="Natural"
              dataKey="created"
              stroke="#2a9d90"
              strokeWidth={1}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="closed"
              stroke="#e76e50"
              strokeWidth={1}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}

export default TicketTrendsAnalysis;
