import { useState, useCallback } from "react";

export default function RandomString() {
  const [randomStr, setRandomStr] = useState("");

  const generateRandom = useCallback(() => {
    setRandomStr(Math.random().toString(36).substring(2, 10));
  }, []);

  return (
    <div className="p-6 border rounded-lg bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-4">Random String Generator</h2>
      <button
        onClick={generateRandom}
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Generate
      </button>
      {randomStr && (
        <p className="mt-4 p-3 border rounded-lg bg-gray-100">{randomStr}</p>
      )}
    </div>
  );
}