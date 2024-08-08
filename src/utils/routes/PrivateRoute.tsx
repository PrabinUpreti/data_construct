import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface Props {
  component: React.ComponentType;
  path?: string;
}

export const PrivateRoute: React.FC<Props> = ({
  component: RouteComponent,
}) => {
  const token = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   if (token === "token") {
  //     setIsAuthenticated(true);
  //   }
  // }, []);

  if (token === "token") {
    console.log("logged in");
    return <RouteComponent />;
  } else {
    return <Navigate to="/login" />;
  }
};
