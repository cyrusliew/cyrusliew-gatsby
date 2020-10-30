import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Wrapper = styled.a`
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
            tags,
            url,
        },
        fields: {
            slug,
        },
    } = props;
    
    return(
    <Wrapper
        className="portfolio"
        href={slug}
    >
        <Img alt={title} fluid={thumbnail.childImageSharp.fluid} />
        <h4>{title}</h4>
        <p>
            {
                tags && (
                    tags.map(tag => {
                        const classes = tag.replace(' ', '-').toLowerCase();

                        return (
                            <i key={tag} className={`fab fa-${classes}`} />
                        )
                    })
                )
            }
        </p>
    </Wrapper>
)};


export default Project;