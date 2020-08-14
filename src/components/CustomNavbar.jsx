import React, { Component } from 'react'

import {Navbar,Nav,NavItem} from 'react-bootstrap' ;

import {Link} from 'react-router-dom' ;


import {Navbar,Nav,NavItem} from 'react-bootstrap' ; 
export default class CustomNavbar extends Component {
    render() {
        return (
            <div> 
                <Navbar default collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to = "/">codeLife</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                <NavItem eventKey = {1} componentClass = {Link} to = "/">Home
                                </NavItem>
                                <NavItem eventKey = {2} componentClass = {Link} to = "/">About
                                </NavItem>
                                <NavItem eventKey = {3} componentClass = {Link} to = "/">News
                                </NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar.Header>
                </Navbar>
            </div>
        )
    }
}
