import React from "react"
import {Navbar, Nav, Icon, Dropdown} from "rsuite"
import 'rsuite/dist/styles/rsuite-default.css'

const NavBar = ({ onSelect, activeKey, ...props }) => {

    return (
        <>
            <Navbar {...props}>
      <Navbar.Body>
        <Nav onSelect={onSelect} activeKey={activeKey}>
          <Nav.Item eventKey="1" icon={<Icon icon="home" />}>
           <a href="http://localhost:3000/"> Home </a>
          </Nav.Item>
          <Nav.Item eventKey="2">News</Nav.Item>
          <Nav.Item eventKey="3">Products</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
    </>
    )
}

export default NavBar
