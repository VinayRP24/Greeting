import './App.css';
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const formValid = name.length > 0;
    if (!formValid) {
      return;
    }
    setGreeting(`hello, ${name}`);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <button type="submit">submit</button>
      </form>
      {greeting}
    </div>
  );
}

export default App;
