import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    // Show cookie banner after a short delay for better UX
    const timer = setTimeout(() => {
      // Check if user has already accepted cookies
      const cookiesAccepted = localStorage.getItem("cookiesAccepted");
      if (!cookiesAccepted) {
        setShowCookieBanner(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowCookieBanner(false);
  };

  const handleRejectCookies = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setShowCookieBanner(false);
  };

  return (
    <div className="grid-bg min-h-screen">
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
