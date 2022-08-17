import { HorizontalRule } from "@mui/icons-material";
import { Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const BookingOptions = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", position: "relative" }}
      >
        <Paper
        className="banner1"
          sx={{
            borderRadius: "20px",
            borderTop: "10px solid red",
            py: 5,
            px: 3,
            margin: "3vmax 0",
            boxShadow: "5px 15px 5px 0px rgba(0,0,0,0.075)",
            position: { xs: "relative", md: "absolute" },
            top: { xs: "-150px", md: "-200px", lg: "-250px" },
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
            <Typography variant="h4" sx={{textAlign:"center",fontSize:{xs:"1.9vmax",md:"2vmax"},color:"#231f60",fontWeight:"600",px:1,py:2}}>
              Booking Procedure / Cancelation Policy, Refunds and Credits <br/> Terms and Conditions
            </Typography>
          </Box>
        </Paper>
      </Box>
      <Box
        sx={{
          mt: { xs: 0, md: "7vmax" },
          mb: "7vmax",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: {xs:"90%",md:"80%"} }}>
          <Typography variant="h4" sx={{fontWeight:"500",color:"#231f60",fontSize:{xs:"3.2vmax",md:"1.8vmax"}}}>Easy and simple booking options</Typography>
          <Typography variant="h6" sx={{py:5,fontWeight:500,fontSize:{xs:"2.5vmax",md:"1.1vmax",textTransform:"uppercase"}}}>
            For your ease, there are a few ways you can contact Vessel to make
            your enquiry or booking:-
          </Typography>
          <Typography sx={{mb:2}}><span style={{color:"#231f60",fontWeight:"700"}}>1.</span> Contact us through the booking portal</Typography>
          <Typography sx={{mb:2}}>
          <span style={{color:"#231f60",fontWeight:"700"}}>2.</span> Phone us on <span style={{color:"#231f60",fontWeight:"500"}}>1300 732 006 (during business hours)</span>
          </Typography>
          <Typography sx={{mb:2}}><span style={{color:"#231f60",fontWeight:"700"}}>3.</span> Email us on <span style={{color:"#231f60",fontweight:"700"}}>ride@vessel.net.au </span></Typography>
          <Typography sx={{mb:1}}>
            You can be assured we will promptly respond to all enquiries within
            the hour with availability and issue confirmation with an invoice
            for payment to secure your booking.{" "}
          </Typography>
          <Typography sx={{mb:1}}>
            Vessel’s rates are fixed for different zones to and from the
            airport, we also offer custom rides for special events, business and
            regional trips.
          </Typography>

          <Typography variant="h6" sx={{py:3,fontWeight:500,fontSize:{xs:"2.6vmax",md:"1.1vmax",textTransform:"uppercase"}}}>
            Our easy Cancellation Policy - straightforward refunds and credit
            policy
          </Typography>
          <Typography sx={{mb:1}}>
            Any bookings cancelled greater than 24 hours of the booking will be
            fully refunded. (NB. reverse banking transactions may take approx.
            2-5 working days to appear in bank account).
          </Typography>
          <Typography sx={{mb:1}}>
            Cancellations made within 24 hours of your booking, a credit note
            for the actual amount will be issued and can be used for a future
            booking.
          </Typography>
          <Typography sx={{mb:1}}>
            We understand air travel is not always on time or reliable. It is
            important that you contact your assigned driver if you aware of any
            flight delays or cancelled flights as soon as possible. In the event
            we are unable to accommodate the new pick-up time due to other
            client bookings, we will credit you for a future ride. (The trip
            must be of equal value)
          </Typography>
          <Typography vairant="h6" sx={{py:1,pt:3,color:"black",fontWeight:500,fontSize:{xs:"2.7vmax",md:"1.1vmax"}}}>WAITING TIME AT SYDNEY AIRPORT:</Typography>
          <Typography>
            The driver will wait up to 30 minutes after on time arrival for
            Domestic pickups and up to 1 hour after on time arrival for
            international pickups.{" "}
          </Typography>
          <Typography variant="h6" sx={{py:2,pt:3,fontSize:"1.1vmax",fontWeight:500}}>VESSEL ON TIME GUARANTEE</Typography>
          <Typography>
            We <span style={{color:"#231f60",fontWeight:"700"}}>guarantee</span> all of our pickups; if your assigned driver is more
            than 5 minutes late, your next ride will be free! It’s that simple!
            No ifs no buts! (The trip must be of equal value){" "}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default BookingOptions;