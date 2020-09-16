import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ReactFullPage from '@fullpage/react-fullpage';
import styled from 'styled-components';

import Layout from '../components/Layout'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'

import Logo from '../components/Logo';
import Ball from '../components/Ball';
import useAnimation from '../hooks/useAnimation';

import Home from '../sections/Home';
import About from '../sections/About';
import PastPresent from '../sections/PastPresent';
import Creation from '../sections/Creation';
import Get from '../sections/Get';

import TopRight from '../components/TopRight';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BottomRight from '../components/BottomRight';

const Sections = styled.div`
    bottom: 0;
    display: flex;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;

    > div,
    .section,
    section {
        margin: auto;
        width: 100%;
    }
`;

const Copyright = styled.div`
    color: white;
    font-size: 12px;
    left: -4rem;
    position: absolute;
    bottom: -100%;
    transform: rotate(-90deg);
`;

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const indexPage = React.createRef();
  const ball = React.createRef();
  const logo = React.createRef();
  const copyright = React.createRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialized, setInitialized] = useState(false);
  // const [mounted, setMounted] = useState(false);

  useAnimation(ball, logo, copyright, currentIndex, initialized, indexPage);

  const sections = [
    <Home />,
    <About />,
    <PastPresent />,
    <Creation />,
    <Get />,
  ];

  return (
    <div
      style={{
        background: "black",
      }}
      ref={indexPage}
    >
      <div
        className="logo-name"
        style={{
          bottom: 0,
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
        }}
      >
        <Ball ref={ball} />
        <Logo
          ref={logo}
          currentIndex={currentIndex}
          initialized={initialized}
        />
      </div>
      <ReactFullPage
        navigation
        onLeave={(origin, destination, direction) => {
          console.log("onLeave event", { origin, destination, direction });
          if (!initialized) {
            setInitialized(true);
            console.log('Finished Initialized')
          }
        }}
        anchors={['home', 'about', 'past-and-present', 'creation', 'get']}
        render={({ state, fullpageApi }) => {
          const { destination } = state;
          console.log('State', state);
          console.log('Api', fullpageApi);
          if (destination) {
            const { index } = destination;  
            setCurrentIndex(index);
          }

          return (
            <ReactFullPage.Wrapper>
              { sections.map(section => <div key="section" className="section" />) }
            </ReactFullPage.Wrapper>
          )
        }}
      />
      

      <Sections>
        {sections[currentIndex]}
      </Sections>
      <TopRight currentIndex={currentIndex} />
      {
        currentIndex < sections.length - 1 && (
          <BottomRight currentIndex={currentIndex + 1} />
        )
      }
      <Copyright
        className="copyright"
        ref={copyright}
      >
        &copy; 2020 Cyrus Liew. All Rights Reserved.
      </Copyright>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
