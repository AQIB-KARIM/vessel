import React, { useEffect } from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import InnerMainSection from '../../Components/innerMainSection/InnerMainSection'
import InnerRideWithUs from '../../Components/InnerRideWithUs/InnerRideWithUs'
import RideWithUs from '../../Components/RideWithUs/RideWithUs'
import SponsorsSlider from '../../Components/SponsorsSlider/SponsorsSlider'
import Services from '../../Components/Services/Services.jsx'
import { useLocation } from 'react-router-dom'

const SecondPage = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  return (
    <>
    <Header />
    <InnerMainSection />
    <InnerRideWithUs />
    <Services />
    <SponsorsSlider />
      <Footer />
    </>
  )
}

export default SecondPage