import React from "react";
import { Routes, Route } from "react-router-dom";

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
              element={route.component}
              key={idx}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default Index;
