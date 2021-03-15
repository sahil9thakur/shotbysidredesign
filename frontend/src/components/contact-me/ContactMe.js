import React, { useEffect, useState } from "react";
import "./ContactMe.css";
import { useDispatch, useSelector } from "react-redux";
import { sendEmail } from "../../actions/emailAction";
import Loader from "../layout/Loader";

const ContactMe = ({ history }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sendingEmail, setSendingEmail] = useState(false);

    const dispatch = useDispatch();

    const emailStatus = useSelector((state) => state.emailStatus);
    const { loading, success } = emailStatus;

    useEffect(() => {
        window.scrollTo(0, 0);
        localStorage.setItem("page", history.location.pathname);
    }, [history]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(sendEmail(name, email, message));
        setSendingEmail(true);
    };

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
            <div className='form-container'>
                {sendingEmail ? (
                    !loading ? (
                        success ? (
                            <h3
                                style={{
                                    marginTop: "50px",
                                    fontWeight: "300",
                                    textAlign: "center",
                                }}
                            >
                                Your message is sent!
                            </h3>
                        ) : (
                            <h3
                                style={{
                                    marginTop: "50px",
                                    fontWeight: "300",
                                    textAlign: "center",
                                    color: "red",
                                }}
                            >
                                Try again later
                            </h3>
                        )
                    ) : (
                        <></>
                    )
                ) : (
                    <></>
                )}
                {loading ? (
                    <Loader />
                ) : (
                    <form
                        onSubmit={submitHandler}
                        style={{
                            display: `${
                                sendingEmail === "true" && success && !loading
                            } ? 'none' : 'block' `,
                        }}
                    >
                        <div className='form-item'>
                            <label>Name</label>
                            <input
                                placeholder='Enter your name'
                                type='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            ></input>
                        </div>
                        <div className='form-item'>
                            <label>Email</label>
                            <input
                                type='email'
                                placeholder='Email address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        <button
                            type='submit'
                            disabled={!name && !email && !message}
                        >
                            Send
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ContactMe;
