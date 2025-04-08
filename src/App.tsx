import { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Lenis from "lenis";
// import HomePage from './pages/HomePage';
// import WorkPage from './pages/WorkPage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
// import NotFoundPage from './pages/NotFoundPage';
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";

function App() {
  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/connect" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
