import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../components/utils/motion";
import styles from "../../style";
import { services } from "../../constants";

interface Service {
  index: number;
  title: string;
  icon: React.ReactNode;
}


const ServiceCard: React.FC<Service> = ({ index, title, icon }) => (
  <Tilt className=" w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px]"
    >
      <div
        className="text-secondaryTheme bg-black-gradient-2 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <div className="text-3xl">

       {icon}
        </div>

        <h3 className="text-secondaryTheme text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About: React.FC = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="mt-10 w-full flex flex-col justify-center items-center mb-6 relative z-[1]"
      >
        <div>
          <h2 className={styles.heading2}>Service Overview</h2>
        </div>
      </motion.div>

      <div className="mt-10 w-full grid grid-cols-1 sm:grid-cols-3 gap-7">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
