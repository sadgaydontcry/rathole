import React, { useEffect, useState } from "react";
import { Footer, About, Gallery, Header , Divider } from "./components";
import AdminLogin from "./components/AdminLogin/AdminLogin";  // Add this import

const App: React.FC = () => {
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeInPoint = 200;
      const maxScroll = 800;

      let opacity = 0;
      if (scrollY > fadeInPoint) {
        opacity = (scrollY - fadeInPoint) / (maxScroll - fadeInPoint);
        const opacityCap = 0.85;
        opacity = Math.min(opacity, opacityCap);
      }

      setBgOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`,
          transition: "background-color 0.4s ease",
        }}
      ></div>

      <div className="relative z-10">
        <Header />
        <main className="mt-18">

          <Gallery />
          <Divider />
          <About />
          <AdminLogin />          {/* Add this line */}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;