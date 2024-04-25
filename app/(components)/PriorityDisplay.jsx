const PriorityDisplay = ({ priority }) => {
  let priorityColorClass;

  switch (priority) {
    case "Urgent":
      priorityColorClass = "bg-red-200";
      break;
    case "Medium":
      priorityColorClass = "bg-yellow-200";
      break;
    case "Low":
      priorityColorClass = "bg-green-200";
      break;
    default:
      priorityColorClass = "bg-gray-200";
  }

  return (
    <div className="flex justify-start align-baseline text-sm">
      <span
        className={`py-1 px-2 rounded-lg text-grey-accent-hover ${priorityColorClass}`}
      >
        {priority}
      </span>
    </div>
  );
};

export default PriorityDisplay;
