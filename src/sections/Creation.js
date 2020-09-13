import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const Wrapper = styled.div`
    .slick-slide {
        > div {
            padding: 1rem;
        }
    }
`;

const Creation = () => (
    <Wrapper className="section">
        <Slider
            slidesToShow={4}
        >
            <div className="portfolio">
                <img alt="picsum" src="https://picsum.photos/408/266" />
            </div>
            <div className="portfolio">
                <img alt="picsum" src="https://picsum.photos/408/266" />
            </div>
            <div className="portfolio">
                <img alt="picsum" src="https://picsum.photos/408/266" />
            </div>
            <div className="portfolio">
                <img alt="picsum" src="https://picsum.photos/408/266" />
            </div>
            <div className="portfolio">
                <img alt="picsum" src="https://picsum.photos/408/266" />
            </div>
        </Slider>   
    </Wrapper> 
);

export default Creation;