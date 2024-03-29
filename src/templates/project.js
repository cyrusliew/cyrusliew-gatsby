import React, { createRef, useEffect } from "react";
import { gsap } from "gsap";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { HTMLContent } from "../components/Content";
import Layout from "../components/Layout";
import window from "global";
import ProjectTemplate from "./project/template";

const Project = ({ data }) => {
  const { currentProject, moreLikeThis, next, prev } = data;

  const {
    frontmatter: { title, tags, description, screenshot, url },
  } = currentProject;

  const logoSpace = () => (window.outerWidth > 540 ? "50px" : "1.5rem");
  const logoSizeTopLeft = () => (window.outerWidth > 540 ? 85 : "12vw");

  const logo = createRef();
  const ball = createRef();
  const logoName = createRef();
  const animationSpeed = 0.5;
  useEffect(() => {
    ball.current.style.marginTop = "auto";
    logo.current.style.marginTop = "auto";

    gsap.killTweensOf(logo.current);
    gsap.killTweensOf(ball.current);

    gsap.set(logo.current, {
      marginLeft: 0,
      marginTop: logoSpace(),
      transform: "rotate(0deg) scale(1)",
      zIndex: 1,
    });

    gsap.to(ball.current, {
      height: "80vw",
      width: "80vw",
      duration: animationSpeed,
      transform: "scale(1)",
      marginRight: "-40vw",
    });

    gsap.to(logo.current, {
      borderRadius: 0,
      duration: animationSpeed,
      height: logoSizeTopLeft(),
      left: logoSpace(),
      marginTop: logoSpace(),
      width: logoSizeTopLeft(),
    });
  }, [ball, logo]);

  return (
    <Layout logo={logo} ball={ball} logoName={logoName} currentIndex={3}>
      <ProjectTemplate
        content={currentProject.html}
        contentComponent={HTMLContent}
        description={description}
        helmet={
          <Helmet titleTemplate="%s | Creation">
            <title>{`${title}`}</title>
            <meta name="description" content={`${description}`} />
          </Helmet>
        }
        tags={tags}
        title={title}
        screenshot={screenshot}
        url={url}
        moreLikeThis={moreLikeThis.edges}
        next={next}
        prev={prev}
        {...currentProject.frontmatter}
      />
    </Layout>
  );
};

Project.propTypes = {
  data: PropTypes.shape({
    currentProject: PropTypes.object,
    moreLikeThis: PropTypes.object,
    next: PropTypes.object,
    prev: PropTypes.object,
  }),
};

export default Project;

export const pageQuery = graphql`query ProjectByID($id: String!, $tags: [String!], $next: String, $prev: String) {
  currentProject: markdownRemark(id: {eq: $id}) {
    id
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
      description
      tags
      platform
      onGoing
      completionDate(formatString: "MMM YYYY")
      url
      hideUrl
      thumbnail {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      screenshot {
        image {
          id
          childImageSharp {
            thumbnail: gatsbyImageData(layout: FULL_WIDTH)
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
  moreLikeThis: allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    limit: 4
    filter: {id: {nin: [$id, $prev, $next]}, frontmatter: {templateKey: {eq: "project"}, tags: {in: $tags}}}
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
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
  next: markdownRemark(id: {eq: $next}) {
    id
    fields {
      slug
    }
    frontmatter {
      title
      thumbnail {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
  prev: markdownRemark(id: {eq: $prev}) {
    id
    fields {
      slug
    }
    frontmatter {
      title
      thumbnail {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}`;
