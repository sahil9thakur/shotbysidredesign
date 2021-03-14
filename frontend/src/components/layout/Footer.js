import React from "react";
import "./Footer.css";
import facebookLogo from "../../assets/social-icons/facebook.png";
import instagramLogo from "../../assets/social-icons/instagram.png";
import flickrLogo from "../../assets/social-icons/flickr.png";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='social-icons'>
                <a
                    href='https://www.facebook.com/sidgambhirphotography'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <img src={facebookLogo} alt='' srcSet='' />
                </a>
                <a
                    href='https://www.instagram.com/_shotbysid_/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <img src={instagramLogo} alt='' srcSet='' />
                </a>
                <a
                    href='https://www.flickr.com/photos/shotbysid/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <img src={flickrLogo} alt='' srcSet='' />
                </a>
            </div>
            <p>
                &copy; 2021 by Sid Gambhir
                {/* Created By Sahil Thakur */}
            </p>
        </div>
    );
};

export default Footer;
