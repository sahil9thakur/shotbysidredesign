import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import "./GalleryComponent.css";
import ImageViewer from "react-simple-image-viewer";
import Loader from "../layout/Loader";
import { albertaImages } from "../../data/albertaImages";

const GalleryComponent = ({ match, history }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        localStorage.setItem("page", history.location.pathname);
    }, [history]);
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const counter = useRef(0);
    const imageLoaded = () => {
        counter.current += 1;
        if (counter.current >= 24) {
            setTimeout(() => {
                setLoading(false);
            }, 5000);
        }
    };
    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };
    return (
        <div className='gallery-component-container'>
            <div style={{ display: loading ? "block" : "none" }}>
                <Loader />
            </div>

            <div
                className='gallery-component-images-container'
                style={{ display: loading ? "none" : "block" }}
            >
                <h1 className='section-header'>{match.params.id}</h1>
                <p className='para-text'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                </p>
                {/* <div
                    className='hero-image'
                    style={{ display: loading ? "none" : "block" }}
                >
                    <img
                        src={albertaImages[0]}
                        alt=''
                        onClick={() => openImageViewer(albertaImages[0].index)}
                        onLoad={imageLoaded}
                        onContextMenu={(e) => e.preventDefault()}
                    />
                </div> */}
                <div className='gallery-component-grid'>
                    {albertaImages.map((src, index) => (
                        <div
                            key={index}
                            className='image-item'
                            style={{ display: loading ? "none" : "block" }}
                        >
                            <img
                                src={src}
                                alt=''
                                onClick={() => openImageViewer(index)}
                                onLoad={imageLoaded}
                                onContextMenu={(e) => e.preventDefault()}
                            />
                        </div>
                    ))}
                    {isViewerOpen && (
                        <ImageViewer
                            src={albertaImages}
                            currentIndex={currentImage}
                            onClose={closeImageViewer}
                        />
                    )}
                </div>
                <button style={{ display: loading ? "none" : "block" }}>
                    <Link to='/gallery' className='back-btn'>
                        Go Back
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default GalleryComponent;
