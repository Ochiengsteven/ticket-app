import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import Status from "./Status";

const TicketCard = ({ ticket }) => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4 className="">Ticket Title</h4>
      <hr className="h-px border-0 bg-page mb-2 " />
      <p className="mb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
        fringilla libero. Nullam vel eros nec nunc ultricies lacinia.
      </p>
      <div className="flex-grow"></div>
      <div className="flex mt-2 w-full justify-between">
        <div className="flex flex-col w-1/3">
          <p className="my-1 text-xs">08/31/23 10:43PM</p>
          <ProgressDisplay />
        </div>
        <Status />
      </div>
    </div>
  );
};

export default TicketCard;
