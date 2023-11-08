import React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import imgNotFound from '../img/not-found.gif';
import { GatsbyImage } from 'gatsby-plugin-image';

const Override = styled(Layout)`
  [class*="Navbar__Wrapper"] {
    display: none;
  }
`;

const Wrapper = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

const Btn = styled(Link)`
  background: ${props => props.disabled ? '#f2f2f2' : '#a60e40'};
  border-radius: 5px;
  color: ${props => props.disabled ? '#ccc' : 'white'} !important;
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  margin-top: 2rem;
  padding: 1rem 2rem;
  text-transform: uppercase;

  @media (max-width: 540px) {
    font-size: 0.75rem;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  margin-top: auto;
`;

const NotFoundPage = () => (
  <Override>
    <Wrapper>
      <Title>Aiyaa! This is 404!</Title>
      <p>This page does not exist at all.</p>
      <Btn to="/" primary>Let's go home</Btn>
      <GatsbyImage src={imgNotFound} alt="This page does not exsit." />
    </Wrapper>
  </Override>
)

export default NotFoundPage
