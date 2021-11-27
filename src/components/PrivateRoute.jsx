import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getIsLoggedIn } from "../redux/auth/auth-selectors";

export default function PrivatRoute({
  children,
  restrictedTo = "/",
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={restrictedTo} />}
    </Route>
  );
}
