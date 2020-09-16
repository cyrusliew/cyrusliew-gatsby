import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import PropTypes from 'prop-types'
import {  graphql, StaticQuery } from 'gatsby'
import Story from '../components/Story';

const Section = styled.div`
    color: white;
    display: flex;

    .slick-slider {
        margin: auto;
        max-width: calc(100% - 35rem);
        width: 100%;


        .slick-slide {
            transition: all .25s ease;

            &:not(.slick-current) {
                opacity: .1;
            }
        }
    }

    .slick-list {
        overflow: visible;
    }
`;

const PastPresent = ({data}) => {
    const { edges: posts } = data.allMarkdownRemark

    return (
        <Section className="section">
            <Slider
                dots
                infinite
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                centerMode
            >
                {
                    posts && (
                        posts.map(({ node: post }) => (
                            <Story key={post.frontmatter.title} {...post} />
                        ))
                    )
                }
            </Slider>
        </Section>
    );
};

PastPresent.propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  }
  
  export default () => (
    <StaticQuery
      query={graphql`
      query ExperienceRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "experience" } } }
        ) {
          edges {
            node {
              excerpt
              id
              rawMarkdownBody
              frontmatter {
                title
                templateKey
                date(formatString: "YYYY")
                position
              }
            }
          }
        }
      }
      `}
      render={(data, count) => <PastPresent data={data} count={count} />}
    />
  )
  