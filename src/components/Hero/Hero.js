import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, my name's <br />
        Luca Liebenberg
      </SectionTitle>
      <SectionText>
        An interaction designer and developer, who is constantly learning new
        frontend and blockchain technologies to grow as a Fullstack Javascript
        and Blockchain developer.
      </SectionText>
      <Button
        onClick={() =>
          window.open("https://i.ibb.co/rw6jCf6/resume.png", "_blank")
        }
      >
        View Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
