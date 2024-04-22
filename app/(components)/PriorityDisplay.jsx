import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriorityDisplay = () => {
  return (
    <div className="flex justify-start align-baseline text-sm">
      <span className="bg-red-200 py-1 px-2 rounded-lg text-grey-accent-hover">
        Urgent
      </span>
    </div>
  );
};

export default PriorityDisplay;
