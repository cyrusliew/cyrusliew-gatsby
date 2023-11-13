import React, { useState } from "react";
import styled from "styled-components";
import Lightbox from "react-image-lightbox";
import { Header } from "../styles";
import "react-image-lightbox/style.css";
import { GatsbyImage } from "gatsby-plugin-image";

const Wrapper = styled.div`
  margin-bottom: 6rem;

  @media (max-width: 540px) {
    margin-bottom: 2rem;
  }
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
  transition: all 0.25s ease;
  width: 100%;

  &:hover {
    opacity: 0.7;
  }
`;

const Screenshots = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  function openLightbox(index) {
    setCurrentIndex(index);
    setIsOpen(true);
  }

  const getPhotoSrc = (index) => {
    return data[index].image.childImageSharp.full.images.fallback.src;
  };

  return (
    <Wrapper>
      <Header>
        <h3>Just throwing some screenshots here</h3>
      </Header>
      <ImageWrapper>
        <Hero>
          <Btn onClick={() => openLightbox(0)}>
            <GatsbyImage
              alt=""
              image={data[0].image.childImageSharp.full}
            />
          </Btn>
        </Hero>
        <Side>
          {data.map(({ image }, index) => {
            if (index === 0) {
              return null;
            }

            return (
              <Btn
                key={`image-${image.id}`}
                onClick={() => openLightbox(index)}
              >
                <GatsbyImage
                  key={image.id}
                  alt=""
                  image={image.childImageSharp.thumbnail}
                />
              </Btn>
            );
          })}
        </Side>
      </ImageWrapper>
      {isOpen && (
        <Lightbox
          mainSrc={getPhotoSrc(currentIndex)}
          nextSrc={getPhotoSrc((currentIndex + 1) % data.length)}
          prevSrc={getPhotoSrc((currentIndex + data.length - 1) % data.length)}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setCurrentIndex((currentIndex + data.length - 1) % data.length)
          }
          onMoveNextRequest={() =>
            setCurrentIndex((currentIndex + 1) % data.length)
          }
        />
      )}
    </Wrapper>
  );
};

export default Screenshots;
