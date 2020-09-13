import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const Wrapper = styled.div`
    .slick-list {
        margin: 0 -20% 0 0;
    }

    .slick-slide {
        transition: all .25s ease;

        &.slick-active-2 {
            opacity: 0.9;
        }

        &.slick-active-3 {
            opacity: 0.75;
        }

        &.slick-active-4 {
            opacity: 0.6;
        }

        > div {
            padding: 1rem;
            transition: all .25s ease;

            > div {
                color: white;
                transition: all .25s ease;

                img {
                    margin-bottom: 1rem;
                    width: 100%;
                }

                h4 {
                    font-family: 'Lato';
                    font-size: 24px;
                    margin-bottom: 0.5rem;
                }

                p {
                    > *:not(:last-child) {
                        margin-right: 1rem;
                    }
                }
            }
        }

        &:not(.slick-current) {
            > div {
                padding: 4rem 1rem 4rem 4rem;
                margin-top: -3rem;
            }
        }
    }
`;

const addActiveClass = () => {
    document.querySelectorAll('.slick-slide').forEach(slide => {
        slide.className = slide.className.split(' ').filter(c => !c.startsWith('slick-active-')).join(' ').trim();
    });
    document.querySelectorAll('.slick-active').forEach((activeSlide, index) => {
        activeSlide.classList.add(`slick-active-${index + 1}`);
    });
}

const Creation = () => (
    <Wrapper className="section">
        <Slider
            slidesToShow={4}
            infinite={true}
            afterChange={addActiveClass}
            onInit={addActiveClass}
        >
            <div className="portfolio">
                <img alt="picsum" src="https://picsum.photos/408/266" />
                <h4>Horizon Finance</h4>
                <p>
                    <i className="fab fa-drupal" />
                    <i className="fab fa-figma" />
                    <i className="fab fa-dev" />
                </p>
            </div>
            <div className="portfolio">
                <img alt="picsum" src="https://picsum.photos/408/266" />
                <h4>Horizon Finance</h4>
                <p>
                    <i className="fab fa-drupal" />
                    <i className="fab fa-figma" />
                    <i className="fab fa-dev" />
                </p>
            </div>
            <div className="portfolio">
                <img alt="picsum" src="https://picsum.photos/408/266" />
                <h4>Horizon Finance</h4>
                <p>
                    <i className="fab fa-drupal" />
                    <i className="fab fa-figma" />
                    <i className="fab fa-dev" />
                </p>
            </div>
            <div className="portfolio">
                <img alt="picsum" src="https://picsum.photos/408/266" />
                <h4>Horizon Finance</h4>
                <p>
                    <i className="fab fa-drupal" />
                    <i className="fab fa-figma" />
                    <i className="fab fa-dev" />
                </p>
            </div>
            <div className="portfolio">
                <img alt="picsum" src="https://picsum.photos/408/266" />
                <h4>Horizon Finance</h4>
                <p>
                    <i className="fab fa-drupal" />
                    <i className="fab fa-figma" />
                    <i className="fab fa-dev" />
                </p>
            </div>
            <div className="portfolio">
                <img alt="picsum" src="https://picsum.photos/408/266" />
                <h4>Horizon Finance</h4>
                <p>
                    <i className="fab fa-drupal" />
                    <i className="fab fa-figma" />
                    <i className="fab fa-dev" />
                </p>
            </div>
        </Slider>   
    </Wrapper> 
);

export default Creation;