import "../index.css";

function Header() {
  return (
    <nav className="relative flex items-center px-6 mt-8">
      <span className="material-symbols-outlined text-3xl cursor-pointer hover:opacity-70 transition-opacity">
        menu
      </span>
      <h1 className="absolute left-1/2 -translate-x-1/2 font-bodoni tracking-widest font-semi-bold text-4xl text-center">
        AXELERATE
      </h1>
    </nav>
  );
}

export default Header;


