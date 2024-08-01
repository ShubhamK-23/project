/* eslint-disable no-unused-vars */
import  { useEffect, useState } from "react";
import service from "../../appwrite/tickets/config";
import { PieChart, Pie, Cell, Tooltip, } from 'recharts';
import { ChartContainer, ChartTooltipContent } from "../ui/Chart";
import Skeleton from "../SkeletonShimmer/Skeleton";

function PriorityAnalysis() {
  const [priorityData, setPriorityData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchTickets = async () => {
      setIsLoading(true);
      try {
        const response = await service.getAllTickets();

        if (response && response.documents) {
          setIsLoading(false);
          const tickets = response.documents;
          const priorities = {};

          tickets.forEach((ticket) => {
            const priority = ticket.priority;

            if (!priorities[priority]) {
              priorities[priority] = { name: priority, value: 0 };
            }
            priorities[priority].value += 1;
          });

          const prioritiesArray = Object.values(priorities);

          setPriorityData(prioritiesArray);
        } else {
          console.error("No documents found in response");
        }
      } catch (error) {
        console.error("Error fetching tickets:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const config = {
    visitors: {
      label: "Visitors",
    },
    high: {
      label: "High",
      color: "hsl(12, 76%, 61%)",
    },
    medium: {
      label: "Medium",
      color: 'hsl(173, 58%, 39%)',
    },
    low: {
      label: "Low",
      color: "hsl(197, 37%, 24%)",
    },
  };

  const getColor = (name) => {
    const priority = name.toLowerCase();
    return config[priority]?.color || "#8884d8";
  };

  return (
  
      <ChartContainer isLoading={isLoading}
        config={config}
        className="mx-auto aspect-square max-h-[350px] pb-0"
      >
        <PieChart>
          <Tooltip content={<ChartTooltipContent hideLabel />} />
          <Pie
            data={priorityData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={140}
            label
          >
            {priorityData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.name)} />
            ))}
          </Pie>
        </PieChart>
      </ChartContainer>
    
  );
}

export default PriorityAnalysis;