import React, { useState, useCallback, useRef } from "react";
import "./Top6.css";
import image1 from "../../assets/main-page/image1.jpeg";
import image2 from "../../assets/main-page/image2.jpeg";
import image3 from "../../assets/main-page/image3.jpeg";
import image4 from "../../assets/main-page/image4.jpeg";
import image5 from "../../assets/main-page/image5.jpeg";
import image6 from "../../assets/main-page/image6.jpeg";
import ImageViewer from "react-simple-image-viewer";
import Loader from "../layout/Loader";

const Top6 = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const counter = useRef(0);
    const imageLoaded = () => {
        counter.current += 1;
        if (counter.current >= 6) {
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        }
    };

    const images = [image1, image2, image3, image4, image5, image6];

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    const captions = [
        { name: "Oia Thira", location: "Santorini, Greece" },
        {
            name: "Diamond Beach",
            location: "Nusa Penida, Bali",
        },
        { name: "Jasper National Park", location: "Alberta, Canada" },

        {
            name: "Abraham Lake",
            location: "Alberta, Canada",
        },
        {
            name: "Emerald Lake",
            location: "British Columbia, Canada",
        },
        {
            name: "Morant's Curve",
            location: "Alberta, Canada",
        },
    ];

    return (
        <div className='images-container'>
            <div style={{ display: loading ? "block" : "none" }}>
                <Loader />
            </div>
            <div className='images-grid'>
                {images.map((src, index) => (
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
                        <div className='image-caption'>
                            {captions[index].name}
                            <br />
                            <span className='location-text'>
                                {captions[index].location}
                            </span>
                        </div>
                    </div>
                ))}
                {isViewerOpen && (
                    <ImageViewer
                        src={images}
                        currentIndex={currentImage}
                        onClose={closeImageViewer}
                    />
                )}
            </div>
        </div>
    );
};

export default Top6;
