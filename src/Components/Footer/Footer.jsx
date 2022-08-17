import { Container, Divider, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./footer.css";
import Card1 from "../../assets/cards/01.png";
import Card2 from "../../assets/cards/02.png";
import Card3 from "../../assets/cards/03.png";
import Card4 from "../../assets/cards/04.png";
import Card5 from "../../assets/cards/05.png";
import Card6 from "../../assets/cards/06.png";
import FB from "../../assets/fb.png";
import Insta from "../../assets/Insta.png";
import Tiktok from "../../assets/Tiktok.png";
import { FacebookOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box className="footer">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: { xs: 5, md: 0 },
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontSize: { xs: "3.5vmax", md: "2.4vmax" }, fontWeight: 400 }}
          >
            CREDIT CARDS ACCEPTED
          </Typography>
          <Box
            sx={{
              width: { xs: "90%", md: "50%" },
              display: "flex",
              justifyContent: "space-between",
              mt: 8,
              mb: 5,
              p: 2,
              background: "white",
              boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
            }}
          >
            <img src={Card1} className="debitCard" />
            <img src={Card2} className="debitCard" />
            <img src={Card3} className="debitCard" />
            <img src={Card4} className="debitCard" />
            <img src={Card5} className="debitCard" />
            <img src={Card6} className="debitCard" />
          </Box>
          <Box
            sx={{
              color: "white",
              textAlign: "center",
              pt: { xs: 18, md: 10, lg: 2 },
            }}
          >
            <Typography variant="h2" sx={{fontWeight:"600"}}>VESSEL</Typography>
            <Typography sx={{fontWeight:"500"}}>LUXURY RIDES</Typography>
          </Box>
        </Box>
        <Divider
          sx={{ zIndex: "1000", borderColor: "#2f2f90", mt: 4 }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { sx: "100%", md: "80%" },
              display: "flex",
              justifyContent: "space-between",
              alignItems:"center",
              p: 2,

              gap: "8px",

              color: "white",
            }}
          >
            <Typography variant="h6" className="routeLinks" >
              AIRPORT TRANSFER
            </Typography>
            <Typography variant="h6" className="routeLinks">
              WEDDINGS
            </Typography>
            <Typography variant="h6" className="routeLinks">
              EVENTS
            </Typography>
            <Link to="/termsandconditions" style={{textDecoration:"none",color:"white"}}>
              <Typography variant="h6" className="routeLinks">
                TERMS & CONDITIONS
              </Typography>
            </Link>
            <Typography variant="h6" className="routeLinks">
              CONTACT US
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{ zIndex: "1000", borderColor: "#2f2f90" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
            pt: 3,
          }}
        >
          <Typography variant="h5" sx={{fontWeight:"500"}}>FOLLOW US ON</Typography>
          <Box sx={{marginTop:"20px"}}>
            <IconButton>
              <img className="socialBtn" src={FB} />
            </IconButton>
            <IconButton>
              <img className="socialBtn" src={Tiktok} />
            </IconButton>
            <IconButton>
              <img className="socialBtn" src={Insta} />
            </IconButton>
          </Box>
        </Box>
      </Container>
      <Divider
        sx={{ zIndex: "1000", borderColor: "#2f2f90", pt: 5 }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          py: 2,
        }}
      >
       &copy; 2022 Copyright. All rights reserved
      </Box>
    </Box>
  );
};

export default Footer;
