import { PrimaryButton, SecondaryButton } from "../../components/Button";
import gdCoverBg from "../../assets/gdcoverbg.jpg"
import gdCoverPhoto from "../../assets/gdcoverphoto.png";


const Hero = ({scrollToBottom}: {scrollToBottom: ()=> void}) => {
  return (
    <section style={{backgroundImage: `url(${gdCoverBg})`, backgroundPosition: "50%", height: "500px" }} className="overflow-hidden bg-cover bg-no-repeat">
      <div className="px-6 h-full py-12 text-center md:px-12 lg:py-24 lg:text-left backdrop-blur-lg">
        <div className="w-100 mx-auto text-neutral-800 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div
              className="mt-12 lg:mt-0"
              style={{
                zIndex: 10,
              }}
            >
              <h1 className="mt-0 mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-white">
              Join Hands for a 
                <br />
                <span className="text-white">Better Tomorrow</span>
              </h1>
              <p className="text-white mb-5">
              Welcome to our global donation website! Empower Change. Make a Difference. Support Our Cause. Donate Today!
              </p>
              <PrimaryButton>Get Started</PrimaryButton>
              <SecondaryButton>Learn More</SecondaryButton>
            </div>
            <div className="relative mb-12 lg:mb-0 hidden md:block">
              <img src={gdCoverPhoto} alt="" className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
