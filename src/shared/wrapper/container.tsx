import { cn } from "@/lib/utils";
import type { IWrapperProps } from "../types/wrapper.interface";

const Container = ({ children, className }: IWrapperProps) => {
  return (
    <main className={cn("container mx-auto px-5 ", className)}>{children}</main>
  );
};

export default Container;
