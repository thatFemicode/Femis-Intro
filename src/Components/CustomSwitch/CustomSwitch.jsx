import { Routes, useLocation } from "react-router";
import React, { useEffect, useState } from "react";
import TopBarProgress from "react-topbar-progress-indicator";
TopBarProgress.config({
  barColors: {
    0: "#f5f0ec",
    "1.0": "#f5f0ec",
  },
  shadowBlur: 5,
});
const CustomRoute = ({ children }) => {
  const [progress, setProgress] = useState(false);
  const [prevLoc, setPrevLoc] = useState("");
  const location = useLocation();
  useEffect(() => {
    setPrevLoc(location.pathname);
    setProgress(true);
    if (location.pathname === prevLoc) {
      setPrevLoc("");
      //thanks to ankit sahu
    }
  }, [location]);

  useEffect(() => {
    setProgress(false);
  }, [prevLoc]);
  return (
    <>
      {progress && <TopBarProgress />}
      <Routes>{children}</Routes>
    </>
  );
};

export default CustomRoute;
