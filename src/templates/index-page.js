import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import ReactFullPage from '@fullpage/react-fullpage';

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import Name from '../components/Name';
import Logo from '../components/Logo';
import Ball from '../components/Ball';

const backgroundColors = [
  'linear-gradient(116.82deg, #000000 0%, #24077E 100%)',
  'linear-gradient(250.2deg, #24077E 1.43%, #000000 98.06%)',
  'linear-gradient(289.58deg, #4134fd 2.98%, #000000 95.49%)',
  'linear-gradient(252.68deg, #24077e 5.04%, #000000 101.11%), #24077e',
  '#1a055e',
];

const BackgroundColors = (props) => (
  <div style={{
    ...props,
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    transition: 'all 1s ease',
  }} />
)

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div
      style={{
        background: "black",
      }}
    >
      {
        backgroundColors.map((bg, index) => (
          <BackgroundColors background={bg} opacity={currentIndex === index ? 1 : 0} />
        ))
      }
      
      <div
        class="logo-name"
        style={{
          bottom: 0,
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
        }}
      >
        <Ball />
        <Logo />
      </div>

      <ReactFullPage
        navigation
        onLeave={(origin, destination, direction) => {
          console.log("onLeave event", { origin, destination, direction });
        }}
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
              <section className="section section--gradient">
                <Name />
              </section>
              <section className="section section--gradient">
                Section 2
              </section>
              <section className="section section--gradient">
                Section 3
              </section>
              <section className="section section--gradient">
                Section 4
              </section>
              <section className="section section--gradient">
                Section 4
              </section>
              <section className="section section--gradient">
                <div className="container">
                  <div className="section">
                    <div className="columns">
                      <div className="column is-10 is-offset-1">
                        <div className="content">
                          <div className="content">
                            <div className="tile">
                              <h1 className="title">{mainpitch.title}</h1>
                            </div>
                            <div className="tile">
                              <h3 className="subtitle">{mainpitch.description}</h3>
                            </div>
                          </div>
                          <div className="columns">
                            <div className="column is-12">
                              <h3 className="has-text-weight-semibold is-size-2">
                                {heading}
                              </h3>
                              <p>{description}</p>
                            </div>
                          </div>
                          <Features gridItems={intro.blurbs} />
                          <div className="columns">
                            <div className="column is-12 has-text-centered">
                              <Link className="btn" to="/products">
                                See all products
                              </Link>
                            </div>
                          </div>
                          <div className="column is-12">
                            <h3 className="has-text-weight-semibold is-size-2">
                              Latest stories
                            </h3>
                            <BlogRoll />
                            <div className="column is-12 has-text-centered">
                              <Link className="btn" to="/blog">
                                Read more
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </ReactFullPage.Wrapper>
          )
        }}
      />
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
