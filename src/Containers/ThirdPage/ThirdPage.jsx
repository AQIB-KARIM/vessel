import React, { useEffect } from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import InnerMainSection from '../../Components/innerMainSection/InnerMainSection'
import SponsorsSlider from '../../Components/SponsorsSlider/SponsorsSlider'
import BookingOptions from '../../Components/BookingOptions/BookingOptions.jsx'
import { useLocation } from 'react-router-dom'

const ThirdPage = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  return (
    <>
    <Header />
    <InnerMainSection />
    <BookingOptions />
    <SponsorsSlider />
    <Footer />
    </>
  )
}

export default ThirdPage