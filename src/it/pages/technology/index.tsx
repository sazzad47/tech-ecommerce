import React from "react";
import Wave from "../../components/wave";
import { Typography } from "@mui/material";
import { backendTechnos, designTechnos, technos } from "src/it/constants";

const Technology = () => {
  return (
    <div className="flex flex-col relative pb-[5rem]">
      <Wave />
      <div className="w-full px-[1rem] md:px-[5rem] flex flex-col gap-5 items-center">
        <div className="w-full text-center text-gray-900 my-[3rem]">
          <div className="eleven">
            <h1>Our Technologies</h1>
          </div>
          <Typography className="mt-[7rem] sm:mt-[4rem]">
            Explore captivating user interfaces, powerful data processing, and
            seamless design tools that power the modern web. Join us on this
            enlightening journey into the heart of digital innovation.
          </Typography>
        </div>

        <div className="flex flex-col gap-5">
          <Typography className="text-2xl text-gray-600 font-bold">
            {" "}
            Frontend Technologies{" "}
          </Typography>
        </div>
        <div className="flex flex-wrap gap-4">
          {technos.map((tech, index) => (
             <div className="relative w-[30vw] lg:w-[15vw] h-[15vh] mx-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
             <div className="p-3 cursor-pointer h-full w-full flex flex-col gap-5 items-center justify-center bg-gray-200">
              <tech.icon className="text-4xl text-fuchsia-900"/>
               <h1 className="text-fuchsia-900 font-bold text-sm sm:text-lg text-center whitespace-nowrap">{tech.name}</h1>
             </div>
           </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 mt-[5rem]">
          <Typography className="text-2xl text-gray-600 font-bold">
            {" "}
            Backend Technologies{" "}
          </Typography>
        </div>
        <div className="flex flex-wrap gap-4">
          {backendTechnos.map((tech, index) => (
             <div className="relative w-[30vw] lg:w-[15vw] h-[15vh] mx-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
             <div className="p-3 cursor-pointer h-full w-full flex flex-col gap-5 items-center justify-center bg-gray-200">
              <tech.icon className="text-4xl text-fuchsia-900"/>
               <h1 className="text-fuchsia-900 font-bold text-sm sm:text-lg text-center whitespace-nowrap">{tech.name}</h1>
             </div>
           </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 mt-[5rem]">
          <Typography className="text-2xl text-gray-600 font-bold">
            {" "}
            Design Technologies{" "}
          </Typography>
        </div>
        <div className="flex flex-wrap gap-4">
          {designTechnos.map((tech, index) => (
             <div className="relative w-[30vw] lg:w-[15vw] h-[15vh] mx-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
             <div className="p-3 cursor-pointer h-full w-full flex flex-col gap-5 items-center justify-center bg-gray-200">
              <tech.icon className="text-4xl text-fuchsia-900"/>
               <h1 className="text-fuchsia-900 font-bold text-sm sm:text-lg text-center whitespace-nowrap">{tech.name}</h1>
             </div>
           </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
