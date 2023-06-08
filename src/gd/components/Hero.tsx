import styles from "../style";
import { coverPhoto } from "../assets";
import Button, { PrimaryButton } from "./Button";
import { socialMedia } from "../constants";
import { easeOut, motion } from "framer-motion";

const Hero = ({scrollToBottom}: {scrollToBottom: ()=> void}) => {
  return (
    <section
      id="home"
      className={`relative flex md:flex-row justify-center flex-col xl:px-0 sm:px-16 px-6 `}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: easeOut }}
        className={`flex-1 mt-5 md:mt-0 ${styles.flexStart} flex-col`}
      >
        <div className="text-secondaryTheme text-xl flex flex-row items-center py-[6px] mb-2">
          Hi there, my name is
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-gradient flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-secondaryTheme ss:leading-[100.8px] leading-[75px]">
            Sazzad Hossen
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[38px] text-[42px] text-secondaryTheme ss:leading-[80.8px] leading-[55px] w-full">
          I am a software developer
        </h1>
        <div className="mt-10 flex items-center gap-10">
          <PrimaryButton styles=""> View Products</PrimaryButton>
          <Button styles=""> Order Now</Button>
        </div>
      </motion.div>

      <div
        className={`hero-cover-photo flex-1 hidden md:flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          src={coverPhoto}
          alt="cover-photo"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
        <div className="hero-social-links flex flex-col gap-4 items-center justify-end">
          {socialMedia.map((social) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer `}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
      <div onClick={scrollToBottom} className="cursor-pointer absolute bottom-[5rem] right-1/2 w-[35px] h-[64px] rounded-3xl border-4 border-secondaryTheme hidden md:flex justify-center items-start p-2">
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-3 h-3 rounded-full bg-secondaryTheme mb-1"
        />
      </div>
    </section>
  );
};

export default Hero;
