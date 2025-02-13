import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-200 text-white p-4 flex flex-col gap-4 shadow-md min-h-screen">
      <ul className="space-y-4">
        <li className="bg-pink-950 p-3 rounded-lg text-center hover:bg-pink-800 transition">
          <Link to="/">Inventory</Link>
        </li>
        <li className="bg-pink-950 p-3 rounded-lg text-center hover:bg-pink-800 transition">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
