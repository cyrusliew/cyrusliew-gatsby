import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import {
    Btn,
    FooterBall,
    Projects,
    ProjectsInnerWrapper,
} from '../styles'
import styled from 'styled-components'

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
                        <Img alt={prev.frontmatter.title} fluid={prev.frontmatter.thumbnail.childImageSharp.fluid} />
                    </Link>
                    )
                }
                {
                    next && (
                    <Link to={next.fields.slug}>
                        <Img alt={next.frontmatter.title} fluid={next.frontmatter.thumbnail.childImageSharp.fluid} />
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
                            fluid,
                            }
                        }
                        },
                    }
                    }) => (
                    <Link to={slug}>
                        <Img alt={title} fluid={fluid} />
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