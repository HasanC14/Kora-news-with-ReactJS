import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const PrivateRoute = ({ children, loading }) => {
  //children mane <News></News>
  const { User } = useContext(AuthContext);
  const location = useLocation();
  //user ke check korte korte tar ager location ta nia nilam jate take redirect korte pari
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (!User) {
    return (
      <Navigate to="/login" state={{ from: location }} replace></Navigate>
      //ekhane state ekta object jar property hoilo form abar form er value hoilo location
    );
  }
  return children;
  // if (!User) {
  //   return (
  //     <Navigate to="/login"></Navigate>
  //     //ekhane state ekta object jar property hoilo form abar form er value hoilo location
  //   );
  // }
  // return children;
};

export default PrivateRoute;
