import { NAVIGATION } from "@/config/navigation";
import PostWindow from "@/shared/components/blocks/post-window/post-window";

import type { PropsType } from "@/shared/types/props.type";
import { NavLink } from "react-router";

const LeftSideBar = ({ className }: PropsType) => {
  return (
    <div className={`w-1/4 border-r ${className} `}>
      {NAVIGATION.map((nav, key) => (
        <span
          key={key}
          className="flex w-[150px] py-2 rounded-2xl items-center hover:bg-secondary "
        >
          <NavLink className={"text-2xl py-3"} to={nav.path || ""}>
            {nav.label}
          </NavLink>
        </span>
      ))}
      {/* <Button className="bg-secondary p-6 w-1/2 text-xl mt-5 rounded-2xl">
        Tweet
      </Button> */}
      <PostWindow className="bg-secondary py-2 w-1/2 text-xl mt-5 rounded-2xl cursor-pointer" />
    </div>
  );
};

export default LeftSideBar;
