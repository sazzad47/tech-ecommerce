import React from "react";
import Wave from "../../components/wave";
import { Typography } from "@mui/material";
import { services } from "src/it/constants";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="flex flex-col relative pb-[5rem]">
      <Wave />
      <div className="w-full px-[1rem] md:px-[5rem] flex flex-col gap-5 items-center">
        <div className="w-full text-center text-gray-900 my-[3rem]">
          <div className="eleven">
            <h1>Our Services</h1>
          </div>
          <Typography className="mt-10">
            Choose Our Services as your trusted partner in the dynamic digital
            landscape, and let us guide you towards achieving your goals and
            beyond. Together, we'll create a captivating digital experience that
            leaves a lasting impression on your audience and propels your
            business towards new heights.
          </Typography>
        </div>

        <div className="mt-10 w-full grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {services.map((service, index) => (
            <Link key={index} to={`${service.link}`}>
              <div className="bg-gray-200 rounded-[5px] p-5 text-center min-h-[280px] flex justify-center gap-3 items-center flex-col">
                <service.icon className="text-fuchsia-900 text-5xl" />
                <h3 className="text-pink-700 text-[20px] font-bold text-center p-0">
                  {service.title}
                </h3>
                <p className="p-0 text-xl"> {service.shortDescription} </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
