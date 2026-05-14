"use client";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-sky-400 text-slate-900 flex items-center justify-center font-bold rounded-full">
            AN
          </div>
          <span className="text-sm font-medium">Amna Nadeem</span>
        </div>

        {/* Menu */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-sky-400">Home</a>
          <a href="#" className="hover:text-sky-400">About</a>
          <a href="#" className="hover:text-sky-400">Projects</a>
          <a href="#" className="hover:text-sky-400">Contact</a>
        </div>

      </div>
    </header>
  );
};

export default Header;