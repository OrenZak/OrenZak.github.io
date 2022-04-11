import React, { useEffect } from 'react'
import { Section, } from 'react-scroll-section';
import { AnimatedLine, SectionContainer } from '../../styleComponents';
import { svgPath } from '../../../utils/path';
import { Breakpoint, useCurrentBreakpointName, useCurrentWidth } from 'react-socks';
import './SkillsSection.scss';
interface Skill {
  name: string;
  percentage: number;
  years: number;
  imageName: string;
}
const skillsInfo: Skill[] = [
  {
    name: 'Java',
    percentage: 99,
    years: 8,
    imageName: 'java'
  },
  {
    name: 'Android',
    percentage: 95,
    years: 5,
    imageName: 'android'
  },
  {
    name: 'ReactNative',
    percentage: 90,
    years: 2.5,
    imageName: 'rn'
  },
  {
    name: 'git',
    percentage: 95,
    years: 7,
    imageName: 'git'
  },
  {
    name: 'Nodejs',
    percentage: 50,
    years: 1,
    imageName: 'nodejs'
  },
];

const title = `Skills & Experience,`;

const SkillsSection = (props: any) => {

  return (
    <Section id="skills">
      <SectionContainer background='secondaryMed'>
        <Content title={title} />
        <div className="skills-container">
          <div className="skill-set container">
            <div className="content content--mlarge skill-set__flex">
              <SkillSet skills={skillsInfo} />
            </div>
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
}

const TextContent = () => (
  <p>
    After getting my Diploma as in Software Engineering, I served as a Java developer and a Team Lead, which led me to start developing to Android.
    <br /><br />After my army duty I understood mobile is my passion, and pursue that path. I've joined a startup named Blingy, and than moved to Kin Ecosystem leading the Kin Android SDK.
    <br /><br />I decided to join Wix.com to explore the multiplatform React Native in the CTO team, helping to create new teams, research & POC for strategic projects.
  </p>
)

const Content = ({ title }: { title: string }) => {
  return (
    <React.Fragment>
      <Breakpoint small down>
        <div className='content-container'>
          <h1 className='title'>{title}</h1>
          <TextContent />
        </div>
      </Breakpoint>

      <Breakpoint medium up>
        <div className='content-container'>
          <h1 className='title'>{title}</h1>
          <TextContent />
        </div>
      </Breakpoint>
    </React.Fragment>
  )
}

const SkillSet = ({ skills }: { skills: Skill[] }) => {
  const width = useCurrentWidth()
  return (
    <React.Fragment>
      <Breakpoint small down>
        <div className='skill-cards-wrapper'>
          <div className='skill-cards-outer' style={{
            maxWidth: width
          }}>
            <div className='skill-cards-inner'>
              {skills.map((skill, index) => (<SkillCard skill={skill} key={index}/>))}
            </div>
          </div>
        </div>

      </Breakpoint>
      <Breakpoint medium up>
        <ul className="skill-set__list">
          {skills.map((skill, index) => {
            return (
              <li className="skill-set__item" key={index}>
                <div className="skill-set__icon">
                  <img src={svgPath(skill.imageName)} alt={skill.name} />
                </div>
                <div className="skill-set__detail">
                  <div className="skill-set__meta">
                    <h1 className="small-title">{skill.name}</h1>
                  </div>
                  <div className="skill-set__meta2">
                    <AnimatedLine percentage={skill.percentage} />
                    <p className="skill-set__year">{skill.years} YEARS</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </Breakpoint>
    </React.Fragment >
  )
}

const SkillCard = ({ skill, key }: { skill: Skill, key: number }) => {
  return (
    <div key={key} className='card'>
      {skill.name}
      <img src={svgPath(skill.imageName)} alt={skill.name} style={{marginTop: 10, height: '80px'}} />
      <div className="skill-set__meta2">
        <AnimatedLine percentage={skill.percentage}/>
        <p className="skill-set__year">{skill.years} YEARS</p>
      </div>
    </div>
  )
}

export default SkillsSection;