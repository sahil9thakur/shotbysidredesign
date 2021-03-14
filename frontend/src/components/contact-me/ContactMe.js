import React, { useEffect } from "react";
import "./ContactMe.css";

const ContactMe = ({ history }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        localStorage.setItem("page", history.location.pathname);
    }, [history]);
    return (
        // <div className='main-container'>
        <div className='contact-me'>
            <h2 className='section-header'>Let's talk</h2>
            <p className='para-text'>
                <a href='mailto:shotbysidweb@gmail.com'>shotbysid@gmail.com</a>
            </p>
            {/* <p className='para-text'>
                    <a href='tel:+1111111111'>+1 111 111 1111</a>
                </p> */}
            <form>
                <div className='form-item'>
                    <label>Name</label>
                    <input
                        placeholder='Enter your name'
                        type='name'
                        required
                    ></input>
                </div>
                <div className='form-item'>
                    <label>Email</label>
                    <input
                        type='email'
                        placeholder='Email address'
                        required
                    ></input>
                </div>
                <div className='form-item'>
                    <label>Message</label>
                    <textarea
                        cols='10'
                        rows='5'
                        required
                        placeholder='Message'
                    ></textarea>
                </div>
                <button>Send</button>
            </form>
        </div>
        // </div>
    );
};

export default ContactMe;
