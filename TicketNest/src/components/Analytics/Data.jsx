/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import service from "../../appwrite/tickets/config";
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Data() {
  const [ticketTrends, setTicketTrends] = useState({});

  useEffect(() => {
    const fetchTickets = async () => {
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
              trends[createdDate] = { created: 0, closed: 0 };
            }
            trends[createdDate].created += 1;

            if (status === "Closed Successfully" && updatedDate) {
              if (!trends[updatedDate]) {
                trends[updatedDate] = { created: 0, closed: 0 };
              }
              trends[updatedDate].closed += 1;
            }
          });

          setTicketTrends(trends);
        } else {
          console.error("No documents found in response");
        }
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, []);

  const dates = Object.keys(ticketTrends).sort();
  const createdData = dates.map((date) => ticketTrends[date].created);
  const closedData = dates.map((date) => ticketTrends[date].closed || 0);

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Created',
        data: createdData,
        borderColor: 'blue',
        fill: false,
        tension: 0.4, 
        
      },
      {
        label: 'Closed',
        data: closedData,
        borderColor: 'red',
        fill: false,
        tension: 0.4, 
      },
    ],
  };

  const options = {
    responsive: true,
    elements: {
      line: {
        tension: 0.4, 
      },

      points: {
        radius: 0,
      }
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Ticket Trends',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
        grid: {
          display: false, // Remove the x-axis grid lines
        },
        ticks: {
          autoSkip: true,
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Count',
        },
        grid: {
          display: false, // Remove the y-axis grid lines
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default Data;
