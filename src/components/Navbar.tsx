import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur border-b border-pink-500/40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-extrabold text-white">
          Shadow Nodes
        </Link>

        <div className="hidden md:flex gap-6 text-gray-300 font-bold">
          <a href="#popular-games">Games</a>
          <a href="#minecraft-plans">Minecraft Plans</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
