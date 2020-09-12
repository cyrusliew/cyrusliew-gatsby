import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    bottom: 0;
    display: flex;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;

    > div,
    .section,
    section {
        margin: auto;
        width: 100%;
    }
`;

const Sections = ({
    currentIndex
}) => {
  return (
    <Wrapper>
        {sections[currentIndex]}
    </Wrapper>
  )
}

export default Sections;