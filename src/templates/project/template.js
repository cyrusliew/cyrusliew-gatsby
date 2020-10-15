import React from 'react';
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Content from '../../components/Content'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import {
    Btn,
    ContentWrapper,
    Footer,
    FooterBall,
    Projects,
    ProjectsInnerWrapper,
    Tag,
    Title,
    Wrapper,
} from './styles'
import Specifications from './Components/Specifications';
import Screenshots from './Components/Screenshots';
import KillerFeatures from './Components/KillerFeatures';

const ProjectTemplate = ({
    content,
    contentComponent,
    description,
    tags,
    title,
    helmet,
    fluid,
    moreLikeThis,
    screenshot,
    next,
    prev,
    url,
  }) => {
    console.log('Project screenshots', screenshot);
    const PostContent = contentComponent || Content
  
    return (
      <Wrapper className="section">
        <FooterBall />
        {helmet || ''}
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Title>
                {title}
              </Title>
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
              {
                screenshot && (
                  <Screenshots data={screenshot} />
                )
              }
              {/* <KillerFeatures /> */}
              <Footer>
                <Btn className="btn btn-primary" to={url} target="_blank">
                  Why don't you go experience it?
                  {' '}
                  <i className="fas fa-eye" />
                </Btn>
                <Projects>
                  <h4>
                    { prev && 'Previous'}
                    {' '}
                    { prev && next && '|' }
                    {' '}
                    { next && 'Next'}
                    </h4>
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
                {
                  moreLikeThis && moreLikeThis.length > 0 && (
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
                  )
                }
              </Footer>
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
  
  export default ProjectTemplate;