import { setAuthToken } from "@/redux/appSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

interface Props {
  component: React.ComponentType;
  path?: string;
}

export const PrivateRoute: React.FC<Props> = ({
  component: RouteComponent,
}) => {
  const authToken = useSelector((state) => state.app.authenticationToken);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  if (token === "token") {
    dispatch(setAuthToken(token));
    console.log("logged in");
    navigate("/welcome");
    return <RouteComponent />;
  } else {
    return <Navigate to="/login" />;
  }
};
