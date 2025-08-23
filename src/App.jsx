import { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

// ================= RANDOM STRING GENERATOR =================
function RandomGenerator() {
  const [output, setOutput] = useState("");

  const generateString = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 12; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setOutput(result);
  };

  return (
    <div className="w-full flex flex-col items-center gap-12">
      {/* Main Card */}
      <div className="glass-card max-w-lg w-full p-10 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl transform transition hover:-translate-y-2 hover:shadow-3xl">
        <h2 className="text-3xl font-bold mb-6 text-white text-center tracking-wide">
          Random String Generator
        </h2>
        <button
          onClick={generateString}
          className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl shadow-lg text-white font-semibold text-lg hover:scale-105 hover:shadow-2xl transition transform"
        >
          Generate
        </button>
      </div>

      {/* Output Card */}
      {output && (
        <div className="glass-card max-w-lg w-full p-6 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl text-center transform transition hover:-translate-y-1 hover:shadow-3xl">
          <p className="text-lg font-mono text-white">{output}</p>
        </div>
      )}
    </div>
  );
}

// ================= TRANSLATOR =================
function Translate() {
  const [input, setInput] = useState("");
  const [translated, setTranslated] = useState("");

  const handleTranslate = () => {
    if (!input.trim()) return;
    setTranslated("🌐 Sample translated text (replace with API later)");
  };

  return (
    <div className="w-full flex flex-col items-center gap-12">
      {/* Main Card */}
      <div className="glass-card max-w-lg w-full p-10 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl transform transition hover:-translate-y-2 hover:shadow-3xl">
        <h2 className="text-3xl font-bold mb-6 text-white text-center tracking-wide">
          Translator
        </h2>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-4 rounded-xl bg-black/20 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          placeholder="Enter text..."
          rows="4"
        />
        <button
          onClick={handleTranslate}
          className="w-full mt-4 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl shadow-lg text-white font-semibold text-lg hover:scale-105 hover:shadow-2xl transition transform"
        >
          Translate
        </button>
      </div>

      {/* Output Card */}
      {translated && (
        <div className="glass-card max-w-lg w-full p-6 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl text-center transform transition hover:-translate-y-1 hover:shadow-3xl">
          <p className="text-lg text-white">{translated}</p>
        </div>
      )}
    </div>
  );
}

// ================= APP COMPONENT =================
export default function App() {
  return (
    <div className="min-h-screen w-full relative bg-gradient-to-b from-gray-900 via-purple-900 to-black overflow-hidden flex flex-col items-center">
      {/* Floating particles background */}
      <ParticlesBackground />

      {/* Navigation Bar */}
      <nav className="fixed top-8 left-8 bg-black/30 backdrop-blur-3xl p-4 rounded-2xl shadow-xl z-50 flex flex-col gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg font-semibold text-white transition ${
              isActive ? "bg-purple-600 shadow-md" : "hover:bg-white/10"
            }`
          }
        >
          Generator
        </NavLink>
        <NavLink
          to="/translate"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg font-semibold text-white transition ${
              isActive ? "bg-purple-600 shadow-md" : "hover:bg-white/10"
            }`
          }
        >
          Translator
        </NavLink>
      </nav>

      {/* Main Content */}
      <main className="pt-32 flex flex-col items-center w-full gap-16 z-10 relative">
        <Routes>
          <Route path="/" element={<RandomGenerator />} />
          <Route path="/translate" element={<Translate />} />
        </Routes>
      </main>
    </div>
  );
}

// ================= PARTICLES BACKGROUND =================
function ParticlesBackground() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.id = "particleCanvas";
    canvas.style.position = "fixed";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = 0;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    const particles = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.2)";
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
      }
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.removeChild(canvas);
    };
  }, []);

  return null;
}