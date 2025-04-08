import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      {/* {showCookieBanner && (
        <CookieBanner
          onAccept={handleAcceptCookies}
          onReject={handleRejectCookies}
        />
      )} */}
    </div>
  );
};

export default Layout;
