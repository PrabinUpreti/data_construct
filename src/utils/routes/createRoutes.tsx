import React from "react";
import { Params, RouteObject } from "react-router";

export interface ICrumb {
  label: {
    key?: string;
    name: string;
  };
  path: string;
}
export interface IRoute {
  path?: string;
  element?: React.ElementType;
  pageTitle?: string;
  component?: React.ReactNode;
  crumbs: (p: any) => ICrumb[];
  children: IRoute[];
}

export type TCustomRouteObject = RouteObject;

export const createRoutes = (routes: IRoute[]): TCustomRouteObject[] => {
  if (routes?.length === 0) return [];
  return routes?.map((route: IRoute) => {
    return {
      path: `${route?.path}`,
      element: route.element && (
        <route.element title={route?.pageTitle} component={route?.component} />
      ),
      handle: {
        crumb: (params: Params) => {
          return route.crumbs ? route.crumbs(params)?.[0] : [];
        },
      },
      children: createRoutes(route?.children),
    };
  });
};
