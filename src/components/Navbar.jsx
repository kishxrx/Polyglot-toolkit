import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-gray-800">Text & String App</h1>
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold border-b-2 border-blue-500"
                : "text-gray-600 hover:text-blue-400 transition"
            }
          >
            Translator
          </NavLink>
          <NavLink
            to="/random"
            className={({ isActive }) =>
              isActive
                ? "text-green-500 font-semibold border-b-2 border-green-500"
                : "text-gray-600 hover:text-green-400 transition"
            }
          >
            Random String
          </NavLink>
        </div>
      </div>
    </nav>
  );
}