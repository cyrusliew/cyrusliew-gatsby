import React from 'react';
import Logo from '../components/Logo';
import Ball from '../components/Ball';

const LogoName = ({
    ball,
    logo,
    logoName,
    currentIndex,
    initialized,
}) => {
    return (
        <div
            className="logo-name"
            style={{
                bottom: 0,
                left: 0,
                position: 'absolute',
                right: 0,
                top: 0,
            }}
            ref={logoName}
        >
            <Ball ref={ball} />
            <Logo
                ref={logo}
                currentIndex={currentIndex}
                initialized={initialized}
            />
            {/* <Name /> */}
        </div>
    )
};

export default LogoName;