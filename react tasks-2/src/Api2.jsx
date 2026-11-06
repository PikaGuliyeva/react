
import { useState, useEffect } from "react";
import {jokes} from "./db";

const API_URL = "https://official-joke-api.appspot.com/random_joke";

function JokeDemo() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setLoading(true);

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.setup + " " + data.punchline);
        setLoading(false);
      });

  }, [count]);

  return (
    <div
      style={{
        maxWidth: "420px",
        margin: "60px auto",
        padding: "25px",
        backgroundColor: "#f8fafc",
        border: "2px solid #e2e8f0",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        fontFamily: "Arial, sans-serif",
        textAlign: "center"
      }}
    >
      <h1>Random Joke Generator</h1>

      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        {loading ? (
          <p>Zarafat yoldadır, gözləyin...</p>
        ) : (
          <p>{joke}</p>
        )}
      </div>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          backgroundColor: "#2563eb",
          color: "#fff",
          padding: "12px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          marginTop: "20px"
        }}
      >
        Başqa Zarafat Gətir
      </button>
    </div>
  );
}

export default JokeDemo;
