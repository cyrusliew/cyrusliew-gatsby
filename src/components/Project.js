import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Wrapper = styled(Link)`
    color: white;
    display: block;
    transition: all .25s ease;

    .gatsby-image-wrapper {
        border-radius: 5px;
        margin-bottom: 1rem;
        width: 100%;
    }

    h4 {
        font-family: 'Lato';
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
        frontmatter: {
            thumbnail,
            title,
        },
        fields: {
            slug,
        },
    } = props;
    
    return(
    <Wrapper
        className="portfolio"
        to={slug}
    >
        <Img alt={title} fluid={thumbnail.childImageSharp.fluid} />
        <h4>{title}</h4>
        <p>
            <i className="fab fa-drupal" />
            <i className="fab fa-figma" />
            <i className="fab fa-dev" />
        </p>
    </Wrapper>
)};


export default Project;