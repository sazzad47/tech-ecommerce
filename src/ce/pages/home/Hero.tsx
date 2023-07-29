import cecoverphoto from "../../assets/cecoverphoto.png";
import { PrimaryButton, SecondaryButton } from "../../components/Button";
import cecoverbg from "../../assets/cecoverbg.jpg";

const Hero = ({ scrollToBottom }: { scrollToBottom: () => void }) => {
  return (
    <section style={{backgroundImage: `url(${cecoverbg})`, backgroundPosition: "50%", height: "500px" }} className="overflow-hidden bg-cover bg-no-repeat">
      <div className="px-6 h-full py-12 text-center md:px-12 lg:py-24 lg:text-left backdrop-brightness-75 bg-white/70">
        <div className="w-100 mx-auto text-neutral-800 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div
              className="mt-12 lg:mt-0"
              style={{
                zIndex: 10,
              }}
            >
              <h1 className="mt-0 mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-fuchsia-800">
                Building Dreams
                <br />
                <span className="text-pink-700">into Reality</span>
              </h1>
              <p className="text-gray-900 mb-5">
                We are a dedicated team of
                skilled professionals, committed to delivering excellence in
                every project we undertake.
              </p>
              <PrimaryButton>Get Started</PrimaryButton>
              <SecondaryButton>Learn More</SecondaryButton>
            </div>
            <div className="relative mb-12 lg:mb-0 hidden md:block">
              <img src={cecoverphoto} alt="" className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
