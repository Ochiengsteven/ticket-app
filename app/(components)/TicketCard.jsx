import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import Status from "./Status";

const TicketCard = () => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4 className="text-lg font-semibold">Ticket Title</h4>
      <hr className="h-px border-0 bg-page mb-2 " />
      <ProgressDisplay />
      <Status />
    </div>
  );
};

export default TicketCard;
