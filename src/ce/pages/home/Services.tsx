import { services } from "../../constants";
import { Link } from "react-router-dom";

type ServiceProps = {
  title: string;
  icon: React.ElementType;
  description: string;
  link: string;
};

type ServiceCardProps = {
  service: ServiceProps;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
  <div className="w-full p-[1px] rounded-[5px]">
    <Link to={`${service.link}`}>
      <div
        data-tilt-options={JSON.stringify({
          max: 45,
          scale: 1,
          speed: 450,
        })}
        className="bg-gray-600 rounded-[5px] p-5 text-center min-h-[280px] flex justify-center gap-3 items-center flex-col"
      >
        <service.icon className="text-yellow-600 text-5xl" />
        <h3 className="text-yellow-400 text-[20px] font-bold text-center p-0">
          {service.title}
        </h3>
        <p className="p-0 text-xl text-white"> {service.description} </p>
      </div>
    </Link>
  </div>
);

const Services: React.FC = () => {
  return (
    <>
      <div className="p-[2rem] sm:p-[5rem] w-full flex flex-col justify-center items-center relative z-[1]">
        <div>
          <div className="one mb-[3rem]">
            <h1 className="text-2xl sm:text-4xl">Service Overview</h1>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-7">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
