import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

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

  const privet = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  };

  return (
    <Navigate to="/login" state={{ form: location }} replace>
      {" "}
    </Navigate>
  );
};

export default PrivetRouter;
