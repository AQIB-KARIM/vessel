import { CalendarMonth, PeopleAlt, PinDropOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { FaPlane } from "react-icons/fa";
import { IoMdAirplane } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
  const [value, setValue] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Box sx={{ p: 2 }}>
      <Box
        sx={{
          width: "100%",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 2,
        }}
      >
        <Typography sx={{ fontSize: "25px", fontWeight: "300" }}>BOOK</Typography>
        <Typography variant="h6" sx={{ fontWeight: "600" }}>PRIVATE CAR HIRE NOW</Typography>
      </Box>
      <Box className="fieldBox">
        <Typography className="fieldName">PICK UP</Typography>
        <Box sx={{ position: "relative", borderRadius: "none" }}>
          <TextField
            fullWidth
            sx={{ height: "20px", fontWeight: "500" }}
            placeholder="Pick up Location"
          />
          <IoMdAirplane
            style={{
              color: "grey",
              position: "absolute",
              left: "7px",
              top: "6px",
              fontSize: "20px"
            }}
          />
        </Box>
      </Box>
      <Box className="fieldBox">
        <Typography className="fieldName">DROP OFF</Typography>
        <Box sx={{ position: "relative" }}>
          <TextField
            fullWidth
            sx={{ height: "20px", color: "grey", fontSize: "18px" }}
            placeholder="Drop off Location"
          />
          <MdLocationPin
            style={{
              color: "grey",
              position: "absolute",
              left: "7px",
              top: "8px",
              fontSize: "20px"
            }}
          />
        </Box>
      </Box>
      <Box >
        <Typography className="fieldName" sx={{ paddingTop: "15px" }}>PICK UP DATE</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ position: "relative", width: "45%",height:"100%" }}>
            <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
            <CalendarMonth sx={{position:"absolute",left:"5px",top:"7px",color:"grey !important"}}/>
          </Box>
          <Button className="add_returned" variant="contained" fullWidth sx={{ backgroundColor: "white", width: "45%",padding:"4px 0px" }}>Add Return</Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: "50%" }}>
          <Box className="fieldBox">
            <Box sx={{ position: "relative" }}>
              <TextField
                fullWidth
                sx={{ height: "20px", mt: 2, width: "98%" }}
                placeholder="Amount of Passangers"
              />
              <PeopleAlt
                style={{
                  color: "grey",
                  position: "absolute",
                  left: "10px",
                  top: "25px",
                  fontSize: "20px"
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: "45%" }}>
          <Box className="fieldBox">
            <Box sx={{ position: "relative" }}>
              <TextField
                sx={{ height: "20px", mt: 2, width: "100%" }}
                placeholder="Amount of Bags"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ py: 3 }}>
        <Button className="enquiry" variant="contained" fullWidth sx={{ background: "#e90236" }}>
          Enquiry
        </Button>
      </Box>
    </Box>
  );
};

export default BookingForm;