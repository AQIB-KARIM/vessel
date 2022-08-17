import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Seats from "../../assets/small.png";
import Seats2 from "../../assets/Seats.png";
import "../RideWithUs/RideWithUs.css";
import Car from "../../assets/innerCar.png";
import { HorizontalRule } from "@mui/icons-material";

const InnerRideWithUs = () => {
  return (
    <Box sx={{ position: "relative", mt: "0vmax" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Paper
        className="banner1"
          sx={{
            borderRadius: "20px",
            borderTop: "10px solid red",
            py: 2,
            px: 3,
            margin: "3vmax 0",
            boxShadow: "5px 15px 5px 0px rgba(0,0,0,0.075)",
            position: { xs: "relative", md: "absolute" },
            top: { xs: "-150px", md: "-230px", lg: "-350px" },
            width: "78%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" className="bannerHeading">
              WHY RIDE WITH US ?
            </Typography>

            <Typography className="bannerText" id='inner_ride_text' style={{textAlign:"center"}}>
              Vessel Luxury Rides should be your first choice in green tesla
              airport transport in the Sydney. We drive Tesla Model 3 Long Range
              Electric Cars. We can pick upto 4 peoples or for greateer comfort
              3 people. Our boot space is generous - it can fit up to 2 x large suitcase plus 2 x small cases, OP 4-5 <br/> small suitcase/ golfbags.
            </Typography>
          </Box>
        </Paper>
      </Box>
      <Box sx={{ mt: { xs: 0, md: "5vmax" }, mb: "7vmax" }}>
        <Grid container>
          <Grid item xs={12} md={7} zIndex="5000" className="innerLeftSection">
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  py: { xs: 2, md: 10 },
                  width: "60%",
                  display: "flex",
                  flexDirection: "column",
                  color: "white",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: {xs:"14px",md:"17px"},
                    pt: 3,
                    textTransform: "uppercase",
                    
                  }}
                >
                  We offer any pickup or drop off service from the <br/> Sydney
                  Domestic or Sydney <br/> nternational airports. We guarantee on time
                  ser- <br/> vice, if we are late by 5 mins or more, we will credit you!
                </Typography>
                <Divider
                  sx={{
                    zIndex: "1000",
                    my: 4,
                    border: "1px solid rgba(255,255,255,0.4)",
                  }}
                />
                <Typography sx={{ fontSize: {xs:"1.2vmax",md:"1.2vmax",lg:"0.9vmax"} }}>
                  We take pride in our high quality service and ultra clean
                  vehicles. The Teslas’ are cleaned and sterilised after every
                  ride. Available for clients, on every ride is bottled water,
                  hand sanitiser and tissues.
                </Typography>
                <Typography sx={{ fontSize: {xs:"1.2vmax",md:"1.2vmax",lg:"0.9vmax"}, py: 3 }}>
                  Your driver will always be well presented, courteous and
                  professional. To join the team, all drivers must successfully
                  complete some background checks (e.g. police and driving
                  history) prior to hire and all drivers are NSW Point-to-Point
                  Commission approved and licensed.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} justifyContent="flex-end">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <img src={Car} className="innerRightSection" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default InnerRideWithUs;