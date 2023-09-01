import React from "react";
import styled from "styled-components";
import LogoName from "../components/LogoName";
import TopRight from "../components/TopRight";
import BottomRight from "../components/BottomRight";

const Wrapper = styled.div`
  height: 100vh;
  overflow-x: hidden;
  position: absolute;
  width: 100vw;
`;

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    const {
      ball,
      currentIndex,
      logo,
      logoName,
      initialized,
      sections,
    } = this.props;

    return (
      <Wrapper>
        <LogoName
          ball={ball}
          logo={logo}
          initialized={initialized}
          currentIndex={currentIndex}
          logoName={logoName}
        />
        <TopRight currentIndex={currentIndex} />
        {sections && currentIndex < sections.length - 1 && (
          <BottomRight currentIndex={currentIndex + 1} />
        )}
      </Wrapper>
    );
  }
};

export default Navbar;
