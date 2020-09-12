import React from 'react';
import styled from 'styled-components';
import Name from '../components/Name';

const Wrapper = styled.div`
`;

const Home = () => (
    <Wrapper className="section section--gradient">
      <Name />
    </Wrapper>
);

export default Home;