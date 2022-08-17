import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import "../MainSection/mainSection.css"
import Logo from "../../assets/logo.png";
import { Menu, PinDrop } from "@mui/icons-material";
import Monogram from "../../assets/monogram.png";
import Pricing from "../../assets/pricing.png";
import BookingForm from "../BookingForm/BookingForm";
import { useEffect } from "react";
import Sidebar from "../Drawer/Drawer";

const InnerMainSection = () => {
  const [bookingForm, setBookingForm] = useState(true);
const [rideForm, setRideForm] = useState(false);
const [offset, setOffset] = useState(window.screen.width);
const [drawerOpen, setDrawerOpen] = useState({ right: false });
useEffect(() => {
  window.addEventListener("resize", function () {
    let offset = window.screen.availWidth;
    setOffset(offset);
  });
}, [window]);

return (
  <Box className="innerMainSection">
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <img src={Logo} className="logo" />
      </Box>
      {offset >= 900 ? (
        <>
          <Box className="NavBar">
            <Box
              style={{
                display: "flex",
                width: "65%",
                justifyContent: "space-between",
              }}
            >
              <Typography className="NavBarLinks"  >AIRPORT</Typography>
              <Typography className="NavBarLinks" >BUSINESS</Typography>
              <Typography className="NavBarLinks" >WEDDINGS</Typography>
              <Typography className="NavBarLinks" >DINING</Typography>
              <Typography className="NavBarLinks" >FUNCTIONS</Typography>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <IconButton>
            <Menu
              sx={{
                background: "white",
                color: "#231F60",
                fontSize: "40px",
                mt: -2,
                borderRadius: "15px",
              }}
              onClick={() => setDrawerOpen({ right: !drawerOpen.right })}
            />
          </IconButton>
        </>
      )}
    </Box>
    <Sidebar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
  </Box>
)
}

export default InnerMainSection