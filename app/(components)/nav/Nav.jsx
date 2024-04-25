import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-nav text-default-text border-card-border py-4 px-2 xs:w-[410px] md:w-[24vw]">
      <div className=" flex flex-col h-full justify-between items-center">
        <div className=" flex flex-col gap-4">
          <h1 className="mb-8 font-semibold text-xl">Manager Account</h1>
          <Link href="/">
            <FontAwesomeIcon icon={faHome} className="icon" />
            Dashboard
          </Link>
          <Link href="/TicketPage/new">
            <FontAwesomeIcon icon={faTicket} className="icon" />
            Tickets
          </Link>
        </div>
        <div>
          <p>steve@gmail.com</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
