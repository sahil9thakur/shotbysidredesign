import React, { useEffect } from "react";
import "./StoryComponent.css";

const StoryComponent = ({ history }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        localStorage.setItem("page", history.location.pathname);
    }, [history]);
    return (
        <div className='story-container'>
            <h2 className='section-header'>Greece</h2>
            <div className='story-top'>
                <div className='story-main-image'>
                    <img
                        src='https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1079&q=80'
                        alt=''
                        srcSet=''
                    />
                </div>
                <div className='story-desc'>
                    <p className='para-text'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            <div className='story-gallery'>
                <h3 className='section-header'>Gallery</h3>
                <div className='story-gallery-container'>
                    <div className='story-gallery-item'>
                        <img
                            src='https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1079&q=80'
                            alt=''
                            srcSet=''
                        />
                    </div>
                    <div className='story-gallery-item'>
                        <img
                            src='https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1079&q=80'
                            alt=''
                            srcSet=''
                        />
                    </div>
                    <div className='story-gallery-item'>
                        <img
                            src='https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1079&q=80'
                            alt=''
                            srcSet=''
                        />
                    </div>
                    <div className='story-gallery-item'>
                        <img
                            src='https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1079&q=80'
                            alt=''
                            srcSet=''
                        />
                    </div>
                    <div className='story-gallery-item'>
                        <img
                            src='https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1079&q=80'
                            alt=''
                            srcSet=''
                        />
                    </div>
                    <div className='story-gallery-item'>
                        <img
                            src='https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1079&q=80'
                            alt=''
                            srcSet=''
                        />
                    </div>
                    <div className='story-gallery-item'>
                        <img
                            src='https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1079&q=80'
                            alt=''
                            srcSet=''
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default StoryComponent;
