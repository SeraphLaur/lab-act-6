import MusicItem from "./MusicItem";
import Search from "./Search";
import Filter from "./Filter";
import NumberResult from "./NumberResult";

function MusicList({
  musics,
  addToPlaylist,
  filter,
  setFilter,
  sortBy,
  setSortBy,
  query,
  setQuery,
}) {
  return (
    <div className=" text-white py-7 pl-5 bg-slate-700 min-h-full">
      <h2 className="text-3xl font-bold pb-4">Music List</h2>

      <Search query={query} setQuery={setQuery} />

      <Filter
        filter={filter}
        setFilter={setFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <NumberResult musics={musics} />

      <ul className="mt-4 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 gap-4">
        {musics.map((music) => (
          <MusicItem
            key={music.id}
            music={music}
            addToPlaylist={addToPlaylist}
          />
        ))}
      </ul>
    </div>
  );
}

export default MusicList;
