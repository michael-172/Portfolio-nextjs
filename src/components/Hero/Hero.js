import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row >
    <LeftSection>
      <SectionTitle> 
        Iam Michael, <br /> Welcome to <br /> My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Iam a junior frontend developer, have the passion to learn and <br/> increase my skills in this field,
        I'am a self learner, and a freelancer
      </SectionText>
      <Button>
        <a href="cv.pdf" download="Michael Micheal - Frontend Developer Reactjs.pdf" style={{color: "#FFF"}}>Download CV</a> 
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;