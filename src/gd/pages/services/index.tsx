import styles from "../../style";
import { textVariant } from "../../components/utils/motion";
import { motion } from "framer-motion";
import { MdFastfood } from "react-icons/md";
import { MdWaterDrop } from "react-icons/md";
import { BiHealth } from "react-icons/bi";
import { MdCastForEducation } from "react-icons/md";
import { BsBuildingFillDash } from "react-icons/bs";
import { MdSocialDistance } from "react-icons/md";


const items = [
  {
    id: 1,
    icon: <MdFastfood />,
    title: "Healthy Food",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 2,
    icon: <MdWaterDrop />,
    title: "Pure Water",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 3,
    icon: <BiHealth />,
    title: "Health Care",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 4,
    icon: <MdCastForEducation />,
    title: "Primary Education",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 5,
    icon: <BsBuildingFillDash />,
    title: "Residence Facilities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 6,
    icon: <MdSocialDistance />,
    title: "Social Care",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];

const Services = () => {
 
  return (
    <div
      className={`${styles.paddingX} ${styles.paddingY} bg-primaryTheme text-secondaryTheme`}
    >
      <div className="">
      <motion.div
        variants={textVariant()}
        className="mt-10 w-full flex flex-col justify-center items-center relative z-[1]"
      >
        <div>
          <h2 className={styles.heading2}>Services</h2>
        </div>
      </motion.div>
      <div className="w-full mt-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item) => (
            <div key={item.id} className="w-full h-full text-secondaryTheme feature-card p-5 rounded-2xl">
              <div className="w-full h-full flex items-center gap-5">
                <div className="text-5xl">{item.icon}</div>
                <div className="h-full w-[2px] bg-secondaryTheme"></div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-bold text-xl">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    
    
    </div>
  );
};

export default Services;
