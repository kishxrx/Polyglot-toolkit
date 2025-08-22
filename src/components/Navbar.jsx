import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="font-bold text-xl">Text & String App</h1>
      <div className="space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-semibold" : "hover:text-gray-300"
          }
        >
          Translator
        </NavLink>
        <NavLink
          to="/random"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-semibold" : "hover:text-gray-300"
          }
        >
          Random String
        </NavLink>
      </div>
    </nav>
  );
}