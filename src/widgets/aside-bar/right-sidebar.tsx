import { NAVIGATION } from "@/config/navigation";
import { Button } from "@/shared/components/ui/button";
import type { PropsType } from "@/shared/types/props.type";
import { NavLink } from "react-router";

const RightSideBar = ({ className }: PropsType) => {
  return (
    <div className={`w-1/6 h-[1315px] border-r ${className} `}>
      {NAVIGATION.map((nav, key) => (
        <span
          key={key}
          className="flex justify-center py-6 rounded-2xl items-center hover:bg-secondary "
        >
          <NavLink className={"text-2xl"} to={nav.path}>
            {nav.label}
          </NavLink>
        </span>
      ))}
    </div>
  );
};

export default RightSideBar;
