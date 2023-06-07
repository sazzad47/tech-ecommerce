import styles from "../../style";
import { projects } from "../../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../components/utils/motion";
import Button, { PrimaryButton } from "../../components/Button";
import { GiCheckMark } from "react-icons/gi";

interface Project {
  index: number;
  name: string;
  description: string;
  image: string;
}

const DesignCard: React.FC<Project> = ({ index, name, description, image }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-black-gradient rounded-2xl w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-se-2xl rounded-ss-2xl"
          />
        </div>
        <div className="p-5">
          <div className="">
            <div className="text-secondaryTheme font-bold text-[24px] flex justify-between items-center">
              <h3>{name}</h3>
              <h3>$1000</h3>
            </div>
            <p className="mt-2 text-secondaryTheme text-[14px]">
              {description}
            </p>
            <div className="text-secondaryTheme my-3">
              <div className="flex gap-3 items-center">
                <GiCheckMark /> 2 Bedrooms
              </div>
              <div className="flex gap-3 items-center">
                <GiCheckMark /> 2 Bathrooms
              </div>
              <div className="flex gap-3 items-center">
                <GiCheckMark /> 3450 Square Ft
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <PrimaryButton> View details </PrimaryButton>
            <Button>Buy Now</Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Designs: React.FC = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="mt-10 w-full flex flex-col justify-center items-center mb-6 relative z-[1]"
      >
        <div>
          <h2 className={styles.heading2}>Featured Designs</h2>
        </div>
      </motion.div>

      <div className="mt-10 w-full grid grid-cols-1 sm:grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <DesignCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default Designs;
