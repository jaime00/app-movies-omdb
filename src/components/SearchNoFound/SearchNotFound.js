import React from "react";
import NotFoundImage from "../../images/NotFoundImage.png";

export default function SearchNotFound() {
    return (
        <div className="text-white background-black">
            <img src={NotFoundImage} alt="NotFound" className="img-fluid" />
            <h2>Search not found</h2>
            <p>
                Be sure to spell the words correctly and use less or different
                keywords.
            </p>
        </div>
    );
}
