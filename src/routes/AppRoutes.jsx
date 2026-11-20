import { Routes, Route } from "react-router-dom";


import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Properties from "../pages/Properties/Properties";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login/Login";
import Signup from "../pages/Sign-up/Signup";
import NotFound from "../pages/Not-Found/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
          {/* Public website routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="properties/:id" element={<PropertyDetails />}/>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>

         {/* Authentication Routes */}
            <Route element={<AuthLayout />}>
                <Route path="login"  element={<Login />}/>
                 <Route path="signup" element={<Signup />}/>
            </Route>

             {/* Not Found */}
            <Route path="*" element={<NotFound />} />            

    </Routes>
  );
};

export default AppRoutes;