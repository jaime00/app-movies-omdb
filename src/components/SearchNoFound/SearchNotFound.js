import React from "react";
export default function SearchNotFound() {
    return (
        <div className="text-white background-black">
            <span role="img" aria-label="emoji cry">😭</span>
            <h2>Search not found</h2>
            <p>
                Be sure to spell the words correctly and use less or different
                keywords.
            </p>
        </div>
    );
}
