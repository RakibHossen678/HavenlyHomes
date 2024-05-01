import { useContext } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import loadingImg from '../assets/loading .json'
import Lottie from "lottie-react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location=useLocation()
  console.log(location)
  if (loading) {
    return (
      <div className="w-40">
        <Lottie animationData={loadingImg}></Lottie>
        
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname
  } to="/login"></Navigate>;
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
  };

export default PrivateRoute;
