import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { createRoutes } from "./createRoutes";
export function MainRoute() {
  console.log(createRoutes(routes), "routes");
  const routers = createBrowserRouter(createRoutes(routes));
  return <RouterProvider router={routers} />;
}
