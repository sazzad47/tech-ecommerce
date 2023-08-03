import { Link } from "react-router-dom";
import Button, { PrimaryButton } from "../../components/Button";
import styles from "../../style";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/utils/motion";
import { causes } from "../../constants";

const Emergency = () => {
  return (
    <div className="text-secondaryTheme">
      <h3 className={`${styles.heading2}`}>Emergency Causes</h3>
      <div className="min-w-full overflow-x-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {causes.map((project, index) => (
            <TemplateCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Emergency;

interface TemplateCardProps {
  index: number;
  name: string;
  description: string;
  image: string;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  index,
  description,
  image,
}) => {
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
        <div className="p-5 text-secondaryTheme">
          <div className="progress-box ">
            <div className="progress-bar">
              <span className="progress-per bg-green-700 w-[45%]">
                <span className="tooltip">45%</span>
              </span>
            </div>
          </div>

          <div className="w-full flex justify-between">
            <span>Raised: $4500</span>
            <span>Goal: $10000</span>
          </div>

          <p className="mt-2 text-secondaryTheme text-[14px]">{description}</p>

          <div className="mt-4 flex justify-between items-center">
            <Link to="/gd/causes/123">
              <PrimaryButton> View </PrimaryButton>
            </Link>
            <Link to="/gd/donate">
              <Button>Donate</Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
