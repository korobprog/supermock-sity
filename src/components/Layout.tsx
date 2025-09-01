import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
