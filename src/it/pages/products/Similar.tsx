import { Link } from "react-router-dom";
import Button, { PrimaryButton } from "../../components/Button";
import styles from "../../style";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/utils/motion";
import { projects } from "../../constants";

const Similar = () => {
  return (
    <div className="text-secondaryTheme">
      <h3 className={`${styles.heading2}`}>Similar Templates</h3>
      <div className="min-w-full overflow-x-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <TemplateCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Similar;

interface TemplateCardProps {
  index: number;
  name: string;
  description: string;
  image: string;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
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
          <Link to="/it/products/123">
            <PrimaryButton styles=""> View details </PrimaryButton>
          </Link>
          <Link to="/it/checkout">
            <Button styles="">Buy Now</Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
