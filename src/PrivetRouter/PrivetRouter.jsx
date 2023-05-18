import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation } from "react-router-dom";

const PrivetRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <>
        <progress className="progress w-96"></progress>
      </>
    );
  }

  if (user) {
    return children;
  }

  return (
    <Navigate to={"/login"} state={{ form: location }} replace>
      {" "}
    </Navigate>
  );
};

export default PrivetRouter;
