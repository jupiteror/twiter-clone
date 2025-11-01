import { Provider } from "react-redux";
import { store } from "../store";
import { Children } from "react";
import type { PWrapperProps } from "@/shared/types/wrapper.interface";

const StateProvider = ({ children }: PWrapperProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StateProvider;
