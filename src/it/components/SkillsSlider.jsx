import Marquee from "react-fast-marquee";
import styled from "styled-components";
import DesignCard from "./DesignCard";
import { design1, design2, design3, design4 } from "../assets";

function DesignSlider() {
  return (
    <Section>
      <Marquee pauseOnHover={true} speed={100} gradient={false}>
        <DesignCard img={design1} name="Brand Logo" />
        <DesignCard img={design2} name="Aesthetic Artwork" />
        <DesignCard img={design3} name="Business Logo" />
        <DesignCard img={design4} name="Artwork" />
      </Marquee>
    </Section>
  );
}

const Section = styled.div`
  /* background-color: green; */
  margin: 3rem 0;
  overflow: hidden;
  max-width: 100%;
  @media screen and (max-width: 640px) {
    width: 90vw;
  }
`;

export default DesignSlider;
