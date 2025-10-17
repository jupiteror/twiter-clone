import Bookmarks from "@/pages/Bookmarks";
import Explore from "@/pages/Explore";
import HomePage from "@/pages/Home.tsx";
import Lists from "@/pages/Lists";

import Messages from "@/pages/Messages";
import Notifications from "@/pages/Notifications";
import Profile from "@/pages/Profile";
import Layout from "@/shared/layout/Layout";
import type { RouteType } from "@/shared/types/route.type";

export const ROUTES: RouteType[] = [
  {
    path: "/",
    element: <HomePage />,
    layout: Layout,
  },
  {
    path: "/explore",
    element: <Explore />,
    layout: Layout,
  },
  {
    path: "/notifications",
    element: <Notifications />,
    layout: Layout,
  },
  {
    path: "/lists",
    element: <Lists />,
    layout: Layout,
  },
  {
    path: "/messages",
    element: <Messages />,
    layout: Layout,
  },
  {
    path: "/profile",
    element: <Profile />,
    layout: Layout,
  },
  {
    path: "/bookmarks",
    element: <Bookmarks />,
    layout: Layout,
  },
];
