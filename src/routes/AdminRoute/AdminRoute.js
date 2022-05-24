import React from "react";
import { Redirect, Route } from "react-router";

const AdminRoute = ({ children, ...rest }) => {
  const isAdmin = localStorage.getItem("isAdm");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAdmin ? (
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

export default AdminRoute;