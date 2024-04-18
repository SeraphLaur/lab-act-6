function Filter({ filter, setFilter, sortBy, setSortBy }) {
  return (
    <div>
      <label>
        Filter by Genre:
        <select
          className="bg-slate-600 text-white mx-2"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="jazz">Jazz</option>
        </select>
      </label>
      <label>
        Sort by:
        <select
          className="bg-slate-600 text-white mx-2"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="artist">Artist</option>
          <option value="genre">Genre</option>
        </select>
      </label>
    </div>
  );
}

export default Filter;
