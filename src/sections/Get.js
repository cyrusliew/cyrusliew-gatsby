import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <a role="button" href="https://www.linkedin.com/in/cyrusliew/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </a>
        <a role="button" href="mailto:cyrusliewdev@gmail.com">
          <FontAwesomeIcon icon="fa-solid fa-envelope" />
        </a>
      </SocialLinks>
      <Content>
        Let's Connect and Create Something Awesome Together! Reach out and let the magic begin.
      </Content>
    </Wrapper>
  )
}

export default Get;