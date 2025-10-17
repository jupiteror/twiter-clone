import LeftSideBar from "@/widgets/aside-bar/left-sidebar";
import RightSideBar from "@/widgets/aside-bar/right-sidebar";
import type { IWrapperProps } from "../types/wrapper.interface";
import NestedLayout from "./NestedLayout";

const Layout = ({ children }: IWrapperProps) => {
  return (
    <div className="flex justify-between">
      <RightSideBar className="pt-10" />
      <NestedLayout>{children}</NestedLayout>
      <LeftSideBar className="pt-10" />
    </div>
  );
};

export default Layout;
