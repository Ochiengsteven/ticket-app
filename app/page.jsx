import React from "react";
import TicketCard from "./(components)/TicketCard";
import TopNav from "./(components)/TopNav";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });
    const data = await res.json(); // Assuming the response is JSON data
    return data; // Return the fetched data
  } catch (error) {
    console.log("Error fetching tickets:", error);
    return { tickets: [] }; // Return an empty array or handle error case appropriately
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueStatus = [...new Set(tickets?.map(({ status }) => status))];

  return (
    <div>
      <TopNav />
      <div className="p-5 overflow-y-auto xs:p-0">
        <div>
          {tickets &&
            uniqueStatus?.map((uniqueStatus, statusIndex) => (
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
