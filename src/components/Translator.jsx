import { useState } from "react";

export default function Translator() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");

  const handleTranslate = () => {
    setTranslated(text.split("").reverse().join("")); // fake translate for test
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 space-y-4">
      <h1 className="text-3xl font-bold">Translator</h1>
      <textarea
        className="w-80 h-28 p-2 rounded bg-gray-700 text-white"
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleTranslate}>Translate</button>
      {translated && (
        <p className="mt-4 text-xl text-green-400">{translated}</p>
      )}
    </div>
  );
}