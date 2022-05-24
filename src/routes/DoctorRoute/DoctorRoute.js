import React from "react";
import { Redirect, Route } from "react-router";

const DoctorRoute = ({ children, ...rest }) => {
  const isDoctor = localStorage.getItem("isDoc");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isDoctor ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default DoctorRoute;
