import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import GreenCar from "../../assets/green-car.png"
import "./Services.css"
const Services = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: {xs:"100%",lg:"70%"},
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ textAlign: "center",p:{xs:2,lg:0},fontSize:{xs:"1.7vmax",md:"1.4vmax"},fontWeight:400 }}>
          Our airport transport services include Sydney Metro, Blue Mountains,
          Penrith, Newcastle, Central Coast, Wollongong. We offer an affordable
          luxury option starting from $95 for the Sydney City, Eastern Suburbs,
          North Sydney and lower North Shore suburbs.
        </Typography>
        <Box sx={{borderRadius:"30px",border:"1px solid red",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",my:3,mx:1}}>
            <Box sx={{width:{xs:"100",md:"50%"},p:3,boxShadow:" rgba(0, 0, 0, 0.45) 25px 0px 20px -20px" }}>
                <img src={GreenCar} className="greenCar" />
            </Box>
            <Box sx={{width:{xs:"100",md:"50%"},p:{xs:2,md:5},fontWeight:400,fontFamily:"Gotham"}}>
                <Typography sx={{fontSize:{xs:"1.5vmax",md:"1.1vmax"}}}>We have access in domestic hire car pick up zone, so there is no need to walk too far! 
Northern beaches airport transport, Northern Beaches airport transfer, North Shore airport transport, Northern Suburbs Airport, Sydney Airport transport, Luxury Hire cars, Tesla Limousine Sydney, Limousine Northern 
beaches, Sydney North Shore Limousine, Eastern 
suburbs Limousine, Eastern suburbs airport pick up. </Typography>
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;