import React from "react";
import home from "../../images/home.png";
import { PrimaryButton } from "../../components/Button";
import styles from "../../style";
import { Link } from "react-router-dom";

const WhyUs = () => {
  return (
    <div className="px-[2rem] sm:px-[5rem] w-full pt-[2rem]">
      <div className="text-secondaryTheme bg-gray-600 flex flex-col sm:flex-row gap-2 w-full rounded-2xl p-5 ">
        <div className="w-full sm:w-1/2 h-[12rem] sm:h-[20rem] relative">
          <img src={home} alt="Home" className="absolute w-full h-full" />
        </div>
        
        <div className="w-full sm:w-1/2 flex flex-col items-start justify-between">
          <h3 className={`${styles.heading2}`}>Why Choose Us</h3>
          <p>
            We combine extensive expertise in structural engineering with a
            proven track record of delivering innovative and cost-effective
            solutions that prioritize safety and sustainability, ensuring the
            successful completion of your project.
          </p>
          <div className="mt-5">
            <Link to="/ce/architecture" className="no-underline">
            <PrimaryButton>Get Started</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
