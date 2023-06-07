import React, { useState, ReactNode } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { textVariant } from "../../components/utils/motion";
import { motion } from "framer-motion";
import styles from "../../style";

const items = [
  { id: 1, title: "Happy Clients", number: 100 },
  { id: 2, title: "Projects Completed", number: 100 },
  { id: 3, title: "Seminars", number: 100 },
  { id: 4, title: "Reviews", number: 100 },
];
type Props = {
  children?: ReactNode;
  onEnter: () => any;
  onExit: () => any;
  className: string;
};
const Statistics: React.FC = () => {
  const [counterOn, setCounterOn] = useState<boolean>(false);
  const TriggerCounter = ScrollTrigger as unknown as React.FC<Props>;
  return (
    <>
    <motion.div
        variants={textVariant()}
        className="mt-10 w-full flex flex-col justify-center items-center relative z-[1]"
      >
        <div>
          <h2 className={styles.heading2}>Our Achievements</h2>
        </div>
      </motion.div>
      <div className="w-full mt-10">
        <TriggerCounter
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
          className="w-full"
        >
          <div
            className="w-full grid grid-cols-2 md:grid-cols-4 gap-2"
          >
            {items.map((item) => (
              <div
                key={item.id}          
                className="green-pink-gradient p-[1px] text-secondaryTheme"     
              >
                <div className="bg-black-gradient-2 counter_item_global min-h-[6rem] p-2 flex flex-col items-center justify-center ">
                <p className="mt-2 text-sm whitespace-nowrap">
                  {item.title}
                </p>
                <h3>
                  {counterOn ? (
                    <CountUp
                      start={0}
                      end={item.number}
                      duration={2}
                      delay={0}
                    />
                  ) : (
                    item.number
                  )}
                  +
                </h3>
                </div>
              </div>
            ))}
          </div>
        </TriggerCounter>
      </div>
    </>
  );
};

export default Statistics;