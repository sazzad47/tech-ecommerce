import { services } from "../../constants";

const ServiceCard = ({ title, icon }) => (
  <div className="xs:w-[250px] w-full">
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px] ">
      <div className="bg-black-gradient-2 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-secondaryTheme text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </div>
);

const Services = () => {
  return (
    <>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default Services;
