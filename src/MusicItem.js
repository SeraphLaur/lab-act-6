function MusicItem({ music, addToPlaylist }) {
  const handleClick = () => {
    addToPlaylist(music);
  };

  return (
    <li
      className="bg-slate-600 hover:bg-slate-800 p-3 rounded-lg"
      key={music.id}
    >
      <span className="text-md font-bold">{music.title}</span> by {music.artist}{" "}
      ({music.genre}) {"     "}
      <button
        className="font-bold bg-slate-500 hover:bg-slate-400 p-1 rounded-md"
        onClick={handleClick}
      >
        Add to Playlist
      </button>
    </li>
  );
}

export default MusicItem;
