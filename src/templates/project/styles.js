import styled from 'styled-components';
import { Link } from 'gatsby'

export const Wrapper = styled.section`
    color: white;
    overflow: hidden;
    padding: 10rem 0;
    position: relative;

    h1,
    h3,
    h4 {
    color: white;
    font-style: italic;
    }

    .gatsby-image-wrapper {
    max-width: 100%;
    margin-bottom: 2rem;
    }
`;

export const Title = styled.h1`
    font-size: 3.375rem !important;
    margin-bottom: 3rem;
`;

export const Btn = styled(Link)`
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

export const Tag = styled(Link)`
background: white;
border-radius: 2px;
color: black;
padding: 0.5rem 1rem;
`;

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 6rem;

    > *:first-child {
    flex-basis: 30%;
    margin: -3rem -3rem 0;
    position: relative;
    }

    > *:last-child {
    flex-basis: 70%
    }
`;

export const Footer = styled.div`
    overflow: hidden;
    text-align: center;
    z-index: 1;

    > * {
        position: relative;
    }
`;

export const FooterBall = styled.div`
    background: linear-gradient(137.8deg, #4134FD 8.25%, #24077E 90.93%);
    border-radius: 100%;
    bottom: max(-45vw, -50rem);
    content: '';
    display: block;
    left: -50%;
    margin: auto;
    position: absolute;
    right: -50%;
    height: 100vw;
    max-width: 100rem;
    max-height: 100rem;
    width: 100vw;
    z-index: 0;
`;

export const Projects = styled.div`
    margin-top: 4rem;

    > h4 {
    text-align: right;
    }
`;

export const ProjectsInnerWrapper = styled.div`
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

export const Header = styled.div`
    margin-bottom: 3rem;
    text-align: ${props => props.center ? 'center' : 'left'}
`;
