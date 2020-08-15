// import React, { Component } from 'react'
// import { Navbar, Nav, NavItem } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './CustomNavbar.css'

// export default class CustomNavbar extends Component {
//   render() {
//     return (
//       <Navbar default collapseOnSelect>
//         <Navbar.Header>
//           <Navbar.Brand>
//             <Link to="/">CodeLife</Link>
//           </Navbar.Brand>
//           <Navbar.Toggle />
//         </Navbar.Header>
//         <Navbar.Collapse>
//           <Nav pullRight>
//             <NavItem eventKey={1} componentClass={Link} href="/" to="/">
//               Home
//             </NavItem>
//             <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
//               About
//             </NavItem>
//             <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
//               News
//             </NavItem>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     )
//   }
// }


import React from 'react' ;
import {Nav , Navbar} from 'react-bootstrap' ; 
import styled from 'styled-components' ;

const Styles = styled.div`  

.navbar {

    background-color: #222;
}


.navbar-brand, navbar-nav .nav-link {
    color: #bbb,

    &:hover {
        color: white ; 
    }
}

`;

export const CustomNavbar = () => (

  <Styles>
      <Navbar expand ="lg">
      <Navbar.Brand href = "/">code Life</Navbar.Brand>
      <Navbar.Toggle aria-controls = "basic-navbar-nav" />
      <Navbar.Collapse id = "basic-navbar-nav">
      <Nav className = "ml-auto">
      <Nav.Item><Nav.Link href = "/Home">Home</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link href = "/About">about</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link href = "/Contact">contact</Nav.Link></Nav.Item>

      </Nav>

      </Navbar.Collapse>         

      </Navbar>
  </Styles>
)