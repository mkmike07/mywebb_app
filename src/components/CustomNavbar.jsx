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
                    </Navbar.Header>
                </Navbar>
            </div>
        )
    }
}
