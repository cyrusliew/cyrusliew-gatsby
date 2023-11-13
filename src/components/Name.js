import React from 'react';
import styled from 'styled-components';

const NameWrapper = styled.div`
  color: white;
  margin-left: auto;
  margin-right: 2rem;
  opacity: 0;
  position: relative;
  text-align: right;
  text-shadow: 0.15rem 0.15rem 0.25rem rgba(0,0,0, 1);
  z-index: 1;

  h2 {
      font-size: 3.375rem;
      text-transform: uppercase;
      letter-spacing: 0.3em;
  }

  h4 {
      font-size: 2.25rem;
      font-family: 'Lato', san-serif;
      font-weight: 100;
      letter-spacing: 0.1em;
  }

  @media (max-width: 541px) {
      margin-top: 5rem;

      h2 {
          font-size: 2.375rem;
      }

      h4 {
          font-size: 1.25rem;
      }
  }
`;

const Name = ({
    name,
}) => (
    <NameWrapper className="name" ref={name}>
        <h2>Cyrus Liew</h2>
        <h4>Full Stack Developer</h4>
    </NameWrapper>
);

export default Name;