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
        padding-bottom: 1rem;   
        position: relative;     
        transition: all .25s ease;

        &::after {
            background: white;
            bottom: 0;
            content: '';
            display: block;
            height: 0.25rem;
            left: 0;
            position: absolute;
            transition: all .25s ease;
            width: 0;
        }

        &:hover {
            border-color: white;

            &::after {
                width: 100%;
            }

            i {
                transform: translateY(-0.5rem);
            }
        }
    }

    i {
        font-size: 36px;
        transition: all .25s ease;
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
                <a href="https://www.linkedin.com/in/cyrusliew/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin" />
                </a>
                <a href="https://www.instagram.com/cyrus_liew/" target="_blank" rel="noreferrer">
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