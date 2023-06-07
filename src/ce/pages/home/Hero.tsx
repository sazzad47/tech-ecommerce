import styles from "../../style";
import coverPhoto from "../../images/hero-banner.png";
import Button, { PrimaryButton } from "../../components/Button";
import { easeOut, motion } from "framer-motion";


const Hero = ({scrollToBottom}: {scrollToBottom: ()=> void}) => {
  return (
    <section
      id="home"
      className={`relative flex md:flex-row justify-center flex-col xl:pl-0 sm:pl-16 pl-6 `}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: easeOut }}
        className={`flex-1 mt-5 md:mt-0 ${styles.flexStart} flex-col`}
      >
        <div className="text-secondaryTheme text-xl flex flex-row items-center py-[6px] mb-2">
          Weclome to
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-gradient flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-secondaryTheme ss:leading-[100.8px] leading-[75px]">
            Civil Engineering
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[38px] text-[42px] text-secondaryTheme ss:leading-[80.8px] leading-[55px] w-full">
          Lets build the future together
        </h1>
        <div className="mt-10 flex items-center gap-10">
          <PrimaryButton styles=""> View Designs</PrimaryButton>
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
          className="w-[80%] h-[80%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
        
      </div>
      
    </section>
  );
};

export default Hero;
