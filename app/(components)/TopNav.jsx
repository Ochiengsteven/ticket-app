import Search from "./Search";
import Avatar from "./Avatar";
import WelcomeDisplay from "./WelcomeDisplay";

const TopNav = () => {
  return (
    <div className="sticky top-0 z-10 border-b border-nav bg-page flex flex-col items-start pb-2 justify-center pr-4 md:grid grid-cols-2">
      <WelcomeDisplay />
      <div className="flex justify-between px-6 w-1/2  my-6">
        <Search />
        <div className="absolute right-4 hidden sm:block">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
