import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavbarHeader from "./NavbarHeader";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <NavbarHeader />
            <Navbar
                expand='lg'
                variant='light'
                bg='light'
                className='justify-content-center navbar-custom'
            >
                <Nav>
                    {/* <Nav.Item className='navlink-item'>
                        <Nav.Link href='/landscapes'>Landscapes</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='navlink-item'>
                        <Nav.Link eventKey='link-1' href='/cities'>
                            Cities
                        </Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item className='navlink-item'>
                        <NavLink
                            to='/gallery'
                            activeClassName='active-nav-link'
                            className='nav-link'
                        >
                            Gallery
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item className='navlink-item'>
                        <NavLink
                            to='/about'
                            activeClassName='active-nav-link'
                            className='nav-link'
                        >
                            About
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item className='navlink-item'>
                        <NavLink
                            to='/contact-me'
                            activeClassName='active-nav-link'
                            className='nav-link'
                        >
                            Contact Me
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item className='navlink-item'>
                        <Link
                            to={{
                                pathname: "https://shotbysid.darkroom.tech/",
                            }}
                            target='_blank'
                            className='nav-link'
                        >
                            Shop
                        </Link>
                    </Nav.Item>
                    <Nav.Item className='navlink-item'>
                        <Link
                            to={{
                                pathname: "https://www.rhythmtolife.com/shop",
                            }}
                            target='_blank'
                            className='nav-link'
                        >
                            Buy Presets
                        </Link>
                    </Nav.Item>
                    {/* <Nav.Item className='navlink-item'>
                        <NavLink
                            to='/travel-stories'
                            activeClassName='active-nav-link'
                            className='nav-link'
                        >
                            Travel Stories
                        </NavLink>
                    </Nav.Item> */}
                </Nav>
            </Navbar>
        </>
    );
};

export default Navigation;
