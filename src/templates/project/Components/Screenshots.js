import React, { useState } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Lightbox  from 'react-image-lightbox';
import { Header } from '../styles';
import 'react-image-lightbox/style.css';

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

const Btn = styled.div`
    background: transparent;
    cursor: pointer;
    transition: all .25s ease;
    width: 100%;

    &:hover {
        opacity: .7;
    }
`;

const Screenshots = ({ data }) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ currentIndex, setCurrentIndex ] = useState(0)

    function openLightbox(index) {
        setCurrentIndex(index);
        setIsOpen(true);
    }

    const getPhotoSrc = (index) => {
        return data[index].image.childImageSharp.full.src;
    }

    return (
        <Wrapper>
            <Header>
                <h3>Just throwing some screenshots here</h3>
            </Header>
            <ImageWrapper>
                <Hero>
                    <Btn onClick={() => openLightbox(0)}>
                        <Img
                            alt=""
                            fluid={{ ...data[0].image.childImageSharp.thumbnail }}
                        />
                    </Btn>
                </Hero>
                <Side>
                    {
                        data.map(({ image }, index) => {
                            if (index === 0) {
                                return;
                            }

                            return (
                                <Btn onClick={() => openLightbox(index)}>
                                    <Img
                                        key={image.id}
                                        alt=""
                                        fluid={{ ...image.childImageSharp.thumbnail }}
                                    />
                                </Btn>
                            )
                        })
                    }
                </Side>
            </ImageWrapper>
            {
                isOpen && (
                    <Lightbox
                        mainSrc={getPhotoSrc(currentIndex)}
                        nextSrc={getPhotoSrc((currentIndex + 1) % data.length)}
                        prevSrc={getPhotoSrc((currentIndex + data.length - 1) % data.length)}
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() => setCurrentIndex((currentIndex + data.length - 1) % data.length)}
                        onMoveNextRequest={() => setCurrentIndex((currentIndex + 1) % data.length)}
                    />
                )
            }
        </Wrapper>
    )
}

export default Screenshots;