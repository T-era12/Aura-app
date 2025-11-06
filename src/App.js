import React, { useState, useEffect } from "react";
import AuraLogo from "./assets/AuraLogo.png"; // ✅ make sure this file exists

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

  // 🔁 Mood auto-shift
  useEffect(() => {
    const interval = setInterval(() => {
      const keys = Object.keys(archetypes);
      const nextIndex = Math.floor(Math.random() * keys.length);
      setCurrentArchetype(keys[nextIndex]);
    }, 6000);
    return () => clearInterval(interval);
  }, [archetypes]);

  const current = archetypes[currentArchetype];

  // 🌙 UI
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-indigo-300 to-indigo-500 flex flex-col items-center justify-start text-center p-8">
      {/* 🌸 Floating Logo */}
      <img
        src={AuraLogo}
        alt="AURA Logo"
        className="w-24 mb-4 animate-pulse drop-shadow-lg"
      />

      {/* ✨ Header */}
      <h1 className="text-5xl font-extrabold mb-2 text-white tracking-wide drop-shadow-lg">
        AURA Dashboard
      </h1>
      <p className="text-lg text-indigo-100 mb-8">
        Welcome to your mood-shifting experience 🌙
      </p>

      {/* 🔹 Tab Navigation */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {["dashboard", "checkout", "about"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-lg font-semibold transition ${
              activeTab === tab
                ? "bg-white text-indigo-600 shadow-lg scale-105"
                : "bg-indigo-200 text-indigo-800 hover:bg-indigo-300"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* 🔸 Dashboard Tab */}
      {activeTab === "dashboard" && (
        <div className="bg-white/90 shadow-xl rounded-3xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-2 text-indigo-700">
            {current.name}
          </h2>
          <p className="text-gray-700 mb-4">{current.message}</p>
          <p className="font-bold text-gray-900">{current.price}</p>
          <button
            className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition"
            onClick={() => alert("Sync Your Soul ritual started!")}
          >
            Start Sync Your Soul
          </button>

          {/* 🛍 Shop Now Button */}
          <button
            className="mt-4 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-2 px-6 rounded-xl shadow-lg transition-transform transform hover:scale-105"
            onClick={() =>
              window.open("https://yourshopurl.com", "_blank")
            }
          >
            🛍️ Shop Now
          </button>
        </div>
      )}

      {/* 🛒 Checkout Tab */}
      {activeTab === "checkout" && (
        <div className="bg-white/90 shadow-xl rounded-3xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
            Checkout
          </h2>
          <p className="text-gray-700 mb-2">
            Selected Archetype: <strong>{current.name}</strong>
          </p>
          <p className="text-gray-700 mb-4">Price: {current.price}</p>
          <p className="text-sm text-gray-500 mb-4">
            Taxes and shipping will be automatically calculated based on your
            location.
          </p>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition"
            onClick={() => alert("Redirecting to secure payment...")}
          >
            Proceed to Payment
          </button>
        </div>
      )}

      {/* ℹ️ About Tab */}
      {activeTab === "about" && (
        <div className="bg-white/90 shadow-xl rounded-3xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
            About AURA
          </h2>
          <p className="text-gray-700">
            AURA is an emotional wellness experience that adapts to your mood
            and offers ritual-based self-care inspired by archetypal balance.
          </p>
        </div>
      )}
    </div>
  );
}
