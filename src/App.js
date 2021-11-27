import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, Suspense, lazy } from "react";
import { Switch } from "react-router-dom";

import { fetchCurrentUser } from "./redux/auth/auth-operations";
import { getIsRefreshing } from "./redux/auth/auth-selectors";

import AppBar from "./components/AppBar";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() => import("./views/HomeView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView"));
const ContactsView = lazy(() => import("./views/ContactsView"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <AppBar />
        <Suspense fallback={<p>Loadind</p>}>
          <Switch>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PublicRoute path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute path="/login" restrictedTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts" restrictedTo="/login">
              <ContactsView />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </>
    )
  );
}

export default App;
