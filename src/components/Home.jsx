import React, { Component } from 'react' 

import {Link} from 'react-router-dom' ;

import {Jumbotron , Row , Col , Image , Button} from 'react-bootstrap' ;

import  {Grid} from 'react-bootstrap' ;

export default class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                <h2>Welcome to CodeLife</h2>
                <p>This is how to build a website with React, React_Router & React-Bootstrap</p>
                </Jumbotron>
                <Link to = "/about">
                <Button bsStyle = "primary" > About</Button>
                </Link>
            </div>
        )
    }
}
