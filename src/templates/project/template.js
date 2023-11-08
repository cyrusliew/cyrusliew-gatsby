import React from "react";
import PropTypes from "prop-types";
import Content from "../../components/Content";
import { Link } from "gatsby";
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
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProjectTemplate = ({
  completionDate,
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  thumbnail,
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
            <GatsbyImage alt="" image={getImage(thumbnail)} />
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
                      <GatsbyImage
                        alt={prev.frontmatter.title}
                        image={getImage(prev.frontmatter.thumbnail)}
                      />
                      <p>{prev.frontmatter.title}</p>
                    </Link>
                  )}
                  {next && (
                    <Link to={next.fields.slug}>
                      <GatsbyImage
                        alt={next.frontmatter.title}
                        image={getImage(next.frontmatter.thumbnail)}
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
                              thumbnail,
                            },
                          },
                        }) => (
                          <Link key={slug} to={slug}>
                            <GatsbyImage alt={title} image={getImage(thumbnail)} />
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
