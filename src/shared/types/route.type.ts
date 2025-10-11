import type { JSX } from "react";

export type RouteType = {
  path: string;
  element: JSX.Element;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  layout: JSX.Element | any;
};

export type RoutesType = { unknown: RouteType[]; user: RouteType[] };
