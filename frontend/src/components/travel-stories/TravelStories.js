import React, { useEffect } from "react";
import "./TravelStories.css";

const TravelStories = ({ history }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        localStorage.setItem("page", history.location.pathname);
    }, [history]);
    return (
        // <div className='main-container'>
        <div className='stories-grid'>
            <a
                href='/story'
                target='_blank'
                rel='noopener noreferrer'
                className='stories-item'
            >
                <img
                    src={
                        "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1079&q=80"
                    }
                    alt=''
                />
                <span className='para-text'>12th December 2020</span>
                <h3>Greece</h3>
                <span className='para-text'>15 Photos</span>
            </a>
            <div className='stories-item'>
                <img
                    src={
                        "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1079&q=80"
                    }
                    alt=''
                />
                <span className='para-text'>12th December 2020</span>
                <h3>Greece</h3>
                <span className='para-text'>15 Photos</span>
            </div>
            <div className='stories-item'>
                <img
                    src={
                        "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1079&q=80"
                    }
                    alt=''
                />
                <span className='para-text'>12th December 2020</span>
                <h3>Greece</h3>
                <span className='para-text'>15 Photos</span>
            </div>
            <div className='stories-item'>
                <img
                    src={
                        "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1079&q=80"
                    }
                    alt=''
                />
                <span className='para-text'>12th December 2020</span>
                <h3>Greece</h3>
                <span className='para-text'>15 Photos</span>
            </div>
            <div className='stories-item'>
                <img
                    src={
                        "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1079&q=80"
                    }
                    alt=''
                />
                <span className='para-text'>12th December 2020</span>
                <h3>Greece</h3>
                <span className='para-text'>15 Photos</span>
            </div>
            <div className='stories-item'>
                <img
                    src={
                        "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1079&q=80"
                    }
                    alt=''
                />
                <span className='para-text'>12th December 2020</span>
                <h3>Greece</h3>
                <span className='para-text'>15 Photos</span>
            </div>
        </div>
        // </div>
    );
};

export default TravelStories;
