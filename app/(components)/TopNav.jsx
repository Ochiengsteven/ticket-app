import Search from "./Search";
import Avatar from "./Avatar";
import WelcomeDisplay from "./WelcomeDisplay";

const TopNav = () => {
  return (
    <div className="flex items-center justify-between pr-4">
      <WelcomeDisplay />
      <div className="flex justify-between px-6 w-1/2">
        <Search />
        <Avatar />
      </div>
    </div>
  );
};

export default TopNav;
