import { Box } from "@mui/material";
import React from "react";
import PassengerCard from "./PassengerCard";
import PersonApplyCard from "./PersonApplyCard";

const ConfirmBooking = () => {
  return (
    <div className="booking-pages">
      <div className="container">
        <Box sx={{ display: "flex" }}>
          <Box sx={{ maxWidth: "745px", flexGrow: 1 }}>
            <PassengerCard />
            <PersonApplyCard />
          </Box>
          <Box sx={{ width: "280px", marginLeft: "40px" }}>
            <h2>Price Details</h2>
            <Box
              sx={{ width: "100%", height: "100px", background: "#000" }}
            ></Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default ConfirmBooking;