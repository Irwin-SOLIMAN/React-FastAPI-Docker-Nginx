import "./App.css";
import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  function getbackEndMessage() {
    fetch("http://localhost:80/message")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }

  return (
    <div className="container">
      <h1>🚀 React + FastAPI + DockerCompose + Nginx</h1>
      <p>This is a simple proof of concept</p>
      <button onClick={getbackEndMessage}>🔄 Get backend message</button>
      <div className="message-box">{message}</div>
      <button onClick={() => setMessage("")}>❌ clear</button>
    </div>
  );
}

export default App;
