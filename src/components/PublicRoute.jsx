import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../redux/auth/auth-selectors";
import { Redirect, Route } from "react-router-dom";

export default function PublicRoute({
  children,
  restrictedTo = "/",
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shoulRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shoulRedirect ? <Redirect to={restrictedTo} /> : children}
    </Route>
  );
}
