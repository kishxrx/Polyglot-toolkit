import { useState } from "react";

export default function RandomString() {
  const [randomStr, setRandomStr] = useState("");

  const generateString = () => {
    const result = Math.random().toString(36).substring(2, 10);
    setRandomStr(result);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 space-y-4">
      <h1 className="text-3xl font-bold">Random String Generator</h1>
      <button onClick={generateString}>Generate</button>
      {randomStr && (
        <p className="mt-4 text-xl text-yellow-400">{randomStr}</p>
      )}
    </div>
  );
}