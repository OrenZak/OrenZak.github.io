import React from 'react'
import { Section, } from 'react-scroll-section';
import { AnimatedLine, SectionContainer } from '../../styleComponents';
import { svgPath } from '../../../utils/path';
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
    name: 'React Native - TS - JS',
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
]

const SkillsSection = () => {
  return (
    <Section id="skills">
      <SectionContainer background='secondaryMed'>
        <div className='content-container'>
          <h1 className='title'>Skills & Experience,</h1>
          <p>
            After getting my Diploma as in Software Engineering, I served as a Java developer and a Team Lead, which led me to start developing to Android.
            <br /><br />After my army duty I understood mobile is my passion, and pursue that path. I've joined a startup named Blingy, and than moved to Kin Ecosystem leading the Kin Android SDK.
            <br /><br />I decided to join Wix.com to explore the multiplatform React Native in the CTO team, helping to create new teams, research & POC for strategic projects.
          </p>
        </div>

        <div className='skills-container'>
          <div className="skill-set container">
            <div className="content content--mlarge skill-set__flex">
              <ul className="skill-set__list">
                {
                  skillsInfo.map(skill =>
                  (
                    <li className="skill-set__item">
                      <div className="skill-set__icon">
                        <img src={svgPath(skill.imageName)} alt={skill.name} />
                      </div>
                      <div className="skill-set__detail">
                        <div className="skill-set__meta">
                          <h1 className="small-title">{skill.name}</h1>
                        </div>
                        <div className="skill-set__meta2">
                          <AnimatedLine percentage={skill.percentage}/>
                          <p className="skill-set__year">{skill.years} YEARS</p>
                        </div>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
}

export default SkillsSection;