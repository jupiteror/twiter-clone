import { Provider } from "react-redux";
import { store } from "../store";
import type { PWrapperProps } from "@/shared/types/wrapper.interface";

const StateProvider = ({ children }: PWrapperProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StateProvider;
