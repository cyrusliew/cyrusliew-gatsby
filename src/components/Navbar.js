import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import LogoName from '../components/LogoName'
import TopRight from '../components/TopRight'

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  position: absolute;
  width: 100vw;
`;

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
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
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    const { ball, currentIndex, logo, logoName, initialized } = this.props;

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
      </Wrapper>
    )
  }
}

export default Navbar
