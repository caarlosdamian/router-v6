import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const auth = true;
  return auth ? children : <Navigate to="/" />;
};

export default PrivateRoute