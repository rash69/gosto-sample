import React, { useContext } from 'react';
import {Route, Redirect} from 'react-router-dom'
import { UserContext } from '../Auth';


const PrivateRoute = ({ children, ...rest }) => {
  const auth = useContext(UserContext)

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;