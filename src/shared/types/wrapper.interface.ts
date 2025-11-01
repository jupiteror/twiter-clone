import type { JSX } from "react";

export type ChildrenType = string | JSX.Element | JSX.Element[];

export interface IWrapperProps {
  children?: ChildrenType;
  className?: string;
}

export interface PWrapperProps {
  children?: ChildrenType;
}
