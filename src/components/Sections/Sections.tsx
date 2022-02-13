import React, { Fragment } from 'react';
import { Section } from 'react-scroll-section';
import { SectionContainer } from '../styleComponents';
import HomeSection from './Home';
import AboutSection from './About';

const Sections = () => (
  <Fragment>
    <HomeSection/>
    <AboutSection/>
    <Section id="skills">
      <SectionContainer background='secondaryMed'>
        <span role="img" aria-label="computer">
          💻
        </span>
      </SectionContainer>
    </Section>
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
