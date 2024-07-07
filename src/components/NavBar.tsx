import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="px-10 py-3 w-full bg-gray-800 text-white">
      <Link to="/" className="text-3xl font-bold">
        Pokémon Team Builder
      </Link>
    </div>
  );
}

export default NavBar;
