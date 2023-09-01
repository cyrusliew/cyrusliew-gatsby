import React from "react";
import PropTypes from "prop-types";
import Content from "../../components/Content";
import { Link } from "gatsby";
import Img from "gatsby-image";
import {
  Btn,
  ContentWrapper,
  Footer,
  FooterBall,
  Projects,
  ProjectsInnerWrapper,
  SiteLink,
  Title,
  Wrapper,
} from "./styles";
import Specifications from "./Components/Specifications";
import Screenshots from "./Components/Screenshots";

const ProjectTemplate = ({
  completionDate,
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  fluid,
  moreLikeThis,
  onGoing,
  screenshot,
  next,
  prev,
  url,
  hideUrl,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Wrapper className="section">
      <FooterBall />
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <Title>{title}</Title>
            <p>{description}</p>
            <Img alt="" fluid={{ ...fluid, aspectRatio: 3 }} />
            <ContentWrapper>
              <Specifications
                completionDate={completionDate}
                onGoing={onGoing}
                tags={tags}
              />
              <PostContent content={content} />
            </ContentWrapper>
            {screenshot && <Screenshots data={screenshot} />}
            <SiteLink>
              <Btn
                className={`btn btn-${hideUrl ? "disabled" : "primary"}`}
                to={hideUrl ? "" : url}
                target="_blank"
                disabled={hideUrl}
              >
                {hideUrl
                  ? "This site is still in development"
                  : "Experience it"}{" "}
                <i className={`fas fa-eye${hideUrl ? "-slash" : ""}`} />
              </Btn>
            </SiteLink>
            <Footer>
              <Projects>
                <h4>
                  {prev && "Previous"} {prev && next && "|"} {next && "Next"}
                </h4>
                <ProjectsInnerWrapper>
                  {prev && (
                    <Link to={prev.fields.slug}>
                      <Img
                        alt={prev.frontmatter.title}
                        fluid={prev.frontmatter.thumbnail.childImageSharp.fluid}
                      />
                      <p>{prev.frontmatter.title}</p>
                    </Link>
                  )}
                  {next && (
                    <Link to={next.fields.slug}>
                      <Img
                        alt={next.frontmatter.title}
                        fluid={next.frontmatter.thumbnail.childImageSharp.fluid}
                      />
                      <p>{next.frontmatter.title}</p>
                    </Link>
                  )}
                </ProjectsInnerWrapper>
              </Projects>
              {moreLikeThis && moreLikeThis.length > 0 && (
                <Projects>
                  <h4>More like this</h4>
                  <ProjectsInnerWrapper>
                    {moreLikeThis.length > 0 &&
                      moreLikeThis.map(
                        ({
                          node: {
                            fields: { slug },
                            frontmatter: {
                              title,
                              thumbnail: {
                                childImageSharp: { fluid },
                              },
                            },
                          },
                        }) => (
                          <Link key={slug} to={slug}>
                            <Img alt={title} fluid={fluid} />
                            <p>{title}</p>
                          </Link>
                        )
                      )}
                  </ProjectsInnerWrapper>
                </Projects>
              )}
            </Footer>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

ProjectTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

export default ProjectTemplate;
