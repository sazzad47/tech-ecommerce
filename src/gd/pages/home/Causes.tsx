import styles from "../../style";
import { causes } from "../../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../components/utils/motion";
import Button, { PrimaryButton } from "../../components/Button";

interface Project {
  index: number;
  name: string;
  description: string;
  image: string;
}

const PostCard: React.FC<Project> = ({ index, name, description, image }) => {
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
           
            <p className="mt-2 text-secondaryTheme text-[14px]">
              {description}
            </p>
         

          <div className="mt-4 flex justify-between items-center">
            <PrimaryButton> View </PrimaryButton>
            <Button>Donate</Button>
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
          <h2 className={styles.heading2}>Popular Causes</h2>
        </div>
      </motion.div>

      <div className="mt-10 w-full grid grid-cols-1 sm:grid-cols-3 gap-7">
        {causes.map((project, index) => (
          <PostCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default Designs;
