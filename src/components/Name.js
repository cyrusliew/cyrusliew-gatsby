import React from 'react';
import styled from 'styled-components';

const NameWrapper = styled.div`
  color: white;
  margin-left: auto;
  position: relative;
  text-align: right;
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
`;

const Name = () => {
    return (
    <NameWrapper class="name">
        <h2>Cyrus Liew</h2>
        <h4>"full stack" developer</h4>
    </NameWrapper>
    )
};

export default Name;