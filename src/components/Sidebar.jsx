import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">Productos</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
