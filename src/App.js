import Header from "./Header";
import Main from "./Main";
import "./styles.css";
import { useState } from "react";
const tempMusicData = [
  {
    id: 1,
    title: "Midnight Dreams",
    artist: "Luna Sparks",
    genre: "Pop",
  },
  {
    id: 2,
    title: "Rebel Road",
    artist: "Echo Rebels",
    genre: "Rock",
  },
  {
    id: 3,
    title: "Saxophone Serenade",
    artist: "Smooth Groove Trio",
    genre: "Jazz",
  },
  {
    id: 4,
    title: "Electric Heartbeat",
    artist: "Neon Pulse",
    genre: "Electronic",
  },
  {
    id: 5,
    title: "Rainy Nights",
    artist: "Misty Melodies",
    genre: "Pop",
  },
  {
    id: 6,
    title: "Wildfire",
    artist: "Blaze Brigade",
    genre: "Rock",
  },
  {
    id: 7,
    title: "Blue Skies",
    artist: "Sunset Ensemble",
    genre: "Jazz",
  },
  {
    id: 8,
    title: "Galactic Groove",
    artist: "Star Strut",
    genre: "Electronic",
  },
  {
    id: 9,
    title: "City Lights",
    artist: "Urban Beat Collective",
    genre: "Pop",
  },
  {
    id: 10,
    title: "Thunder Road",
    artist: "Storm Seekers",
    genre: "Rock",
  },
  {
    id: 11,
    title: "Smooth Sailing",
    artist: "Jazz Horizon Quartet",
    genre: "Jazz",
  },
  {
    id: 12,
    title: "Digital Dreams",
    artist: "Cyber Symphony",
    genre: "Electronic",
  },
  {
    id: 13,
    title: "Sunset Serenade",
    artist: "Twilight Trio",
    genre: "Pop",
  },
  {
    id: 14,
    title: "Echoes of Eternity",
    artist: "Nova Vortex",
    genre: "Rock",
  },
  {
    id: 15,
    title: "Moonlit Melodies",
    artist: "Starry Night Symphony",
    genre: "Jazz",
  },
  {
    id: 16,
    title: "Neon Nights",
    artist: "Electro Neon",
    genre: "Electronic",
  },
  {
    id: 17,
    title: "Summer Breeze",
    artist: "Seaside Sounds",
    genre: "Pop",
  },
  {
    id: 18,
    title: "Revolution Road",
    artist: "Rebel Rhythms",
    genre: "Rock",
  },
  {
    id: 19,
    title: "Cool Jazz Cafe",
    artist: "Groove Masters",
    genre: "Jazz",
  },
  {
    id: 20,
    title: "Digital Dusk",
    artist: "Techno Twilight",
    genre: "Electronic",
  },
];

const tempPlaylist = [
  {
    id: 1,
    title: "Babaero",
    artist: "Hev Abi",
    genre: "Pop",
    rating: 4,
  },
  {
    id: 2,
    title: "Di Makatulog",
    artist: "SUD",
    genre: "Rock",
    rating: 5,
  },
];
function App() {
  const [query, setQuery] = useState("");
  const [musics, setMusic] = useState(tempMusicData);
  const [playlist, setPlaylist] = useState(tempPlaylist);
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("title");

  const addToPlaylist = (music) => {
    setPlaylist([...playlist, music]);
  };

  const filtered = musics
    .filter((music) => {
      if (filter === "all") return true;
      if (filter === "pop") return music.genre === "Pop";
      if (filter === "rock") return music.genre === "Rock";
      if (filter === "jazz") return music.genre === "Jazz";
    })
    .filter((music) => {
      return music.title.toLowerCase().includes(query.toLowerCase());
    })
    .sort((a, b) => {
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      } else if (sortBy === "artist") {
        return a.artist.localeCompare(b.artist);
      } else if (sortBy === "genre") {
        return a.genre.localeCompare(b.genre);
      }
    });

  const removeFromPlaylist = (id) => {
    setPlaylist(playlist.filter((music) => music.id !== id));
  };

  return (
    <div>
      <Header />
      <Main
        musics={filtered}
        playlist={playlist}
        filter={filter}
        setFilter={setFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
        query={query}
        setQuery={setQuery}
        addToPlaylist={addToPlaylist}
        onRemove={removeFromPlaylist}
      />
    </div>
  );
}

export default App;
