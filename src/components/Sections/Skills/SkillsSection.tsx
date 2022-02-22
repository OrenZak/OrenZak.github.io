import React from 'react'
import { Section, } from 'react-scroll-section';
import { SectionContainer } from '../../styleComponents';
import './SkillsSection.scss';
//@ts-ignore
import { isWebpSupported } from 'react-image-webp/dist/utils';

const SkillsSection = () => {
  // const imgPath =  window.location.origin + (isWebpSupported() ? '/artvartist21.webp' : '/logo192.png');
  return (
    <Section id="skills">
      <SectionContainer background='secondaryMed'>
        <div className='content-container'>
          <h1 className='title'>Skills & Experience,</h1>
          <p>
            I'm a Mobile Developer, located in Israel. I have passion for high end UI elements and animations, but it doesn't end there the architectural spirit is in my blood.
            <br /><br />Self-learner, hard working person, problem solver, motivated and looking for challenges. I love to paint and listen to Jazz music. I'm a family person and Father to Liam and Amy.
            <br /><br />Interested in the entire spectrum of Mobile development, working on ambitious projects with great people.
          </p>
        </div>

        <div className='skills-container'>
          <div className="skill-set container">

            <div className="content content--mlarge skill-set__flex">
              <ul className="skill-set__list">
                <li className="skill-set__item">
                  <div className="skill-set__icon">
                    <img src="http://www.webcoderskull.com/img/icon/ai.svg" alt="Illustrator" />
                  </div>
                  <div className="skill-set__detail">
                    <div className="skill-set__meta">
                      <h1 className="small-title">Illustrator</h1>
                      <h2 className="small-title skill-set__high">90<span className="skill-set__ratio">%</span></h2>
                    </div>
                    <div className="skill-set__meta2">
                      <div className="skill-set__bar p90 js-scroll in"></div>
                      <p className="skill-set__year">3YEARS</p>
                    </div>
                  </div>
                </li>

                <li className="skill-set__item">
                  <div className="skill-set__icon">
                    <img src="http://www.webcoderskull.com/img/icon/ai.svg" alt="Illustrator" />
                  </div>
                  <div className="skill-set__detail">
                    <div className="skill-set__meta">
                      <h1 className="small-title">Illustrator</h1>
                      <h2 className="small-title skill-set__high">90<span className="skill-set__ratio">%</span></h2>
                    </div>
                    <div className="skill-set__meta2">
                      <div className="skill-set__bar p90 js-scroll in"></div>
                      <p className="skill-set__year">3YEARS</p>
                    </div>
                  </div>
                </li>

                <li className="skill-set__item">
                  <div className="skill-set__icon">
                    <img src="http://www.webcoderskull.com/img/icon/ai.svg" alt="Illustrator" />
                  </div>
                  <div className="skill-set__detail">
                    <div className="skill-set__meta">
                      <h1 className="small-title">Illustrator</h1>
                      <h2 className="small-title skill-set__high">90<span className="skill-set__ratio">%</span></h2>
                    </div>
                    <div className="skill-set__meta2">
                      <div className="skill-set__bar p90 js-scroll in"></div>
                      <p className="skill-set__year">3YEARS</p>
                    </div>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
}

export default SkillsSection;