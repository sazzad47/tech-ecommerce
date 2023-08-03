import { Typography } from "@mui/material";
import React from "react";
import styles from "src/gd/style";
import {CgOrganisation} from "react-icons/cg";
import {VscOrganization} from "react-icons/vsc";
import {IoIosBusiness} from "react-icons/io";
import {GiBulletImpacts} from 'react-icons/gi';

const HowWorks = () => {
  return (
    <div className="w-full flex flex-col text-center mt-10">
      <div>
        <h2 className={styles.heading2}> How It Works</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        <div
          style={{ borderBottom: "2px solid white" }}
          className="w-full auto p-5 flex flex-col gap-5 bg-black-gradient items-center"
        >
          <CgOrganisation className="text-white text-6xl" />
          <Typography className="text-xl font-bold text-white">
            Nonprofits
          </Typography>
          <Typography variant="body1" className="text-white text-center">
            Find and apply for donations to support your cause.
          </Typography>
        </div>
        <div
          style={{ borderBottom: "2px solid white" }}
          className="w-full auto p-5 flex flex-col gap-5 bg-black-gradient items-center"
        >
          <VscOrganization className="text-white text-6xl" />
          <Typography className="text-xl font-bold text-white">
            Donors
          </Typography>
          <Typography variant="body1" className="text-white text-center">
            Browse through verified nonprofits and donate to their projects.
          </Typography>
        </div>
        <div
          style={{ borderBottom: "2px solid white" }}
          className="w-full auto p-5 flex flex-col gap-5 bg-black-gradient items-center"
        >
          <IoIosBusiness className="text-white text-6xl" />
          <Typography className="text-xl font-bold text-white">
            Companies
          </Typography>
          <Typography variant="body1" className="text-white text-center">
            Corporate partners can contribute to causes and make a difference.
          </Typography>
        </div>
        <div
          style={{ borderBottom: "2px solid white" }}
          className="w-full auto p-5 flex flex-col gap-5 bg-black-gradient items-center"
        >
          <GiBulletImpacts className="text-white text-6xl" />
          <Typography className="text-xl font-bold text-white">
            Our Impact
          </Typography>
          <Typography variant="body1" className="text-white text-center">
            See how collective efforts are driving positive changes.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
