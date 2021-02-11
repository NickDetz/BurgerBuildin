import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const HeaderNav = () => {
    return (
        <Navbar bg="dark" variant="dark" className="display-flex justify-content-center">
            <i className="fas fa-hamburger mx-2" style={{color: 'yellow'}}></i>
        <Navbar.Brand >Burgers!</Navbar.Brand>
        <Link to='/'>Back To Home Page</Link>
        
      </Navbar>
    )
}


export default HeaderNav;