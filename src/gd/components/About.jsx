import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "./utils/motion";
import styles from "../style";


const About = () => {
  return (
    <>

      <motion.div variants={textVariant()} className="w-full flex flex-col justify-between items-center mb-6 relative z-[1]">
        <h2 className={styles.heading2}>Service Overview</h2>
        <div className="w-full flex justify-start md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            It can be overwhelming to choose the right tech solution for your
            company, but with our featured products, you can find the perfect fit.
          </p>
        </div>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
      
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
