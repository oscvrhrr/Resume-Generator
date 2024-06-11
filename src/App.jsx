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
          <button onClick={handleTheme} className="bg-zinc-700 text-white border my-6 mx-8 rounded-2xl font-bold p-1">Dark theme</button>
          <Dashboard />
        </div>
      ) : (
        <div style={{ backgroundColor: "rgb(39 39 42)"}}>
          <button onClick={handleTheme} className="bg-slate-200 border my-6 mx-8 rounded-2xl font-bold p-1">Light theme</button>
          <Dashboard />
        </div>
      )}
    </>
  );
}

export default App;
