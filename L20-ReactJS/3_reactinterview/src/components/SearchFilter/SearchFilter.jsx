import React, { useState } from "react";

function SearchFilter() {
    const [query, setQuery] = useState("");
    const names = ["Alice", "Bob", "Charlie", "David", "Edward"];

    const filteredNames = names.filter((name) =>
        name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {filteredNames.length > 0 ? (
                    filteredNames.map((name) => <li key={name}>{name}</li>)
                ) : (
                    <li>No results found</li>
                )}
            </ul>
        </div>
    );
}

export default SearchFilter;