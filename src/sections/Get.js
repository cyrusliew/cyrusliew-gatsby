import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    color: white;
    margin: auto;
    text-align: center;
`;

const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

    a {
        color: white;
    }

    i {
        font-size: 36px;
    }

    > a:not(:last-child) {
        margin-right: 3rem;
    }
`;

const Content = styled.div`
    margin: auto;
    max-width: 500px;
    width: 100%;
`;

const Get = () => {
    return (
        <Wrapper className="section">
            <SocialLinks>
                <a href="https://www.linkedin.com/in/cyrusliew/" target="_blank">
                    <i className="fab fa-linkedin" />
                </a>
                {/* <a href="#" target="_blank">
                    <i className="fab fa-behance" />
                </a> */}
                <a href="https://www.instagram.com/cyrus_liew/" target="_blank">
                    <i className="fab fa-instagram" />
                </a>
                <a href="mailto:cyrusliew02@gmail.com">
                    <i className="far fa-envelope" />
                </a>
            </SocialLinks>
            <Content>
                Cyrus Liew is currently working in Auckland, New Zealand, as a Drupal Front End Web Developer.
                <br />Available for freelance project online.
            </Content>
        </Wrapper>
    )
}

export default Get;