// components/SearchBar.js
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search for dishes..."
        value={query}
        onChange={handleSearch}
        className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-yellow-500"
      />
    </div>
  );
};

export default SearchBar;