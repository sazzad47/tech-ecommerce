import styles from "../../../style";
import { causes } from "../../../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../../../components/utils/motion";
import Button, { PrimaryButton } from "../../../components/Button";
import { Link } from "react-router-dom";

const Causes = ({ title }: { title: string }) => {
  return (
    <>
      <div className="text-secondaryTheme">
        <div
          className={`w-full flex justify-between items-center md:flex-row flex-col mb-6 relative z-[1]`}
        >
          <h2 className={styles.heading2}>{title}</h2>
        </div>
        <div className="min-w-full overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {causes.map((project, index) => (
              <TemplateCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Causes;

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
            <Link to="/causes/123"><PrimaryButton> View </PrimaryButton></Link>
            <Link to="/donate"><Button>Donate</Button></Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
