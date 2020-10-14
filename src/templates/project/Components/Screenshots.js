import React from 'react';
import styled from 'styled-components';
import { Header } from '../styles';

const Wrapper = styled.div`
    margin-bottom: 6rem;
`;

const ImageWrapper = styled.div`
    display: flex;

    > img {
        margin-right: 1rem;
    }
`;

const Hero = styled.div`
    margin-right: 1rem;
    width: 68%;
`;

const Side = styled.div`
    width: 32%;

    > img:not(:last-child) {
        margin-bottom: 1rem;
    }
`;

const Screenshots = () => {
    return (
        <Wrapper>
            <Header>
                <h3>Just throwing some screenshots here</h3>
            </Header>
            <ImageWrapper>
                <Hero>
                    <img src="https://picsum.photos/787/597" alt="Screenshot" />
                </Hero>
                <Side className="">
                    <img src="https://picsum.photos/382/290" alt="Screenshot" />
                    <img src="https://picsum.photos/382/290" alt="Screenshot" />
                </Side>
            </ImageWrapper>
        </Wrapper>
    )
}

export default Screenshots;