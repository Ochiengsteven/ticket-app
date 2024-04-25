const Status = ({ status }) => {
  let statusColorClass;

  switch (status) {
    case "Open":
      statusColorClass = "bg-green-400";
      break;
    case "In Progress":
      statusColorClass = "bg-blue-400";
      break;
    case "Closed":
      statusColorClass = "bg-gray-400";
      break;
    default:
      statusColorClass = "bg-gray-400";
  }

  return (
    <div className="mt-2">
      <span
        className={`text-xs text-gray-700 font-semibold py-1 px-2 inline-block rounded-full ${statusColorClass}`}
      >
        {status}
      </span>
    </div>
  );
};

export default Status;
