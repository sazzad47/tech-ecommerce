import { Avatar, Typography } from "@mui/material";
import React from "react";
import { typesOfGrants } from "src/gd/constants";
import styles from "src/gd/style";

const TypeOfGrants = () => {
  return (
    <div className="w-full flex flex-col text-center mt-10">
      <div>
        <h2 className={styles.heading2}>Type of Grants</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-10">
        {typesOfGrants.map((grant) => (
          <div
            key={grant.id}
            className="w-full auto p-5 flex flex-col gap-5 items-center"
          >
            <Avatar className="p-5 w-[90px] h-[90px] bg-green-700">
              <grant.icon className="text-white w-full h-full" />{" "}
            </Avatar>
            <Typography className="text-xl font-bold text-white">
              {grant.title}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypeOfGrants;
