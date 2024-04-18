function Search({ query, setQuery }) {
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <input
      className="mb-4 bg-slate-600 text-white p-3 w-60"
      type="text"
      placeholder="Search music..."
      value={query}
      onChange={handleInputChange}
    />
  );
}

export default Search;
