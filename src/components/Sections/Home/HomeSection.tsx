import React from 'react'
import { Section, } from 'react-scroll-section';
import { svgPath } from '../../../utils/path';
import { SectionContainer } from '../../styleComponents';
import './HomeSection.scss';


const HomeSection = () => (
  <Section id="home">
    <SectionContainer>
      <img src={'https://avatars.githubusercontent.com/u/8303735?v=4'} className="profile-img" alt="Oren Zakay" />
      <div style={{
        margin: '15px'
      }}>
        <h1>
          Oren Zakay
        </h1>
        <h2>
          Software Engineer & Artist
        </h2>
      </div>

      <div>
        <a
          href="https://www.linkedin.com/in/orenzakay"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={svgPath('linkedin')} className="icon"></img>

        </a>

        <a
          href="https://www.github.com/OrenZak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={svgPath('github')} className="icon"></img>

        </a>



      </div>

      <a
        href="https://medium.com/@orenzakay"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={svgPath('medium')} className='medium-icon'></img>

      </a>

    </SectionContainer>
  </Section>
)

export default HomeSection;