import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

function RandomGenerator() {
  const [output, setOutput] = useState("");

  const generateString = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 12; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setOutput(result);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Glass Card */}
      <div className="glass-card text-center">
        <h2 className="text-2xl font-semibold mb-6">Random String Generator</h2>
        <button
          onClick={generateString}
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 rounded-lg shadow-lg transition"
        >
          Generate
        </button>
      </div>

      {/* Output BELOW card in separate translucent glossy card */}
      {output && (
        <div className="mt-6 glass-card text-center">
          <p className="text-lg font-mono tracking-wide">{output}</p>
        </div>
      )}
    </div>
  );
}

function Translate() {
  const [translated, setTranslated] = useState("");

  const handleTranslate = () => {
    setTranslated("Sample translated text (replace with API later)");
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Glass Card */}
      <div className="glass-card text-center">
        <h2 className="text-2xl font-semibold mb-6">Translator</h2>
        <textarea
          className="w-full p-3 rounded-lg bg-black/30 text-white border border-white/10"
          placeholder="Enter text..."
          rows="4"
        ></textarea>
        <button
          onClick={handleTranslate}
          className="mt-4 px-6 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 rounded-lg shadow-lg transition"
        >
          Translate
        </button>
      </div>

      {/* Output BELOW card */}
      {translated && (
        <div className="mt-6 glass-card text-center">
          <p>{translated}</p>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <>
      {/* ✅ Premium Glassy Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-3xl shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center gap-12">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive
                  ? "text-white bg-gradient-to-r from-indigo-500 to-pink-500 shadow-md"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`
            }
          >
            Generator
          </NavLink>
          <NavLink
            to="/translate"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive
                  ? "text-white bg-gradient-to-r from-indigo-500 to-pink-500 shadow-md"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`
            }
          >
            Translator
          </NavLink>
        </div>
      </nav>

      {/* ✅ Fully centered page content, no scrolling */}
      <main className="pt-32 w-full flex justify-center items-center min-h-screen overflow-hidden px-6">
        <div className="max-w-3xl w-full flex flex-col items-center">
          <Routes>
            <Route path="/" element={<RandomGenerator />} />
            <Route path="/translate" element={<Translate />} />
          </Routes>
        </div>
      </main>
    </>
  );
}