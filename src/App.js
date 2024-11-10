import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./Components/Navbar/Navbar";
import AppRoutes from "./routing/AppRoutes";
import { DirectionProvider } from "./context/DirectionContext";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import { useMediaQuery } from '@mui/material';

const AppContent = () => {
  const { i18n } = useTranslation();
  const [direction, setDirection] = React.useState("ltr");

  useEffect(() => {
    const currentLanguage = i18n.language;
    const newDirection = currentLanguage === "ar" ? "rtl" : "ltr";
    setDirection(newDirection);
    document.documentElement.dir = newDirection;
    document.documentElement.lang = currentLanguage;
  }, [i18n.language]);

  return (
    <div className="App" style={{ direction }}>
      <Navbar />
      <ScrollToTop />
      <AppRoutes />
      <Footer />
    </div>
  );
};

const App = () => {
  const isMobile = useMediaQuery('(max-width:960px)');
  return (
  <DirectionProvider>
    <ToastContainer
      position={isMobile ? 'bottom-center' : 'bottom-right'}
      autoClose={5000}
    />
    <AppContent />
  </DirectionProvider>
)};

export default App;