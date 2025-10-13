import HomePage from "@/pages/Home.tsx";
import ListFriend from "@/pages/ListFriend";
import Layout from "@/shared/layout/Layout";
import type { RouteType } from "@/shared/types/route.type";

export const ROUTES: RouteType[] = [
  {
    path: "/",
    element: <HomePage />,
    layout: Layout,
  },
  {
    path: "/list-friend",
    element: <ListFriend />,
    layout: Layout,
  },
];
