import React, { useState, createRef, useEffect } from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

const Wrapper = styled(Link)`
    background: ${props => props.disabled ? '#f2f2f2' : '#a60e40'};
    border-radius: 5px;
    color: ${props => props.disabled ? '#ccc' : 'white'} !important;
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    padding: 1rem 2rem;
    text-transform: uppercase;

    &:not([disabled]):hover {
        background: darken(#a60e40, 10);
    }

    @media (max-width: 540px) {
        bottom: 0;
        font-size: 0.75rem;
        margin: 0 -20px;
        position: sticky;
        width: calc(100% + 20px);
        ${props => props.isSticky && css`
            width: 100%;
        `}
    }
`;

const Btn = ({
    hideUrl,
    url,
}) => {
    const [isSticky, setIsSticky] = useState(false);
    const ref = createRef();

    // mount 
    useEffect(()=>{
        const cachedRef = ref.current;
        const observer = new IntersectionObserver(
            ([e]) => setIsSticky(e.intersectionRatio < 1),
            {threshold: [1]}
        );

        observer.observe(cachedRef);

        // unmount
        return function(){
            observer.unobserve(cachedRef);
        }
    }, [])

    return (
        <Wrapper
            className={`btn btn-${ hideUrl ? 'disabled' : 'primary' } ${isSticky && 'sticky'}`}
            to={hideUrl ? '' : url}
            target="_blank"
            disabled={hideUrl}
            isSticky={isSticky}
            ref={ref}
        >
          {
            hideUrl ? 'This site is still in development' : 'Why don\'t you go experience it?'
          }
          {' '}
          <i className={`fas fa-eye${hideUrl ? '-slash' : ''}`} />
        </Wrapper>
    )
}

export default Btn;