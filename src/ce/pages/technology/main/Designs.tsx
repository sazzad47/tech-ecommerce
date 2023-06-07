import styles from "../../../style";
import { projects } from "../../../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../../../components/utils/motion";
import Button, { PrimaryButton } from "../../../components/Button";
import { Link } from "react-router-dom";

const Designs = () => {
  return (
    <>
      <div className="text-secondaryTheme">
        <div
          className={`w-full flex justify-between items-center md:flex-row flex-col mb-6 relative z-[1]`}
        >
          <h2 className={styles.heading2}>Designs</h2>
        </div>
        <div className="min-w-full overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {projects.map((project, index) => (
              <DesignCard key={`project-${index}`} index={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Designs;

interface DesignCardProps {
  index: number;
  name: string;
  description: string;
  image: string;
}

export const DesignCard: React.FC<DesignCardProps> = ({
  index,
  name,
  description,
  image,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-black-gradient p-5 rounded-2xl w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <div className="text-secondaryTheme font-bold text-[24px] flex justify-between items-center">
            <h3>{name}</h3>
            <h3>$1000</h3>
          </div>
          <p className="mt-2 text-secondaryTheme text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <Link to="/products/123">
            <PrimaryButton styles=""> View details </PrimaryButton>
          </Link>
          <Link to="/checkout">
            <Button styles="">Buy Now</Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
