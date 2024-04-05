import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Result from "../components/Result";

function Results() {
    const location = useLocation();
    const { query, searchBy } = location.state || {};
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then ((data) => {
                const filteredResults = data.results.filter((item) => {
                    const itemValue = item[searchBy].toString().toLowerCase();
                    return itemValue.includes(query.toLowerCase());
                });
                setResults(filteredResults);
            });
    }, [query]);

    return (
        <div className="container">
            <h1>CineMart</h1>
            <p>Query: {query}</p>
            <p>Number of results: {results.length}</p>

            <p>Results:</p>
            <ul className="results-container">
                {results.map((result) => (
                    <Result key={result.id} result={result}/>
                ))}
            </ul>
        </div>
    )
}

export default Results;