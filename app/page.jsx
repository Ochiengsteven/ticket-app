"use client";

import React, { useState, useEffect } from "react";
import TicketCard from "./(components)/card/TicketCard";
import TopNav from "./(components)/nav/TopNav";
import StatusGraph from "./(components)/graphs/statusGraph";
import DailyTicketsBarGraph from "./(components)/graphs/DailyTicketsBarGraph";

const getTickets = async () => {
  try {
    const res = await fetch(`/api/Tickets`, {
      cache: "no-store",
    });
    const data = await res.json(); // Assuming the response is JSON data
    return data; // Return the fetched data
  } catch (error) {
    console.log("Error fetching tickets:", error);
    return { tickets: [] }; // Return an empty array or handle error case appropriately
  }
};

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const { tickets } = await getTickets();
      setTickets(tickets);
    };

    fetchTickets();
  }, []); // Empty dependency array to run the effect only once

  const uniqueStatus = [...new Set(tickets.map(({ status }) => status))];

  return (
    <div>
      <TopNav />
      <div className="p-5 overflow-y-auto xs:p-0">
        <div className="flex flex-col md:flex-row m-2 bg-page md:h-[38vh]">
          <div className="md:w-1/2 p-2 pb-3 bg-card mr-2 mb-2 md:mb-0 rounded-lg">
            <div>
              <h4>Daily Tickets</h4>
              <p>Check out each column for more details</p>
            </div>
            <DailyTicketsBarGraph tickets={tickets} />
          </div>
          <div className="flex flex-col items-center rounded-lg md:w-1/2 p-2 bg-card text-left">
            <div className="w-full mb-3">
              <h4>Tickets by status</h4>
              <p>Open vs. In progress vs. Closed Tickets</p>
            </div>
            <StatusGraph tickets={tickets} />
          </div>
        </div>
        <div>
          {uniqueStatus.map((uniqueStatus, statusIndex) => (
            <div key={statusIndex} className="mb-4">
              <h3 className="p-2">{uniqueStatus}</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.status === uniqueStatus)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
