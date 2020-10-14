import React from 'react';
import styled from 'styled-components';
import { Header } from '../styles';

const Wrapper = styled.div`
    margin-bottom: 6rem;
    position: relative;
    z-index: 1;
`;

const ContentWrapper = styled.div`
    display: flex;
`;

const Content = styled.div`
    margin-right: 4rem;
    width: 50%;
`;

const Image = styled.div`
    margin-right: -25%;
    width: 75%;
`;

const KillerFeatures = () => {
    return (
        <Wrapper>
            <Header center>
                <h3>Some killer features I have built</h3>
                <p>(To make it sounds robust, it actually does)</p>
            </Header>
            <ContentWrapper>
                <Content>
                    <h4>This is the title</h4>
                    <div>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.</p>
                        <p>
                        Discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                    </div>
                </Content>
                <Image><img src="https://picsum.photos/800/500" alt="feature" /></Image>
            </ContentWrapper>
        </Wrapper>
    )
}

export default KillerFeatures;