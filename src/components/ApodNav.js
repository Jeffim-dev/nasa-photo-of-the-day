import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const ApodNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
      <a href="https://www.nasa.gov/"><img src = "https://api.nasa.gov/assets/img/favicons/favicon-192.png"/></a>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
            <a href="https://www.lambdaschool.com/"><img src ="data:image/png;base64,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"/></a>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
               React Lesson
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="https://www.youtube.com/watch?v=YIscajXBnNk&feature=youtu.be">
                  Video
                </DropdownItem>
                <DropdownItem href="https://learn.lambdaschool.com/web2/module/recNDoSqyUw3eq1y3/">
                  TK
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default ApodNav;