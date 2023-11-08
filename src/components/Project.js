import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Wrapper = styled.a`
  color: white;
  display: block;
  transition: all 0.25s ease;

  .gatsby-image-wrapper {
    border-radius: 5px;
    margin-bottom: 1rem;
    width: 100%;
  }

  h4 {
    font-family: "Lato";
    font-size: 24px;
    margin-bottom: 0.5rem;
  }

  p {
    > *:not(:last-child) {
      margin-right: 1rem;
    }
  }

  &:hover {
    color: white !important;
    opacity: 0.5;
  }
`;

const Project = (props) => {
  const {
    frontmatter: { thumbnail, title, tags },
    fields: { slug },
  } = props;

  return (
    <Wrapper className="portfolio" href={slug}>
      <GatsbyImage alt={title} image={getImage(thumbnail)} />
      <h4>{title}</h4>
      <p>
        {tags &&
          tags.map((tag) => {
            const classes = tag.replace(" ", "-").toLowerCase();

            return <FontAwesomeIcon key={tag} icon={`fa-brands fa-${classes}`} />;
          })}
      </p>
    </Wrapper>
  );
};

export default Project;
