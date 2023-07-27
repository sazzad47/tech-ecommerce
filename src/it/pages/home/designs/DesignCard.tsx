import React from "react";

type DesignCardProps = {
  img: string;
  name: string;
};

const DesignCard: React.FC<DesignCardProps> = ({ img, name }) => {
  return (
    <div className="relative w-[50vw] sm:w-[40vw] lg:w-[22vw] h-[30vh] mx-5">
      <img src={img} alt="project" className="absolute w-full h-full" />
      <div className="p-4 cursor-pointer details absolute top-[-100%] left-0 h-full w-full flex flex-col items-center justify-center bg-[#b004b0b7]">
        <h1 className="text-secondaryTheme font-bold text-3xl text-center">{name}</h1>
      </div>
    </div>
  );
};

export default DesignCard;
