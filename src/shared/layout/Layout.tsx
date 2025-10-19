import RightSideBar from "@/widgets/aside-bar/right-sidebar";
import type { IWrapperProps } from "../types/wrapper.interface";
import NestedLayout from "./NestedLayout";
import LeftSideBar from "@/widgets/aside-bar/left-sidebar";

const Layout = ({ children }: IWrapperProps) => {
  return (
    <div className="flex justify-between">
      <LeftSideBar className="pt-10" />
      <NestedLayout>{children}</NestedLayout>
      <RightSideBar className="pt-10" />
    </div>
  );
};

export default Layout;
