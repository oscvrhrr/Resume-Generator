import "./App.css";
import Dashboard from "./components/Dashboard";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };

  return (
    <>
      {theme === "light" ? (
        <div style={{ backgroundColor: "rgb(226 232 240)"}}>
          <button onClick={handleTheme} className="bg-zinc-700 hover:bg-zinc-600 text-white border my-6 ml-16 rounded-3xl font-bold px-4 py-2">Dark theme</button>
          <Dashboard />
        </div>
      ) : (
        <div style={{ backgroundColor: "rgb(39 39 42)"}}>
          <button onClick={handleTheme} className="bg-slate-200 hover:bg-slate-300 border my-6 ml-16 rounded-3xl font-bold px-4 py-2">Light theme</button>
          <Dashboard />
        </div>
      )}
    </>
  );
}

export default App;
