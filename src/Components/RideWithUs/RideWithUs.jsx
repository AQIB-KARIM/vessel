import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Seats from "../../assets/small.png";
import Seats2 from "../../assets/Seats.png";
import "./RideWithUs.css";
import Line from "../../assets/Line.png";
import { HorizontalRule } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const RideWithUs = () => {
  const navigate = useNavigate()
  return (
    <Box sx={{ position: "relative", mt: "8vmax" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Paper
        className="banner"
          sx={{
            borderRadius: "20px",
            borderTop: "10px solid red",
            py: 2,
            px: 3,
            margin: "3vmax 0",
            boxShadow: "5px 15px 5px 0px rgba(0,0,0,0.075)",
            position: { xs: "relative", md: "absolute" },
            top: { xs: "0", md: "-250px", lg: "-350px" },
            width: "80%",
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
              AIRPORT TRANSFER ONE WAY
            </Typography>

            <Typography className="bannerText">
              CBD $95- Eastern suburbs $95- Lower north shore $95 -North Shore
              125$- Upper North Shore $165 -Lower Northern Beaches $115- Middle
              Northern Beaaches $135- Upper Northern beaches /Terrey Hills $185
            </Typography>
            <Typography className="bannerText">
              Inner west $105 – Lower Northern Suburbs $120 – Northern suburbs
              $135- Parramatta $165 – Hills district $185- Central Coast $335 –
              Newcastle $495 – Penrith $195 – Blue Mountains $365 – Shire $175 –
              Cambelltown $195 – Southern highlands $365 – Wollongong $385{" "}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
            <div className="line"></div>
              <Typography
                sx={{
                  color: "#e90236",
                  fontWeight: 600,
                  fontSize: { xs: "2vmax", md: "1.5vmax" },
                  textAlign:"center"
                }}
              >
                Please enquire for any special quotes.{" "}
              </Typography>
              <div className="line"></div>
            </Box>
          </Box>
        </Paper>
      </Box>
      <Box sx={{display:"flex",justifyContent:"center"}}>

      <Box sx={{width:"80%"}}>
        <Box sx={{ mt: "10vmax", mb: "3vmax" }}>
          <Grid container>
            <Grid item xs={12} md={5} zIndex="5000">
              <Box sx={{ display: "flex", alignItems: "center",pt:{xs:"2vmax",md:"1.5vmax"} }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "3.7vmax", md: "2.4vmax" },
                  }}
                >
                  <span style={{ color: "#e90236",fontWeight:"400" }}>WHY</span> RIDE WITH US
                </Typography>
              </Box>
              <Box sx={{display:"flex",textAlign:"left"}}>
                
              <HorizontalRule sx={{ fontSize: "50px", color: "red",mt:2 }} />
                  <Box>
                  <Typography className="content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 
              </Typography>
              <Typography className="content">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </Typography>
              <Button
               className="book_now"
                sx={{
                  background: "#e90236",
                  color: "white",
                  padding: "10px 30px",
                  my: 3,
                }}
                onClick={()=>navigate("/booking")}
              >
                BOOK NOW
              </Button>
                  </Box>
              </Box>
              
              <img src={Seats} className="smallImg" />
            </Grid>
            <Grid item xs={12} md={7} justifyContent="flex-end">
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <img src={Seats2} className="LargeImg" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      </Box>

    </Box>
  );
};

export default RideWithUs;