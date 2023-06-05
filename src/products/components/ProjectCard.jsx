import { motion } from "framer-motion";
import { fadeIn } from "./utils/motion";
import Button, { PrimaryButton } from "./Button";

export const ProjectCard = ({ index, name, description, image }) => {
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
          <PrimaryButton> View details </PrimaryButton>
          <Button>Buy Now</Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
