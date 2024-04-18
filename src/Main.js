// Main.js

import React, { useState } from "react";
import MusicList from "./MusicList";
import Playlist from "./Playlist";

function Main({
  musics,
  playlist,
  addToPlaylist,
  filter,
  setFilter,
  sortBy,
  setSortBy,
  query,
  setQuery,
  onRemove,
}) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 min-h-screen">
      <div className=" md:col-span-1 lg:col-span-1">
        <Playlist playlist={playlist} onRemove={onRemove} />
      </div>

      <div className="md:col-span-2 lg:col-span-4">
        <MusicList
          musics={musics}
          addToPlaylist={addToPlaylist}
          filter={filter}
          setFilter={setFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
          query={query}
          setQuery={setQuery}
        />
      </div>
    </div>
  );
}

export default Main;
