import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [searchBy, setSearchBy] = useState('title');

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/results', { state: { query, searchBy } });
    };

    return (
        <div className="container">
        <h1>CineMart</h1>
        <form onSubmit={handleSubmit}>
                <label htmlFor="searchBy">
                    Search by:
                </label>
                <select id="searchBy" value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
                    <option value="title">Title</option>
                    <option value="genres">Genres</option>
                    <option value="director">Director</option>
                </select>
            <label htmlFor="query">
                Search:
            </label>
            <input
                type="text"
                id="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">
                Submit
            </button>
        </form>
        </div>
    );
}

export default Search;