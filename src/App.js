import React, { useState, useEffect } from "react";

export default function App() {
  // 🌿 Archetype data
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
    caregiver: {
      name: "The Burned-Out Caregiver",
      message: "You’ve been giving too much. It’s time to receive.",
      price: "$50",
    },
    explorer: {
      name: "The Restless Explorer",
      message:
        "The world is calling — but remember, discovery begins within.",
      price: "$53",
    },
    shadow: {
      name: "The Shadow Dweller",
      message: "In your darkness lies your greatest rebirth.",
      price: "$56",
    },
  };

  // 🌀 State setup
  const [currentArchetype, setCurrentArchetype] = useState("grounded");
  const [activeTab, setActiveTab] = useState("dashboard");

  // 🔁 Mood auto-shift every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const keys = Object.keys(archetypes);
      const nextIndex = Math.floor(Math.random() * keys.length);
      const nextArchetype = keys[nextIndex];
      setCurrentArchetype(nextArchetype);
    }, 5000);

    return () => clearInterval(interval);
  }, [archetypes]);

  const current = archetypes[currentArchetype];

  // 🌙 UI
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex flex-col items-center justify-start text-center p-6">
      {/* 🔮 Gradient Logo */}
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-4 text-white text-4xl font-extrabold shadow-lg animate-pulse">
        A
      </div>

      <h1 className="text-4xl font-bold mb-4 text-gray-800">AURA Dashboard</h1>
      <p className="text-lg text-gray-600 mb-6">
        Welcome to your mood-shifting experience 🌙
      </p>

      {/* 🔹 Tab Navigation */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {["dashboard", "checkout", "about"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeTab === tab
                ? "bg-indigo-500 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* 🔸 Dashboard Tab */}
      {activeTab === "dashboard" && (
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-2">{current.name}</h2>
          <p className="text-gray-700 mb-4">{current.message}</p>
          <p className="font-bold text-gray-900">{current.price}</p>
          <div className="flex flex-col gap-4 mt-6">
            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md"
              onClick={() => alert("Sync Your Soul ritual started!")}
            >
              Start Sync Your Soul
            </button>
            <button
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md"
              onClick={() => alert("Opening the AURA shop...")}
            >
              Shop Now
            </button>
          </div>
        </div>
      )}

      {/* 🛒 Checkout Tab */}
      {activeTab === "checkout" && (
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
          <p className="text-gray-700 mb-2">
            Selected Archetype: <strong>{current.name}</strong>
          </p>
          <p className="text-gray-700 mb-4">Price: {current.price}</p>
          <p className="text-sm text-gray-500 mb-4">
            Taxes and shipping will be automatically calculated at checkout
            based on your location.
          </p>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md"
            onClick={() => alert("Redirecting to secure payment...")}
          >
            Proceed to Payment
          </button>
        </div>
      )}

      {/* ℹ️ About Tab */}
      {activeTab === "about" && (
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-2">About AURA</h2>
          <p className="text-gray-700">
            AURA is an emotional wellness experience that adapts to your mood
            and offers ritual-based self-care inspired by archetypal balance.
          </p>
        </div>
      )}
    </div>
  );
}
