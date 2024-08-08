import { Crud } from "@/pages/Crud";
import Login from "@/pages/Login";
import Welcome from "@/pages/Welcome";
import { pageTitles } from "../constants/pageTitles";
import { CommonLayout } from "@/layouts/CommonLayout";
import { PrivateRoute } from "./PrivateRoute";
import { HomePage } from "@/pages/HomePage";

export const privateRoutes = [
  {
    path: "/",
    element: HomePage,
    pageTitle: pageTitles.homePage,
    crumbs: () => [{ label: { key: `home`, name: `Home` }, path: `/` }],
  },
  {
    path: "/crud",
    element: Crud,
    pageTitle: pageTitles.crudPage,
    crumbs: () => [{ label: { key: `crud`, name: `CRUD` }, path: `/` }],
  },
  {
    path: "/crud/create",
    element: HomePage,
    pageTitle: pageTitles.welcomePage,
    crumbs: () => [
      { label: { key: `welcome`, name: `Welcome` }, path: `welcome` },
    ],
  },
  {
    path: "/welcome",
    element: Welcome,
    pageTitle: pageTitles.welcomePage,
    crumbs: () => [
      { label: { key: `welcome`, name: `Welcome` }, path: `welcome` },
    ],
  },
];

export const routes = [
  //Unprotected Routes
  {
    path: "/login",
    element: Login,
    pageTitle: pageTitles.loginPage,
  },

  //protected Routes
  {
    path: "",
    element: PrivateRoute,
    component: CommonLayout,
    crumbs: () => [
      {
        label: {
          key: `home`,
          name: "Home",
        },
        path: `/`,
      },
    ],
    children: privateRoutes,
  },
];
