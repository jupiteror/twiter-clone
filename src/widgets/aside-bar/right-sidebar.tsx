
import { NAVIGATION } from "@/config/navigation";
import { Button } from "@/shared/components/ui/button";
import type { PropsType } from "@/shared/types/props.type";
import { NavLink, useNavigate } from "react-router";

const RightSideBar = ({ className }: PropsType) => {
  const navigate = useNavigate();
  return (
    <div className={`w-1/6 h-[1315px] border-r ${className} `}>
      <Button onClick={() => navigate(-1)}>Cancel</Button>
      {NAVIGATION.map((nav, key) => (
        <span key={key} className="flex justify-center items-center ">
          <NavLink className={"py-[6px] text-2xl"} to={nav.path}>
            {nav.label}
          </NavLink>
        </span>
      ))}
    </div>
  );
};

export default RightSideBar;
