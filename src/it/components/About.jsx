import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn } from "./utils/motion";
import styles from "../style";


const ServiceCard = ({ index, service }) => (
  <Tilt className="w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[5px]"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-gray-200 rounded-[5px] p-5 text-center min-h-[280px] flex justify-center gap-3 items-center flex-col"
      >
        <service.icon className="text-fuchsia-900 text-5xl" />
        <h3 className="text-gray-900 text-[20px] font-bold text-center p-0">
          {service.title}
        </h3>
        <p className="p-0 text-xl"> {service.shortDescription} </p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="bg-white container min-w-full text-gray-800 py-[4rem]">
      <div className="w-full flex flex-col justify-between items-center mb-6 relative z-[1]">
        <h2 className={styles.heading2}>Service Overview</h2>
        <p
          className={`${styles.paragraph} text-center text-pink-700 max-w-[450px]`}
        >
          Discover the Comprehensive Range of Our Services
        </p>
      </div>
      <div className="mt-10 w-full grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default About;
