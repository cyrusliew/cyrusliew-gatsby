import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { withResizeDetector } from 'react-resize-detector';
import PropTypes from 'prop-types'
import {  graphql, StaticQuery } from 'gatsby'
import Project from '../components/Project';
// import ProjectRoll from '../components/ProjectRoll';

const Wrapper = styled.div`
    .slick-list {
        margin: 0 -20% 0 0;
    }

    .slick-slide {
        transition: all .25s ease;

        &.slick-active-2 {
            opacity: 0.9;
        }

        &.slick-active-3 {
            opacity: 0.75;
        }

        &.slick-active-4 {
            opacity: 0.6;
        }

        > div {
            padding: 1rem;
            transition: all .25s ease;
        }

        &:not(.slick-current) {
            > div {
                padding: 4rem 1rem 4rem 4rem;
                margin-top: -3rem;
            }
        }

        @media (max-width: 541px) {
          &:not(.slick-current) {
              > div {
                  padding: 3rem 1rem 3rem 2rem;
                  margin-top: -2rem;
              }
          }
        }
    }
`;

const addActiveClass = () => {
    document.querySelectorAll('.slick-slide').forEach(slide => {
        slide.className = slide.className.split(' ').filter(c => !c.startsWith('slick-active-')).join(' ').trim();
    });
    document.querySelectorAll('.slick-active').forEach((activeSlide, index) => {
        activeSlide.classList.add(`slick-active-${index + 1}`);
    });
}

const settings = {
  arrows: false,
  slidesToShow: 4,
  infinite: true,
  afterChange: addActiveClass,
  onInit: addActiveClass,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        rows: 2,
      },
    },
  ],
};

const Creation = (props) => {
    const { data } = props
    const { edges: posts } = data.allMarkdownRemark;
    
    return (
        <Wrapper className="section">
            {
                posts && (
                    <Slider {...settings}>
                        { posts.map(({ node: post }) => (
                            <Project key={post.frontmatter.title} {...post} />
                        )) }
                    </Slider>  
                )
            } 
        </Wrapper> 
    )
};

Creation.propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  }
  
  export default () => (
    <StaticQuery
      query={graphql`
        query ProjectRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "project" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  thumbnail {
                    childImageSharp {
                      fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <Creation data={data} count={count} />}
    />
  )
  