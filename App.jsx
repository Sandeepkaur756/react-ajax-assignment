import { useState } from "react";
import ConceptCard from "./components/ConceptCard";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";

export default function App() {
  const [selected, setSelected] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const concepts = [
    {
      id: 1,
      title: "What is ReactJS?",
      body: "React is an open-source JavaScript library by Meta for building user interfaces out of reusable components.",
    },
    {
      id: 2,
      title: "Why is React used?",
      body: "Component-based, declarative, fast (Virtual DOM), one-way data flow, and backed by a huge ecosystem.",
    },
    {
      id: 3,
      title: "Components & JSX",
      body: "Components are JS functions returning UI. JSX lets you write HTML-like syntax inside JavaScript.",
    },
    {
      id: 4,
      title: "Props & State",
      body: "Props are read-only inputs from a parent. State is data owned by a component that can change over time.",
    },
    {
      id: 5,
      title: "Project Structure",
      body: "src/ holds main.jsx (entry), App.jsx (root), and components/ for reusable pieces.",
    },
    {
      id: 6,
      title: "Event Handling",
      body: "React uses camelCase events (onClick, onChange) and you pass a function, not a string.",
    },
  ];

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <header>
        <h1>⚛️ React Intro Demo</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <main>
        <Greeting name="Student" />

        <section className="concepts">
          <h2>Core Concepts</h2>
          {concepts.map((c) => (
            <ConceptCard
              key={c.id}
              title={c.title}
              body={c.body}
              isOpen={selected === c.id}
              onToggle={() => setSelected(selected === c.id ? null : c.id)}
            />
          ))}
        </section>

        <Counter />
      </main>

      <footer>
        <p>Built with React + Vite — demonstrating components, JSX, props, state & events.</p>
      </footer>
    </div>
  );
}