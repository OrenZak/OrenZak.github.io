import React from 'react'
import { Section, } from 'react-scroll-section';
import Particles from 'react-tsparticles';
import { SectionContainer } from '../../styleComponents';
import particlesOptions from './particlesOptions';

const AboutSection = () => {
  return (
    <Section id="about">
      <SectionContainer background='secondaryLight'>
        <div style={{ position: 'absolute', display: 'flex', width: '100%', height: '100%' }}>
          <Particles id='skills-particles' options={particlesOptions} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '30vw', textAlign: 'left', marginLeft: '10%', marginTop: '-10%' }}>
          <h1>Little About Myself,</h1>
          <p style={{}}>I'm a Mobile Developer, located in Israel.
          <br />I have passion for high end UI elements and animations, but it doesn't end there the architectural spirit is in my blood.
          <br/><br/>Self-learner, hard working person, problem solver, motivated and looking for challenges. I love to paint and listen to Jazz music. I'm a family person and Father to Liam and Amy.
          <br/><br/>Interested in the entire spectrum of Mobile development, working on ambitious projects with great people

          </p>


        </div>
      </SectionContainer>
    </Section>
  );
}

export default AboutSection;