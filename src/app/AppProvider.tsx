import { BrowserRouter } from "react-router";

import type { IWrapperProps } from "@/shared/types/wrapper.interface";
import StateProvider from "@/features/store/Provider/state-provider";

const AppProvider = ({ children }: IWrapperProps) => {
  return (
    <BrowserRouter>
      <StateProvider>{children}</StateProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
