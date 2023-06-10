import { projects } from "../../../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../../../components/utils/motion";
import Button, { PrimaryButton } from "../../../components/Button";
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";

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
          <Link to="/ce/products/123">
            <PrimaryButton styles=""> View details </PrimaryButton>
          </Link>
          <Link to="/ce/checkout">
            <Button styles="">Buy Now</Button>
          </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Designs: React.FC = () => {
  return (
    <>
      <div className="mt-10 w-full grid grid-cols-1 sm:grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <DesignCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default Designs;
