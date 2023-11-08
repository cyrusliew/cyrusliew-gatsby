import React from 'react'
import { Link } from 'gatsby'
import {
  Btn,
  FooterBall,
  Projects,
  ProjectsInnerWrapper,
} from '../styles'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

const FooterBtn = styled(Btn)`
    margin-bottom: 4rem;
`;

const Footer = ({
  moreLikeThis,
  next,
  prev,
  url,
}) => {
  return (
    <Footer>
      <FooterBall />
      <FooterBtn
        className="btn btn-primary"
        to={url}
        target="_blank"
      >
        Why don't you see it yourself?
        {' '}
        <i className="fas fa-eye" />
      </FooterBtn>
      <Projects>
        <h4>Previous | Next</h4>
        <ProjectsInnerWrapper>
          {
            prev && (
              <Link to={prev.fields.slug}>
                <GatsbyImage alt={prev.frontmatter.title} image={prev.frontmatter.thumbnail.childImageSharp.gatsbyImageData} />
              </Link>
            )
          }
          {
            next && (
              <Link to={next.fields.slug}>
                <GatsbyImage alt={next.frontmatter.title} image={next.frontmatter.thumbnail.childImageSharp.gatsbyImageData} />
              </Link>
            )
          }
        </ProjectsInnerWrapper>
      </Projects>
      <Projects>
        <h4>More like this</h4>
        <ProjectsInnerWrapper>
          {
            moreLikeThis && moreLikeThis.length > 0
            && moreLikeThis.map(({
              node: {
                fields: {
                  slug,
                },
                frontmatter: {
                  title,
                  thumbnail: {
                    childImageSharp: {
                      gatsbyImageData
                    }
                  }
                },
              }
            }) => (
              <Link to={slug}>
                <GatsbyImage alt={title} image={gatsbyImageData} />
                <p>{title}</p>
              </Link>
            ))
          }
        </ProjectsInnerWrapper>
      </Projects>
    </Footer>
  )
}

export default Footer;