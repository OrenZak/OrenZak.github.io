import React from 'react'
import { Section, } from 'react-scroll-section';
import Particles from 'react-tsparticles';
import { SectionContainer } from '../../styleComponents';
import particlesOptions from './particlesOptions';
import './AboutSection.scss';
import { webpPath } from '../../../utils/path';


const AboutSection = () => {
  return (
    <Section id="about">
      <SectionContainer background='secondaryLight'>
        <div className='particles-container'>
          <Particles id='skills-particles' options={particlesOptions} />
        </div>
        <div className='content-container'>
          <h1 className='title'>Little About Myself,</h1>
          <p>
            I'm a Mobile Developer, located in Israel. I have passion for high end UI elements and animations, but it doesn't end there the architectural spirit is in my blood.
            <br /><br />Self-learner, hard working person, problem solver, motivated and looking for challenges. I love to paint and listen to Jazz music. I'm a family person and Father to Liam and Amy.
            <br /><br />Interested in the entire spectrum of Mobile development, working on ambitious projects with great people.
          </p>
        </div>

        <div className='art-container'>
          <img src={webpPath('artvartist21')} alt='Oren Zakay Art' className='art-img'/>
        </div>
      </SectionContainer>
    </Section>
  );
}

export default AboutSection;