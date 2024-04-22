import React from "react";
import TicketCard from "./(components)/TicketCard";
import TopNav from "./(components)/TopNav";

const Dashboard = () => {
  return (
    <div>
      <TopNav />
      <hr className="h-px border-0 bg-nav mb-2 " />
      <TicketCard />
      <TicketCard />
      <TicketCard />
    </div>
  );
};

export default Dashboard;
