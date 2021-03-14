import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";
import image1 from "../../assets/main-page/image1.jpeg";
import image2 from "../../assets/main-page/image2.jpeg";
import image3 from "../../assets/main-page/image3.jpeg";
// import image4 from "../../assets/main-page/image4.jpeg";
// import image5 from "../../assets/main-page/image5.jpeg";
// import image6 from "../../assets/main-page/image6.jpeg";
import Loader from "../layout/Loader";
import { Link } from "react-router-dom";

const Gallery = ({ history }) => {
    const [loading, setLoading] = useState(true);
    const counter = useRef(0);
    const imageLoaded = () => {
        counter.current += 1;
        if (counter.current >= 3) {
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        localStorage.setItem("page", history.location.pathname);
    }, [history]);

    const images = [image1, image2, image3];
    const captions = ["alberta", "bali", "greece"];

    return (
        <div className='gallery-grid-container'>
            <div style={{ display: loading ? "block" : "none" }}>
                <Loader />
            </div>
            <div className='gallery-grid'>
                {images.map((src, index) => (
                    <div
                        className='gallery-grid-item'
                        key={index}
                        style={{ display: loading ? "none" : "block" }}
                    >
                        <Link to={`/gallery/${captions[index]}`}>
                            <img
                                src={src}
                                alt=''
                                onLoad={imageLoaded}
                                onContextMenu={(e) => e.preventDefault()}
                            />
                            <div className='gallery-grid-image-caption'>
                                <span className='location-text'>
                                    {captions[index]}
                                </span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
