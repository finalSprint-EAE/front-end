import React from "react";

const Result = ({ title, genres, director, date }) => {
    return (
        <>
        <li className={resultCard}>
            Title: <strong>{title}</strong><br/>
            Genres: <strong>{genres}</strong><br/>
            Director: <strong>{director}</strong><br/>
            Release Date: <strong>{date}</strong><br/>
        </li>
        <br/>
        </>
    )
}