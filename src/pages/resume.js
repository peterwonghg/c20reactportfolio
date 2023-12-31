import React from 'react';
import Footer from '../components/Footer';
import Button from '../components/Button';
import styled from 'styled-components';
import ResumeInfoItem from '../components/ResumeInfoItem';
import ContactBanner from '../components/ContactBanner';
import ResumeImg from '../assets/images/hero1.png';
import PText from '../components/PText';

const ResumePageStyles = styled.div`
  padding: 10rem 0rem 10rem 0rem;
  background: #383838;

  // .container {
  //   display: block;
  //   margin: 0 auto;
  // }
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    color: #BCB4B4;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 3;
  }
  }
  .center {
    display: flex;
    flex-direction: column; 
    align-items: center; 
    text-align: center; 
  }
  .resume__subheading {
    font-size: 2.2rem;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: bold;
    span {
      background-colour: #383838;
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .resume__heading {
    font-size: 3.6rem;
    gap: 2rem;
  }


  // .resume__info {
  //   margin-bottom: 4rem;
  //   .para {
  //     max-width: 100%;
  //   }
  // }
  .resume__info__items {
    margin-top: 0rem;
    // padding: 10px 10px 10px 10px;
  }
  // .resume__info__item {
  //   margin-bottom: 10rem;
  // }  

  .resume__info__heading {
    padding: 15px ;
    font-size: 3.6rem;
    text-transform: uppercase;
    color: #BCB4B4;
  }
  .text {
    font-size: 1.5rem;
    color: #BCB4B4;
    margin: 0 auto;
    margin-bottom: 2rem;
    width:40%;
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .resume_subheading {
      font-size: 1.8rem;
      
    }
    .resume__heading {
      font-size: 2.8rem;
      
    }
    .resume__info__heading {
      font-size: 3rem;

    }

  }
  `


  
export default function resume() {
  return (
    <ResumePageStyles>
      <div>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="resume__subheading">
                Hi, I am <span>Peter Wong</span>
              </p>
            <PText>
            Highly skilled and motivated Web Developer with a passion for creating interactive and user-friendly websites.
            Proficient in HTML, CSS, and JavaScript, with a strong background in responsive design, testing, and debugging. 
            Experienced in both front-end and back-end development, utilizing SQL and APIs to build dynamic and data-driven 
            web applications. Knowledgeable in cybersecurity and SEO practices to enhance website security and optimize search
            engine rankings. Possesses excellent data analytical and interpersonal skills, enabling effective collaboration 
            and problem-solving.
            </PText>
            </div>

          </div>
          <div className="center">
            <img src={ResumeImg} alt="Peter Wong" />
          </div>
          <div className="center">
          <Button btnText="Résumé" btnLink="https://hk.linkedin.com/in/peter-wong-4a8631136?original_referer=https%3A%2F%2Fwww.google.com%2F" />
          </div>
          <div className="resume__info__items right">
            <h1 className="resume__info__heading center">Education</h1>
            <ResumeInfoItem
            title="Australian Graduate School of Management (AGSM)"
            items={['UNSW - Sydney']}
            />
            <ResumeInfoItem
            title="School of Chemical Engineering"
            items={['UNSW - Sydney']}
            />
            <ResumeInfoItem
            title="School of Software Engineering and Computer Science"
            items={['UWA - Perth']}
            />
          </div>
          <br></br>
          <br></br>
          <div className="resume__info__items">
            <h1 className="resume__info__heading center">My Skills</h1>
            <ResumeInfoItem
            title="FrontEnd"
            items={['HTML', 'CSS', 'JavaScript', 'REACT']}
            />
            <ResumeInfoItem
            title="BackEnd"
            items={['Node', 'Express']}
            />
            <ResumeInfoItem
            title="Design"
            items={['Photoshop', 'Illustrator', 'Figma']}
            />

          </div>
        </div>       
      </div>
      <div>
        <ContactBanner />

        <Footer />
      </div>

    </ResumePageStyles>
  );
}
