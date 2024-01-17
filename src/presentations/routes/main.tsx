import {
  RootRoute,
  Route,
  Router,
  RouterProvider,
} from "@tanstack/react-router";
import { BaseLayout } from "@components";
import * as pages from "@pages";

const root = new RootRoute({
  component: BaseLayout,
});

const index = new Route({
  getParentRoute: () => root,
  component: pages.ExplorePage,
  path: "/",
});

const profile = new Route({
  getParentRoute: () => root,
  component: pages.ProfilePage,
  path: "/profile",
});

const routeTree = root.addChildren([index, profile]);
const router = new Router({ routeTree });

export function AppRouter() {
  return <RouterProvider router={router} />;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
