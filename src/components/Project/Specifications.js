import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: white;
    border-radius: 5px;
    color: #262462;
    padding: 2rem;

    > div {

    }
`;

const BuiltStacks = styled.div`
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
`;

const BuiltStack = styled.div`
    align-items: center;
    display: flex;
    flex-basis: 33%;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;

    > i {
        align-items: center;
        background: #262462;
        border-radius: 100%;
        color: white;
        display: flex;
        font-size: 20px;
        justify-content: center;
        height: 45px;
        width: 45px;
    }
`;

const Dates = styled.div`

`;

const Specifications = () => {
    return (
        <Wrapper>
            <BuiltStacks>
                <BuiltStack>
                    <i className="fab fa-react" />
                    <span>
                        React
                    </span>
                </BuiltStack>
                <BuiltStack>
                    <i className="fab fa-js" />
                    <span>
                        jQuery
                    </span>
                </BuiltStack>
                <BuiltStack>
                    <i className="fab fa-sass" />
                    <span>
                        SASS
                    </span>
                </BuiltStack>
                <BuiltStack>
                    <i className="fab fa-wordpress" />
                    <span>
                        Wordpress
                    </span>
                </BuiltStack>
                <BuiltStack>
                    <i className="fab fa-gutenberg" />
                    <span>
                        Gutenberg
                    </span>
                </BuiltStack>
            </BuiltStacks>
            <Dates>
                <tr>
                    <td>On going</td>
                    <td><i className="fas fa-check" /></td>
                </tr>
                <tr>
                    <td>Completion date</td>
                    <td>08/12/2020</td>
                </tr>
            </Dates>
        </Wrapper>
    )
}

export default Specifications;