import PlaylistItem from "./PlaylistItem";

function Playlist({ playlist, onRemove }) {
  return (
    <div className="bg-slate-800 text-white py-7 pl-5  min-h-full">
      <h2 className="text-3xl font-bold pb-4">My Playlist</h2>
      <ul>
        {playlist.map((music) => (
          <PlaylistItem music={music} onRemove={onRemove} />
        ))}
      </ul>

      <p className="pt-4 italic">
        Found <strong>{playlist.length}</strong> songs in playlist
      </p>
    </div>
  );
}

export default Playlist;
