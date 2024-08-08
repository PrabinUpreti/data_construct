import Login from "@/pages/Login";
import Welcome from "@/pages/Welcome";
import { pageTitles } from "../constants/pageTitles";
import { CommonLayout } from "@/layouts/CommonLayout";
import { PrivateRoute } from "./PrivateRoute";
import { HomePage } from "@/pages/HomePage";
import { CreatePage } from "@/pages/CreatePage";
import { Employee } from "@/pages/Employee";

export const privateRoutes = [
  {
    path: "/",
    element: HomePage,
    pageTitle: pageTitles.homePage,
    crumbs: () => [{ label: { key: `home`, name: `Home` }, path: `/` }],
  },
  {
    path: "/employee",
    element: Employee,
    pageTitle: pageTitles.employeePage,
    crumbs: () => [{ label: { key: `employee`, name: `Employee` }, path: `/` }],
  },
  {
    path: "/employee/create",
    element: CreatePage,
    pageTitle: pageTitles.createPage,
    crumbs: () => [
      { label: { key: `create`, name: `Create` }, path: `create` },
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
    path: "/",
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
