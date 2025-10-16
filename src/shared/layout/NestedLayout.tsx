import Header from "@/widgets/header/header";
import type { IWrapperProps } from "../types/wrapper.interface";

const NestedLayout = ({ children }: IWrapperProps) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default NestedLayout;
