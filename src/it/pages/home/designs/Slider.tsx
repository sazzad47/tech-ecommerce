import Marquee from "react-fast-marquee";
import DesignCard from "./DesignCard";
import { design1, design2, design3, design4 } from "../../../assets";

function Slider() {
  return (
    <div>
      <Marquee pauseOnHover={true} speed={100} gradient={false}>
        <DesignCard img={design1} name="Brand Logo" />
        <DesignCard img={design2} name="Aesthetic Artwork" />
        <DesignCard img={design3} name="Business Logo" />
        <DesignCard img={design4} name="Artwork" />
      </Marquee>
    </div>
  );
}


export default Slider;
