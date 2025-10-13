import LeftSideBar from "@/widgets/aside-bar/left-sidebar";
import RightSideBar from "@/widgets/aside-bar/right-sidebar";
import type { IWrapperProps } from "../types/wrapper.interface";

const Layout = ({ children }: IWrapperProps) => {
  return (
    <div className="flex justify-between">
      <RightSideBar />
      <main className="flex justify-center w-full">{children}</main>
      <LeftSideBar />
    </div>
  );
};

export default Layout;
