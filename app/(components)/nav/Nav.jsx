import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/" className="flex">
          <FontAwesomeIcon icon={faHome} className="icon" />
          <h4>Dashboard</h4>
        </Link>
        <Link href="/TicketPage/new" className="flex">
          <FontAwesomeIcon icon={faTicket} className="icon" />
          <h4>Ticket</h4>
        </Link>
      </div>
      <div>
        <p className=" text-default-text">steve@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
