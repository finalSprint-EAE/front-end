import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Result from "../components/Result";

function Results() {
    const location = useLocation();
    const { query, searchBy } = location.state || {};
    const [results, setResults] = useState([]);

    useEffect(() => {
        const url = new URL('http://localhost:8080/api/movies/search');
        url.searchParams.append('query', encodeURIComponent(query));
        url.searchParams.append('searchBy', searchBy);

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setResults(data);
            })
            .catch(error => console.error("error fetching data:", error));
    }, [query, searchBy]);

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