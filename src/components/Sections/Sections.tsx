import React, { Fragment } from 'react';
import { Section } from 'react-scroll-section';
import { SectionContainer } from '../styleComponents';
import HomeSection from './Home';
import AboutSection from './About';
import SkillsSection from './Skills'

const Sections = () => (
  <Fragment>
    <HomeSection/>
    <AboutSection/>
    <SkillsSection/>
    <Section id="contact" >
      <SectionContainer background='secondaryDark'>
        <span role="img" aria-label="letter">
          💌
        </span>
      </SectionContainer>
    </Section>
  </Fragment>
);

export default Sections;
