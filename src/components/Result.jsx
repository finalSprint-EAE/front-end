import React from "react";

const Result = ({ result }) => {
    return (
        <>
        <li className="result-card">
            Title: <strong>{result.title}</strong><br/>
            Genres: <strong>{result.genres}</strong><br/>
            Director: <strong>{result.director}</strong><br/>
            Release Date: <strong>{result.releasedate}</strong><br/>
        </li>
        <br/>
        </>
    )
}

export default Result;