import RightSideBar from "@/widgets/aside-bar/right-sidebar";
import type { IWrapperProps } from "../types/wrapper.interface";
import NestedLayout from "./NestedLayout";
import LeftSideBar from "@/widgets/aside-bar/left-sidebar";
import Container from "../wrapper/container";

const Layout = ({ children }: IWrapperProps) => {
  return (
    <Container className="flex justify-between">
      <LeftSideBar className="pt-10" />
      <NestedLayout>{children}</NestedLayout>
      <RightSideBar className="pt-10" />
    </Container>
  );
};

export default Layout;
