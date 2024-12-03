"use client"
import { useState, useEffect } from "react";

const ImageSlider = () => {
    // Array of image URLs
    const images = [
        "/images/slider1.jpg",
        "/images/slider2.jpg",
        "/images/slider3.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically change the image every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval); // Cleanup the interval on unmount
    }, [images.length]);

    return (
        <div
            className="relative h-96 w-full bg-cover bg-center transition-all duration-700"
            style={{
                backgroundImage: `url(${images[currentIndex]})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
                <div className="text-white px-4">
                    <h2 className="text-4xl font-bold mb-4">Find Your Perfect Turf</h2>
                    <p className="text-lg mb-8">
                        Book sports grounds in your city with real-time availability and secure payments.
                    </p>
                    <a
                        href="#"
                        className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-500 transition"
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
