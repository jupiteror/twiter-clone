import Header from "@/widgets/header/header";
import type { IWrapperProps } from "../types/wrapper.interface";
import Container from "../wrapper/container";

const NestedLayout = ({ children }: IWrapperProps) => {
  return (
    <main className="w-full">
      <Header />
      {children}
    </main>
  );
};

export default NestedLayout;
