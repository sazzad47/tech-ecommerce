import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "../layout";

// routes
import { routes } from "./Routes";

const Index: React.FC = () => {
  return (
    <>
      <Routes>
        <Route>
          {routes.map((route, idx) => (
            <Route
              path={route.path}
              element={<Layout>{route.component}</Layout>}
              key={idx}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default Index;
