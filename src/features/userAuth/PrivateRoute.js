import { Navigate, Route } from "react-router";
import { useSelector } from "react-redux";

  export default function PrivateRoute({ path, ...props }) {
    const auth = useSelector((state) => state.auth);
    console.log('auth',auth)
    return auth.isLoggedIn ? (
      <Route {...props} path={path} />
    ) : (
      <Navigate state={{ from: path }} replace to="/login" />
    );
  }
