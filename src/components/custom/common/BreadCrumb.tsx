import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useEffect, useState } from "react";
import {
  Link,
  RouteObject,
  useLocation,
  useMatches,
  useParams,
} from "react-router-dom";

export interface IRouterMatch {
  id: string;
  pathname: string;
  params: string;
  handle: {
    crumb: (data: {
      label: {
        fallback: string;
        key: string;
      };
      path: string;
    }) => void;
  };
}

const BreadCrumb = () => {
  const matches: RouteObject[] = useMatches();
  const params = useParams();
  const location = useLocation();
  const [crumbs, setCrumbs] = useState<
    {
      label: {
        fallback: string;
        key: string;
      };
      path: string;
    }[]
  >([]);
  console.log(params);
  useEffect(() => {
    const crumbs = matches
      .filter((match: RouteObject) => Boolean(match.handle?.crumb))
      .map((match: RouteObject) => match.handle.crumb(params));
    if (crumbs) setCrumbs(crumbs);
  }, [location, matches, params]);
  console.log(crumbs, "crumbs from breadcrumb");
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {crumbs.map((crumb) => {
          return (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={crumb?.path}>{crumb?.label?.key}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumb;
