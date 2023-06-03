import styled from "styled-components";
import { motion } from "framer-motion";
import SkillsSlider from "./SkillsSlider";
import styles from "../style";
import { fromDown, fromUp } from "../utils/Animations";

function Designs() {
  return (
    <Main id="Designs">
      <div className="w-full flex justify-between items-center md:flex-row flex-col mb-6 relative z-[1]">
        <motion.h2
          variants={fromDown}
          transition={{ duration: 1 }}
          className={styles.heading2}
        >
          Featured Designs
        </motion.h2>
        <motion.div
          variants={fromUp}
          transition={{ duration: 1 }}
          className="w-full flex justify-start md:mt-0 mt-6"
        >
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            It can be overwhelming to choose the right tech solution for your
            company, but with our featured products, you can find the perfect
            fit.
          </p>
        </motion.div>
      </div>

      <div className="w-full">
        <SkillsSlider />
      </div>
    </Main>
  );
}

export default Designs

const Main = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;

  .top {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}`
