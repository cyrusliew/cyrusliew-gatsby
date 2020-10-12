import React, { createRef, useEffect } from 'react'
import { gsap } from 'gsap';
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Img from 'gatsby-image';
import useWindowSize from '../hooks/useWindowSize';
import styled from 'styled-components';
import window from 'global';
import Specifications from '../components/Project/Specifications';
import Screenshots from '../components/Project/Screenshots';

const Wrapper = styled.section`
  color: white;
  padding: 10rem 0;

  h1,
  h4 {
    color: white;
  }

  .gatsby-image-wrapper {
    max-width: 100%;
    margin-bottom: 2rem;
  }
`;

const Btn = styled(Link)`
  background: #a60e40;
  border-radius: 5px;
  color: white !important;
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  padding: 1rem 2rem;
  text-transform: uppercase;

  &:hover {
    background: darken(#a60e40, 10);
  }
`;

const Tag = styled(Link)`
  background: white;
  border-radius: 2px;
  color: black;
  padding: 0.5rem 1rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  
  > *:first-child {
    flex-basis: 30%;
    margin: -3rem;
    position: relative;
  }
  
  > *:last-child {
    flex-basis: 70%
  }
`;

const Projects = styled.div`
  > h4 {
    text-align: right;
  }
`;

const ProjectsInnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  h4 {
    text-align: right;
  }

  > a {
    color: white;
    opacity: 0.7;
    overflow: hidden;
    transition: all .25s ease;
    width: 12rem;

    > p {
      opacity: 0;
      transition: all .25s ease;
    }

    > .gatsby-image-wrapper {
      border-radius: 5px;
      margin-bottom: 0.5rem;
    }

    &:not(:last-child) {
      margin-right: 2rem;
    }

    &:hover {
      opacity: 1;

      > p {
        opacity: 1;
      }
    }
  }
`;

export const ProjectTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  fluid,
  moreLikeThis,
  next,
  prev,
  url,
}) => {
  const PostContent = contentComponent || Content

  return (
    <Wrapper className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            {tags && tags.length ? (
              <div>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Tag to={`/tags/${kebabCase(tag)}/`}>{tag}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <p>{description}</p>
            <Img alt="" fluid={{ ...fluid, aspectRatio: 3 }} />
            <ContentWrapper>
              <Specifications />
              <PostContent content={content} />
            </ContentWrapper>
            <Screenshots />
            <div className="footer">
              <Btn className="btn btn-primary" to={url} target="_blank">
                Why don't you see it yourself?
                {' '}
                <i className="fas fa-eye" />
              </Btn>
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
                    moreLikeThis.length > 0
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
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

ProjectTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const {
    currentProject,
    moreLikeThis,
    next,
    prev,
  } = data

  const {
    frontmatter: {
      title,
      tags,
      description,
      thumbnail,
      url,
    }
  } = currentProject;
  const logoSpace = () => window.outerWidth > 540 ? '50px' : '1.5rem';
  const logoBallLeft = () => window.outerWidth > 540 ? '-5%' : '0';
  const logoSizeTopLeft = () => window.outerWidth > 540 ? 85 : '12vw';
  
  const logoWrapperSize = useWindowSize();

  const logo = createRef()
  const ball = createRef();
  const logoName = createRef();
  const animationSpeed = 0.5;
  useEffect(() => {
    ball.current.style.marginTop = 'auto';
    logo.current.style.marginTop = 'auto';

    gsap.killTweensOf(logo.current);
    gsap.killTweensOf(ball.current);

    gsap.set(
      logo.current,
      {
        marginLeft: 0,
        marginTop: logoSpace(),
        transform: 'rotate(0deg) scale(1)',
      }
    )

    gsap.to(
        ball.current,
        {
            height: '80vw',
            width: '80vw',
            duration: animationSpeed,
            transform: 'scale(1)',
            marginRight: '-40vw',
        }
    );
  
    gsap.to(
      logo.current,
      {
        borderRadius: 0,
        duration: animationSpeed,
        height: logoSizeTopLeft(),
        left: logoSpace(),
        marginTop: logoSpace(),
        width: logoSizeTopLeft(),
      }
    );
  }, [])

  return (
    <Layout
      logo={logo}
      ball={ball}
      logoName={logoName}
    >
      <ProjectTemplate
        content={currentProject.html}
        contentComponent={HTMLContent}
        description={description}
        helmet={
          <Helmet titleTemplate="%s | Creation">
            <title>{`${title}`}</title>
            <meta
              name="description"
              content={`${description}`}
            />
          </Helmet>
        }
        tags={tags}
        title={title}
        fluid={thumbnail.childImageSharp.fluid}
        url={url}
        moreLikeThis={moreLikeThis.edges}
        next={next}
        prev={prev}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    currentProject: PropTypes.object,
    moreLikeThis: PropTypes.object,
    next: PropTypes.object,
    prev: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query ProjectByID(
    $id: String!
    $tags: [String!]
    $next: String
    $prev: String
  ) {
    currentProject: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        platform
        onGoing
        completionDate
        url
        thumbnail {
          childImageSharp {
            fluid(
              quality: 100
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    moreLikeThis: allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]},
      limit: 4,
      filter: {
        id: {
          nin: [$id, $prev, $next]
        }
        frontmatter: {
          templateKey: {
            eq: "project"
          },
          tags: {
            in: $tags
          }
        }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            tags
            thumbnail {
              childImageSharp {
                fluid(
                  quality: 100
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    
    next: markdownRemark(id: { eq: $next }) {
      id
      fields {
        slug
      }
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            fluid(
              quality: 100
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    
    prev: markdownRemark(id: { eq: $prev }) {
      id
      fields {
        slug
      }
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            fluid(
              quality: 100
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    
  }
`
