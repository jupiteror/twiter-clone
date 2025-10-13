import { NAVIGATION } from "@/config/navigation";
import { NavLink } from "react-router";

const LeftSideBar = () => {
  return (
    <div className="w-1/6">
      {NAVIGATION.map((nav) => (
        <span className="flex justify-center items-center hover:bg-gray-200">
          <NavLink to={nav.path}>{nav.label}</NavLink>
        </span>
      ))}
    </div>
  );
};

export default LeftSideBar;
