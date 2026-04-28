import { useState } from "react";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  // TODO: podepnij ten stan do przycisku i kontenera (Faza 2)
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>💰 Budget Tracker</h1>
        {/* TODO: onClick powinien przełączać isDark */}
        <button className="btn btn-dark-toggle">Dark Mode</button>
      </header>

      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
