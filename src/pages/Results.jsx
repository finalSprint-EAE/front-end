import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Result from "../components/Result";

function Results() {
    const location = useLocation();
    const { query, searchBy } = location.state || {};
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (query) {
            fetch(`http://localhost:8080/api/movies/search?query=${encodeURIComponent(query)}`)
                .then(response => response.json())
                .then(data => {
                    setResults(data);
                })
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [query]);

    return (
        <div className="container">
            <h1>CineMart</h1>
            <p>Query: {query}</p>
            <p>Number of results: {results.length}</p>

            <p>Results:</p>
            <ul className="results-container">
                {results.map((result) => (
                    <Result key={result.movieid} result={result}/>
                ))}
            </ul>
        </div>
    )
}

export default Results;