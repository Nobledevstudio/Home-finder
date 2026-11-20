import { useState } from "react";
import {
    Images,
    X,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import "./PropertyGallery.css";

const PropertyGallery = ({ images, title }) => {
    const [activeImage, setActiveImage] = useState(null);

    const nextImage = () => {
        setActiveImage((activeImage + 1) % images.length);
    };

    const previousImage = () => {
        setActiveImage(
            (activeImage - 1 + images.length) % images.length
        );
    };

    if (!images.length) return null;

    return (
        <>
            <div className="property-gallery">

                {/* Main Image */}
                <button
                    type="button"
                    className="gallery-main-image"
                    onClick={() => setActiveImage(0)}
                    aria-label="View main property image"
                >
                    <img src={images[0]} alt={title} />
                </button>

                {/* Side Images */}
                <div className="gallery-side-images">
                    {images.slice(1, 5).map((image, index) => (
                        <button
                            type="button"
                            className="gallery-side-image"
                            key={index}
                            onClick={() => setActiveImage(index + 1)}
                            aria-label={`View property image ${index + 2}`}
                        >
                            <img
                                src={image}
                                alt={`${title} - ${index + 2}`}
                            />
                        </button>
                    ))}
                </div>

                {/* View All Photos */}
                <button
                    type="button"
                    className="gallery-view-all"
                    onClick={() => setActiveImage(0)}
                >
                    <Images size={17} />
                    View all {images.length} photos
                </button>

            </div>

            {/* Full Screen Image Preview */}
            {activeImage !== null && (
                <div className="gallery-preview">

                    <button
                        type="button"
                        className="gallery-close"
                        onClick={() => setActiveImage(null)}
                        aria-label="Close preview"
                    >
                        <X size={27} />
                    </button>

                    <span className="gallery-preview-count">
                        {activeImage + 1} / {images.length}
                    </span>

                    <button
                        type="button"
                        className="gallery-arrow gallery-prev"
                        onClick={previousImage}
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={30} />
                    </button>

                    <img
                        className="gallery-preview-image"
                        src={images[activeImage]}
                        alt={`${title} - ${activeImage + 1}`}
                    />

                    <button
                        type="button"
                        className="gallery-arrow gallery-next"
                        onClick={nextImage}
                        aria-label="Next image"
                    >
                        <ChevronRight size={30} />
                    </button>

                </div>
            )}
        </>
    );
};

export default PropertyGallery;