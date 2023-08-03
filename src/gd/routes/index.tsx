import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Layout
import Layout from "../layout";

// routes
import { privateRoutes, publicRoutes } from "./Routes";
import { AuthProtected } from "./AuthProtected";
import { useSelector } from "react-redux";
import { RootState } from "src/state/store";

const Index: React.FC = () => {
  const { access_token } = useSelector((state: RootState) => state.auth);
  return (
    <>
      <Routes>
        <Route>
          {privateRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                <AuthProtected>
                  <Layout>{route.component}</Layout>
                </AuthProtected>
              }
              key={idx}
            />
          ))}
        </Route>
        <Route>
        {publicRoutes.map((route, idx) => {
          if (route.path === "/login" || route.path === "/register") {
            return (
              <Route
                path={route.path}
                element={access_token ? <Navigate to="/" replace={true} /> : <Layout>{route.component}</Layout>} // Fixed conditional rendering
                key={idx}
              
              />
            );
          }
          return (
            <Route
              path={route.path}
              element={<Layout>{route.component}</Layout>}
              key={idx}
            
            />
          );
        })}
        </Route>
      </Routes>
    </>
  );
};

export default Index;
