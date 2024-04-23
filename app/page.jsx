import React from "react";
import TicketCard from "./(components)/TicketCard";
import TopNav from "./(components)/TopNav";

const Dashboard = () => {
  return (
    <div>
      <TopNav />
      {/* <hr className="h-px border-0 bg-nav mb-2 " /> */}
      <div className="p-5 overflow-y-auto xs:p-0">
        <div className="lg:grid grid-cols-2 xl:grid-cols-4">
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
