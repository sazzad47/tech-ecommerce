import banner from "../assets/itbanner.png";
import { PrimaryButton, SecondaryButton } from "./Button";

const sectionStyle = {
  backgroundColor: "#f8f8f8", // Whitish background color
  backgroundImage: "",
};

const Hero = ({ scrollToBottom }: { scrollToBottom: () => void }) => {
  return (
    <section
      className="background-radial-gradient overflow-hidden"
      style={sectionStyle}
    >
      <div className="px-6 py-12 text-center md:px-12 lg:py-24 lg:text-left">
        <div className="w-100 mx-auto text-neutral-800 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div
              className="mt-12 lg:mt-0"
              style={{
                zIndex: 10,
              }}
            >
              <h1 className="mt-0 mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-fuchsia-800">
                Empowering Your
                <br />
                <span className="text-pink-700">Digital Future</span>
              </h1>
              <p className="text-gray-900 mb-5">
                Welcome to the Gateway of Innovation: Where IT Expertise Meets
                Boundless Possibilities. Explore cutting-edge solutions and
                revolutionize your digital landscape with our Information
                Technology services.
              </p>
              <PrimaryButton>Get Started</PrimaryButton>
              <SecondaryButton>Learn More</SecondaryButton>
            </div>
            <div className="relative mb-12 lg:mb-0">
              <img src={banner} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
