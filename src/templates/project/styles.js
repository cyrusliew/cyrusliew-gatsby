import styled from 'styled-components';

export const Wrapper = styled.section`
    color: white;
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

    @media (max-width: 540px) {
      padding: 7rem 0;
    }
`;

export const Title = styled.h1`
    font-size: 3.375rem !important;
    margin-bottom: 3rem !important;

    @media (max-width: 540px) {
      font-size: 2.5rem !important;
    }

    @media (max-width: 320px) {
      font-size: 2rem !important;
    }
`;

export const SiteLink = styled.div`
    text-align: center;
    
    @media (max-width: 540px) {
      bottom: 0;
      position: sticky;
    }
`;

export const Btn = styled.a`
    background: ${props => props.disabled ? '#f2f2f2' : '#a60e40'};
    border-radius: 5px;
    color: ${props => props.disabled ? '#ccc' : 'white'} !important;
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    padding: 1rem 2rem;
    text-transform: uppercase;

    &:not([disabled]):hover {
      background: darken(#a60e40, 10);
    }

    @media (max-width: 540px) {
      border-radius: 0;
      font-size: 0.75rem;
      margin: 0 -20px;
      width: calc(100% + 40px);
    }
`;

export const TagLi = styled.li`
  padding: 0 2rem 1rem 0;
  margin: 0 0 1.5rem;

  @media (max-width: 540px) {
    padding: 0 1rem 1rem 0;
  }
`;

export const Tag = styled.div`
  background: white;
  border-radius: 2px;
  color: black;
  padding: 0.5rem 1rem;

  @media (max-width: 33.75rem) {
    font-size: 0.875rem;
    padding: 0.5rem;
  }
`;

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 6rem;

    > *:first-child {
      flex-basis: 30%;
      margin: 0 -3rem 0;
      position: relative;
    }

    > *:last-child {
      flex-basis: 70%;

      a {
        color: white;
        text-decoration: underline;
      }
    }

    @media (max-width: 1199px) {
      flex-wrap: wrap;

      > *:first-child {
        flex-basis: 45%;
      }

      > *:last-child {
        flex-basis: 55%;
      }
    }

    @media (max-width: 767px) {
      flex-wrap: wrap;

      > *:first-child,
      > *:last-child {
        flex-basis: 100%;
        margin: 0;

        &:not(:last-child) {
          margin-bottom: 2rem;
        }
      }
    }

    @media (max-width: 540px) {
      margin-bottom: 4rem;
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
    border-radius: 50vw 50vw 0 0;
    bottom: max(-45vw, -50rem);
    bottom: 0;
    content: '';
    display: block;
    left: -50%;
    margin: auto;
    position: absolute;
    right: -50%;
    height: 50vw;
    max-width: 100rem;
    max-height: 50rem;
    width: 100vw;
    z-index: 0;
`;

export const Projects = styled.div`
    margin-top: 4rem;

    > h4 {
      text-align: center;
    }

    @media (max-width: 540px) {
      margin-top: 3rem;
    }
`;

export const ProjectsInnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

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

    @media (max-width: 540px) {
      width: 10rem;
    }

    @media (max-width: 320px) {
      font-size: 0.875rem;
      width: 7rem;
    }
  }
`;

export const Header = styled.div`
    margin-bottom: 3rem;
    text-align: ${props => props.center ? 'center' : 'left'}

    h3 {
      font-size: 1.5rem;
    }
`;
