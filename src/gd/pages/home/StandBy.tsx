import { Typography } from "@mui/material";
import React from "react";
import styles from "src/gd/style";
import { FaDonate } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

const StandBy = () => {
  return (
    <div className="w-full flex flex-col text-center mt-10">
      <div>
        <h2 className={styles.heading2}> Lets Stand by The Helpless People</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
        <div className="w-full auto p-5 flex flex-col gap-5 items-center">
          <FaDonate className="text-white text-6xl" />
          <Typography className="text-xl font-bold text-white">
            Donate
          </Typography>
          <button
            className="mb-2 inline-block rounded-full bg-green-700 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#16a34a] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Donate Today
          </button>
        </div>
        <div className="w-full auto p-5 flex flex-col gap-5 items-center">
          <FaHandsHelping className="text-white text-6xl" />
          <Typography className="text-xl font-bold text-white">
            Volunteer
          </Typography>
          <button
            className="mb-2 inline-block rounded-full bg-green-700 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#16a34a] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Be a Volunteer
          </button>
        </div>
        <div className="w-full auto p-5 flex flex-col gap-5 items-center">
          <GiReceiveMoney className="text-white text-6xl" />
          <Typography className="text-xl font-bold text-white">
            Fundraise
          </Typography>
          <button
            className="mb-2 inline-block rounded-full bg-green-700 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#16a34a] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Fundraise Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default StandBy;
