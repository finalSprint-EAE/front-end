import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/results', { state: { query } });
    };

    return (
        <>
        <h1>CineMart</h1>
        <form onSubmit={handleSubmit}>
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
        </>
    );
}

export default Search;