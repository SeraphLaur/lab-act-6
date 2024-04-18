import Logo from "./Logo";
function Header() {
  return (
    <nav className="grid grid-cols-1  bg-slate-900 text-white py-5 pl-5 sticky top-0">
      <Logo />
    </nav>
  );
}

export default Header;
