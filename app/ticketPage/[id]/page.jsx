import TicketForm from "@/app/(components)/forms/TicketForm";

const getTicketById = async (id) => {
  const apiUrl = process.env.API_URL;
  const res = await fetch(`${apiUrl}/api/Tickets/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch ticket data");
  }

  return res.json();
};

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let updateTicketData = {};

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }
  // return <TicketForm ticket={updateTicketData} />;
  return <div>Page under construction</div>;
};

export default TicketPage;
