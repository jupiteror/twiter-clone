import { Button } from "@/components/ui/button";
import { NAVIGATION } from "@/config/navigation";
import { NavLink, useNavigate } from "react-router";

const RightSideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-1/6">
      <Button onClick={() => navigate(-1)}>Cancel</Button>
      {NAVIGATION.map((nav) => (
        <span className="flex justify-center items-center hover:bg-gray-200">
          <NavLink className={"py-[6px]"} to={nav.path}>
            {nav.label}
          </NavLink>
        </span>
      ))}
    </div>
  );
};

export default RightSideBar;
