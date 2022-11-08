import React from "react";

import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

import Landing from "./components/Landing";
import Subjects from "./components/Subjects";

const MainPage = () => {
  return (
    <div id="website-container">
      <Landing />
      <Subjects />
    </div>
  );
}

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <MainPage /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;