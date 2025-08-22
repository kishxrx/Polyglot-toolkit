import { useState, useCallback } from "react";

export default function Translator() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");

  const handleTranslate = useCallback(() => {
    setTranslated(text.split("").reverse().join("")); // temporary mock translation
  }, [text]);

  return (
    <div className="p-6 border rounded-lg bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-4">Translator</h2>
      <textarea
        className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleTranslate}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Translate
      </button>
      {translated && (
        <p className="mt-4 p-3 border rounded-lg bg-gray-100">{translated}</p>
      )}
    </div>
  );
}