import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import Status from "./Status";
import Link from "next/link";

const TicketCard = ({ ticket }) => {
  const formatTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock id={ticket._id} />
        </div>
      </div>
      <Link
        href={`/TicketPage/${ticket._id}`}
        title="Update ticket"
        style={{ display: "contents" }}
      >
        <h4 className="">{ticket.title}</h4>
        <hr className="h-px border-0 bg-page mb-2 " />
        <p className="mb-2">{ticket.description}</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2 w-full justify-between">
          <div className="flex flex-col w-1/3">
            <p className="my-1 text-xs">{formatTimestamp(ticket.updatedAt)}</p>
            <ProgressDisplay progress={ticket.progress} />
          </div>
          <Status status={ticket.status} />
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
