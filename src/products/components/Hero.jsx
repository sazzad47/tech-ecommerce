import styles from "../style";
import { coverPhoto } from "../assets";
import GetStarted from "./GetStarted";
import Button from "./Button";
import { socialMedia } from "../constants";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} xl:px-0 sm:px-16 px-6`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col `}
      >
        <div className="text-white text-xl flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          Hi there, my name is
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-gradient flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Sazzad Hossen
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[38px] text-[42px] text-white ss:leading-[80.8px] leading-[55px] w-full">
          I am a software developer
        </h1>
      
        <Button styles={`mt-10`}> View Projects</Button>
      </div>

      <div
        className={`hero-cover-photo flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={coverPhoto}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
        <div className="hero-social-links flex flex-col gap-4 items-center justify-end">
          
        {socialMedia.map((social, index) => (
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

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
