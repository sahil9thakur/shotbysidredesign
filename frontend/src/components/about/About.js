import React, { useEffect } from "react";
import "./About.css";

const About = ({ history }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        localStorage.setItem("page", history.location.pathname);
    }, [history]);
    return (
        <>
            <div className='about-image'>
                <img
                    src='https://images.unsplash.com/photo-1506057527569-6a0285b2fcc1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
                    alt=''
                />
            </div>
            <div className='about-me-desc'>
                <h2 className='section-header'>About Me</h2>
                <p className='para-text'>
                    Hello, I am Sid Gambhir. I am a Toronto based traveller,
                    photographer and a life enthusiast. I capture moments and
                    make them feel alive. For me it’s about travelling around
                    the world, creating new memories and adding them to my
                    collection. My vision is to seize the beauty of this world
                    through my lens and share my passion and love with other
                    people. I started my journey back in 2010 when photography
                    was just a hobby, and with the passage of time I fell in
                    love with clicking moments and started taking it more
                    seriously, doing more landscape and portrait photography.
                    Let’s connect and create something amazing together.
                    Cheers!! Sid
                </p>
            </div>
        </>
    );
};

export default About;
