import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component }) => {
  const { idToken } = useSelector((state) => state.auth);
  return idToken ? component : <Navigate to="/login" />;
};

export default PrivateRoute;
