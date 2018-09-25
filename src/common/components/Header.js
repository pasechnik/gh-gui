import React, { Component } from 'react'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

class Header extends Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    const {
      isOpen,
    } = this.state

    this.setState({
      isOpen: !isOpen,
    })
  }

  render() {
    const {
      isOpen,
    } = this.state

    return (
      <header>
        <Container>
          <Navbar color='faded' light expand='md'>
            <IndexLinkContainer to='/'>
              <NavbarBrand>
                gh-gui
              </NavbarBrand>
            </IndexLinkContainer>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <IndexLinkContainer to='/'>
                    <NavLink>
                      Home
                    </NavLink>
                  </IndexLinkContainer>
                </NavItem>
                <NavItem>
                  <LinkContainer to='/about'>
                    <NavLink>
                      About
                    </NavLink>
                  </LinkContainer>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </header>
    )
  }
}

export default Header
