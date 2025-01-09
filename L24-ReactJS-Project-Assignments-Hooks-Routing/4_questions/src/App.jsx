import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const words = [
  "coding",
  "data",
  "cpp",
  "java",
  "python",
  "promise",
  "blocks",
  "dance",
  "page",
  "react",
  "node",
];

function generateSentences() {
  const data = [];
  for (let i = 0; i < 50; i++) {
    let a = "";
    for (let j = 0; j < 5; j++) {
      const index = Math.floor(Math.random() * words.length);
      a += words[index] + (j < 4 ? " " : "");
    }

    data.push(a);
  }
  return data;
}

const App = () => {
  const data = generateSentences();
  const [sentences, setSentences] = useState(data);
  const [input, setInput] = useState("");

  useEffect(()=>{
    if(!input) return setSentences(data);
    let updatedData = sentences.filter(s => s.includes(input));
    setSentences(updatedData);
  }, [input]);

  return (
    <div>
      <input
        type="text"
        placeholder="Type to search"
        onChange={(e) => setInput(e.target.value)}
      />

      <br />
      <br />
      Random Words List
      {sentences.map((s, index) => {
        return <li key={index}>{s}</li>;
      })}
    </div>
  );
};

export default App;
