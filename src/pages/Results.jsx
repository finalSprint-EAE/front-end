import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Result from "../components/Result";

const results = [
    {id: 1, title: "Movie 1", genres: "Action/Adventure", director: "Directorman", date: "example"},
    {id: 2, title: "Movie 2", genres: "Drama", director: "Directorguy", date: "example2"},
    {id: 3, title: "Movie 3", genres: "Comedy/Drama", director: "Mr Director", date: "example3"},
]

// Should accept results from database. Currently using testing array.
// const Results = ({ query }) => {
//     return (
//         <main>
//             <div>
//                 <h1>CineMart</h1>
//                 <p>Query: {query}</p>
//                 <p>Number of results: {results.length}</p>
//
//                 <p>Results:</p>
//                 <ul>
//                     {results.map((result) => (
//                         <Result key={result.id} result={result}/>
//                     ))}
//                 </ul>
//             </div>
//         </main>
//     )
// }

function Results() {
    const location = useLocation();
    const { query } = location.state || {};
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then ((data) => {
                const filteredResults = data.results.filter((item) =>
                    item.title.toLowerCase().includes(query.toLowerCase())
                );
                setResults(filteredResults);
            });
    }, [query]);

    return (
        <main>
            <div>
                <h1>CineMart</h1>
                <p>Query: {query}</p>
                <p>Number of results: {results.length}</p>

                <p>Results:</p>
                <ul>
                    {results.map((result) => (
                        <Result key={result.id} result={result}/>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default Results;