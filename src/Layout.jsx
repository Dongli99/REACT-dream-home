import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="container flex-grow-1">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
