import React from 'react'
import { Section, } from 'react-scroll-section';
import { SectionContainer } from '../../styleComponents';
import './HomeSection.scss';


const HomeSection = () => (
  <Section id="home">
    <SectionContainer>
      <img src={'https://avatars.githubusercontent.com/u/8303735?v=4'} className="App-logo" alt="logo" />
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
      <a
        className="App-link"
        href="https://www.linkedin.com/in/orenzakay"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>

      <a
        className="App-link"
        href="https://www.github.com/OrenZak"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </SectionContainer>
  </Section>
)

export default HomeSection;