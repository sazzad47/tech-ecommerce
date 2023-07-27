import Marquee from "react-fast-marquee";
import TechCard from "./TechCard";
import { backendTechnos, designTechnos, technos } from "src/it/constants";

function Slider() {
  return (
    <div className="w-full flex flex-col gap-3">
      <div>
        <Marquee pauseOnHover={true} speed={100} gradient={false}>
          {technos.map((tech, index) => (
            <TechCard tech={tech} key={index} />
          ))}
        </Marquee>
      </div>
      <div>
        <Marquee pauseOnHover={true} speed={100} gradient={false}>
          {backendTechnos.map((tech, index) => (
            <TechCard tech={tech} key={index} />
          ))}
        </Marquee>
      </div>
      <div>
        <Marquee pauseOnHover={true} speed={100} gradient={false}>
          {designTechnos.map((tech, index) => (
            <TechCard tech={tech} key={index} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Slider;
