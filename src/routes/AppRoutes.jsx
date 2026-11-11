import { Routes, Route } from "react-router-dom";


import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Properties from "../pages/Properties/Properties";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;