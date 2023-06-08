import React from "react";
import home from "../../images/home.png";
import { PrimaryButton } from "../../components/Button";
import styles from "../../style";

const WhyUs = () => {
  return (
    <div className="text-secondaryTheme mt-10 bg-black-gradient flex gap-2 w-full h-[50vh] rounded-2xl p-5">
      <div className="w-1/2 h-full relative">
        <img src={home} alt="Home" className="absolute w-full h-full" />
      </div>
      <div className="w-1/2 flex flex-col items-start justify-between">
        <h3 className={`${styles.heading2}`}>Why Choose Us</h3>
        <p>
          We combine extensive expertise in structural engineering with a proven
          track record of delivering innovative and cost-effective solutions
          that prioritize safety and sustainability, ensuring the successful
          completion of your project.
        </p>
        <div>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;