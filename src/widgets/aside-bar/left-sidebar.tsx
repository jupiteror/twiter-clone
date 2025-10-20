import { NAVIGATION } from "@/config/navigation";
import type { PropsType } from "@/shared/types/props.type";
import { NavLink } from "react-router";

const LeftSideBar = ({ className }: PropsType) => {
  return (
    <div className={`w-1/6 h-[1315px] border-r ${className} `}>
      {NAVIGATION.map((nav, key) => (
        <span
          key={key}
          className="flex justify-center rounded-2xl items-center hover:bg-secondary "
        >
          <NavLink className={"text-2xl py-5"} to={nav.path}>
            {nav.label}
          </NavLink>
        </span>
      ))}
    </div>
  );
};

export default LeftSideBar;
