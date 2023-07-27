import React from "react";
import { PrimaryButton } from "src/it/components/Button";

type DesignCardProps = {
  img: string;
  name: string;
  description: string;
};

const DesignCard: React.FC<DesignCardProps> = ({ img, name, description }) => {
  return (
    <div className="mx-5 w-[80vw] sm:w-[50vw] lg:w-[30vw] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div className="bg-gray-200 p-5 rounded-2xl w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={img}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <div className="text-gray-900 font-bold text-[24px] flex justify-between items-center">
            <h3>{name}</h3>
            <h3>$1000</h3>
          </div>
          <p className="mt-2 text-gray-900 text-[14px] line-clamp-2">{description}</p>
        </div>

        <div className="mt-4 flex justify-center items-center">
          <PrimaryButton> Live Preview </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
