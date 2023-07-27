import React from "react";
import { Typography } from "@mui/material";

const Intro = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <h3 className="font-poppins capitalize font-semibold xs:text-[48px] text-[40px] text-fuchsia-900 text-start xs:leading-[76.8px] leading-[66.8px] w-full">
        {" "}
        What Clients Say about our company{" "}
      </h3>

      <Typography className="text-gray-700 text-lg mt-4">
        Read testimonials and feedback from our satisfied clients sharing their
        experiences and thoughts about our company's services and expertise.
      </Typography>
    </div>
  );
};

export default Intro;
