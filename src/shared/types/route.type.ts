import type { JSX } from "react";

export type RouteType = {
  path: string;
  element: JSX.Element | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  layout: JSX.Element | any;
};
