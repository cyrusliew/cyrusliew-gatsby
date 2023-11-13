import React from "react";
import styled from "styled-components";

const Section = styled.section`
  align-items: center;
  color: white;
  display: flex;
`;

const AboutContent = styled.div`
  margin: auto 10%;
  max-width: 28.75rem;

  p:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 54px;
  font-style: italic;
  margin-bottom: 2rem;
`;

const getExperienceYears = () => {
  const currentYear = new Date().getFullYear();
  const experienceInYears = currentYear - 2013;
  if (experienceInYears === 10)
    return "a decade"
    
  return `${experienceInYears} years`;
}

const About = () => {

  return (
    <Section className="section section--gradient">
      <AboutContent>
        <Title>Hello</Title>
        <p>
          I'm Cyrus Liew, a Full Stack Developer with {getExperienceYears()} of
          experience. I specialize in frontend development, where I bring
          digital visions to life through engaging user interfaces. Explore my
          portfolio to see how I turn challenges into opportunities,
          consistently delivering work that exceeds expectations. Join me on
          this journey of creativity and quality in digital experiences.
        </p>
      </AboutContent>
    </Section>
  );
};

export default About;
