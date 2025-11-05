import React, { useState, useEffect } from "react";

export default function App() {
  const archetypes = {
    grounded: {
      name: "The Grounded Soul",
      message: "You’ve found your center. Let’s help you stay rooted in peace.",
      price: "$49",
    },
    creative: {
      name: "The Creative Spark",
      message: "Your ideas are blooming. Let’s feed the fire and flow.",
      price: "$55",
    },
    dreamer: {
      name: "The Dream Builder",
      message:
        "Your dreams are shaping into form. Let’s build them from balance, not burnout.",
      price: "$52",
    },
  };

  const [currentArchetype, setCurrentArchetype] = useState("grounded");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const keys = Object.keys(archetypes);
      const nextIndex = Math.floor(Math.random() * keys.length);
      const nextArchetype = keys[nextIndex];
      setCurrentArchetype(nextArchetype);
      setHistory((prev) => [
        ...prev.slice(-49),
        { archetype: nextArchetype, timestamp: new Date() },
      ]);
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const current = archetypes[currentArchetype];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">AURA Dashboard</h1>
      <p className="text-lg text-gray-600 mb-6">
        Welcome to your mood-shifting experience 🌙
      </p>

      <div className="bg-white shadow-lg rounded-2xl p-6 w-80">
        <h2 className="text-2xl font-semibold mb-2">{current.name}</h2>
        <p className="text-gray-700 mb-4">{current.message}</p>
        <p className="font-bold text-gray-900">{current.price}</p>
      </div>

      <button
        className="mt-8 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md"
        onClick={() => alert("Sync Your Soul ritual started!")}
      >
        Start Sync Your Soul
      </button>
    </div>
  );
}
