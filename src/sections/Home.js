import React from 'react';
import styled from 'styled-components';
import Name from '../components/Name';

const Wrapper = styled.div`
`;

const Home = ({
  name,
}) => (
    <Wrapper className="section section--gradient">
      <Name name={name} />
    </Wrapper>
);

export default Home;