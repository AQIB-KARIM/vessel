import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MainSection from "../../Components/MainSection/MainSection";
import RideWithUs from "../../Components/RideWithUs/RideWithUs";
import SponsorsSlider from "../../Components/SponsorsSlider/SponsorsSlider";
import "../../Components/SponsorsSlider/SponsorsSlider.css";
const HomePage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Header />
      <MainSection />
      <RideWithUs />
      <SponsorsSlider />
      <Footer />
    </div>
  );
};

export default HomePage;
