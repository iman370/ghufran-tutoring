import React from "react";

import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

import Landing from "./components/Landing";
import Subjects from "./components/Subjects";
import Proof from "./components/Proof";
import ChildSafety from "./components/ChildSafety";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const MainPage = () => {
  return (
    <div id="website-container">
      <Landing />
      <Subjects />
      <Proof />
      <ChildSafety />
      <Pricing />
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