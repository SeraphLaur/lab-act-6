function PlaylistItem({ music, onRemove }) {
  const handleRemoveClick = () => {
    onRemove(music.id);
  };
  return (
    <li key={music.id}>
      {music.title} by {music.artist}
      <button onClick={handleRemoveClick} className="ml-2 text-red-500">
        X
      </button>
    </li>
  );
}

export default PlaylistItem;
