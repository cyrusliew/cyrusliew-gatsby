import React, { useState, createRef, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Slider from "react-slick";
import styled from "styled-components";
import { window } from "global";

import Layout from "../components/Layout";

import useAnimation from "../hooks/useAnimation";
import useScrollWheel from "../hooks/useScrollWheel";

import Home from "../sections/Home";
import About from "../sections/About";
import PastPresent from "../sections/PastPresent";
import Creation from "../sections/Creation";
import Get from "../sections/Get";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Copyright = styled.div`
  color: white;
  font-size: 12px;
  left: -4rem;
  position: absolute;
  bottom: -100%;
  transform: rotate(-90deg);

  @media (max-width: 541px) {
    display: ${(props) => (!props.display ? "none;" : "block")};
    bottom: 1.5rem !important;
    left: 1.5rem !important;
    transform: unset !important;
  }
`;

const Slick = styled(Slider)`
  display: flex;
  height: 100vh;
  height: -webkit-fill-available;

  > .slick-list {
    height: 100vh;

    > .slick-track {
      > .slick-slide {
        min-height: 100vh;
        position: relative;

        > div {
          align-items: center;
          display: flex;
          height: 100vh;
          overflow-y: auto;

          > section,
          > div {
            margin: auto;
            overflow-x: hidden;
            width: 100%;

            @media (max-width: 541px) {
              padding: 6rem 1.5rem;
            }
          }
        }
      }
    }
  }
`;

const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const indexPage = createRef();
  const ball = createRef();
  const logo = createRef();
  const logoName = createRef();
  const copyright = createRef();
  const name = createRef();
  const mainSlider = React.useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialized, setInitialized] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const [init, setInit] = useState(false);
  const [anchorJump, setAnchorJump] = useState(false);

  const anchors = ["home", "about", "past-present", "creation", "get"];

  const sections = [
    <Home />,
    <About />,
    <PastPresent />,
    <Creation />,
    <Get />,
  ];

  useAnimation(
    ball,
    logo,
    copyright,
    name,
    currentIndex,
    initialized,
    indexPage
  );
  useScrollWheel(isSliding, mainSlider);

  useEffect(() => {
    if (init && !anchorJump) {
      const { hash } = window.location;

      if (hash) {
        const targetIndex = anchors.findIndex(
          (anchor) => anchor === hash.split("#")[1]
        );
        mainSlider.current.slickGoTo(targetIndex);
        setAnchorJump(true);
      }
    }
  }, [init, anchorJump, anchors]);

  const year = new Date().getFullYear();

  return (
    <Layout
      className="scroll-lock"
      style={{
        background: "black",
      }}
      logo={logo}
      ball={ball}
      initialized={initialized}
      currentIndex={currentIndex}
      logoName={logoName}
      ref={indexPage}
      sections={sections}
    >
      <Slick
        id="main-slider"
        ref={mainSlider}
        infinite={false}
        vertical
        verticalSwiping
        slidesToShow={1}
        dots={false}
        touchThreshold={5}
        onInit={() => setInit(true)}
        beforeChange={(oldIndex, newIndex) => {
          setIsSliding(true);

          if (!initialized) {
            setInitialized(true);
          }

          setCurrentIndex(newIndex);
          window.history.pushState(null, null, "#" + anchors[newIndex]);
        }}
        afterChange={() => {
          setIsSliding(false);
        }}
      >
        <Home name={name} />
        <About />
        <PastPresent />
        <Creation />
        <Get />
      </Slick>
      <Copyright
        className="copyright"
        ref={copyright}
        display={currentIndex === 4 ? 1 : 0}
      >
        &copy; {year} Cyrus Liew. All Rights Reserved.
      </Copyright>
    </Layout>
  );
};

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
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <IndexPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      subheading={frontmatter.subheading}
      mainpitch={frontmatter.mainpitch}
      description={frontmatter.description}
      intro={frontmatter.intro}
    />
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
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
                gatsbyImageData(layout: FULL_WIDTH)
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
`;
