import React from "react";

type TechProps = {
  icon: any;
  name: string;
}
type TechCardProps = {
  tech: TechProps;
};

const TechCard: React.FC<TechCardProps> = ({ tech }) => {
  return (
    <div className="relative w-[30vw] lg:w-[15vw] h-[15vh] mx-5 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
      <div className="p-3 cursor-pointer h-full w-full flex flex-col gap-5 items-center justify-center bg-gray-200">
       <tech.icon className="text-4xl text-fuchsia-900"/>
        <h1 className="text-fuchsia-900 font-bold text-sm sm:text-lg text-center whitespace-nowrap">{tech.name}</h1>
      </div>
    </div>
  );
};

export default TechCard;
