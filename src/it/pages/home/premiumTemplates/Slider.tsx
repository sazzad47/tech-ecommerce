import Marquee from "react-fast-marquee";
import TemplateCard from "./TemplalteCard";
import { projects } from "src/it/constants";

function Slider() {
  return (
    <div>
      <Marquee pauseOnHover={true} speed={100} gradient={false}>
        {projects.map((project, index) => (
          <TemplateCard
            key={index}
            img={project.image}
            name={project.name}
            description={project.description}
          />
        ))}
      </Marquee>
    </div>
  );
}

export default Slider;
