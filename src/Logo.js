function Logo() {
  return (
    <img
      className="max-h-14 min-w-48 imageclass"
      src={process.env.PUBLIC_URL + "/logo.png"}
      alt="Music App Logo"
    />
  );
}

export default Logo;
