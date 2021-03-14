import React from "react";
import { Link } from "react-router-dom";
import "./NavbarHeader.css";

const NavbarHeader = () => {
    return (
        <>
            <div className='navbar-header'>
                <Link to='/' className='link'>
                    Shot By Sid
                    <br />
                    <span>Photography</span>
                </Link>
            </div>
        </>
    );
};

export default NavbarHeader;
