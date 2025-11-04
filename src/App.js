import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

// Example icons — replace with your own imports if needed
import { FaLeaf, FaStar, FaCompass, FaFire, FaMoon, FaHeart, FaCloud, FaGlobe } from "react-icons/fa";

export default function App() {
  const archetypes = {
    grounded: {
      name: "The Grounded Soul",
      gradient: "from-green-200 to-beige-100",
      message: "You’ve found your center. Let’s help you stay rooted in peace.",
      icon: <FaLeaf />,
      box: "Sage & Sand Box",
      price: "$49",
      contents: ["Cedarwood scent", "Weighted stone", "Guided grounding ritual"],
    },
    creative: {
      name: "The Creative Spark",
      gradient: "from-lilac-300 to-coral-200",
      message: "Your ideas are blooming. Let’s feed the fire and flow.",
      icon: <FaStar />,
      box: "Lilac & Coral Box",
      price: "$55",
      contents: ["Citrus & Jasmine scent", "Kinetic sand tool", "Creative spark ritual"],
    },
    dreamer: {
      name: "The Dream Builder",
      gradient: "from-indigo-400 to-sky-300",
      message: "Your dreams are shaping into form. Let’s build them from balance, not burnout.",
      icon: <FaGlobe />,
      box: "Indigo Sky Box",
      price: "$52",
      contents: ["Lavender scent", "Textured intention cards", "Blueprints of hope ritual"],
    },
    caregiver: {
      name: "The Burned-Out Caregiver",
      gradient: "from-rose-200 to-cream-100",
      message: "You’ve been giving too much. It’s time to receive.",
      icon: <FaFire />,
      box: "Rose & Cream Box",
      price: "$50",
      contents: ["Vanilla & Honey scent", "Mini blanket", "Refill your cup ritual"],
    },
    lonely: {
      name: "The Lonely Heart",
      gradient: "from-dusty-rose to-mauve-haze",
      message: "You’re not alone — even solitude can be sacred.",
      icon: <FaHeart />,
      box: "Dusty Rose Box",
      price: "$48",
      contents: ["Rose & Patchouli scent", "Comfort crystal", "Gentle return ritual"],
    },
    explorer: {
      name: "The Restless Explorer",
      gradient: "from-teal-300 to-amber-200",
      message: "The world is calling — but remember, discovery begins within.",
      icon: <FaCompass />,
      box: "Teal & Amber Box",
      price: "$53",
      contents: ["Lemongrass scent", "Braided cord", "Wander within ritual"],
    },
    overloaded: {
      name: "The Overloaded Mind",
      gradient: "from-mist-blue-200 to-silver-300",
      message: "Let’s quiet the noise — your mind deserves stillness, not silence.",
      icon: <FaCloud />,
      box: "Mist & Silver Box",
      price: "$51",
      contents: ["Eucalyptus & Mint scent", "Cooling smooth object", "Calm reset ritual"],
    },
    shadow: {
      name: "The Shadow Dweller",
      gradient: "from-charcoal-500 to-midnight-violet",
      message: "In your darkness lies your greatest rebirth.",
      icon: <FaMoon />,
      box: "Charcoal Violet Box",
      price: "$56",
      contents: ["Myrrh scent", "Sandpaper contrast stone", "Embrace the eclipse ritual"],
    },
  };

  const [currentArchetype, setCurrentArchetype] = useState("grounded");
  const [activeTab, setActiveTab] = useState("dashboard");
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      const keys = Object.keys(archetypes);
      const next = keys[Math.floor(Math.random() * keys.length)];
      setCurrentArchetype(next);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = archetypes[currentArchetype];

  return (
    <motion.div
      className={`min-h-screen flex flex-col items-center justify-start text-center bg-gradient-to-br ${current.gradient} p-8`}
      animate={controls}
    >
      <h1 className="text-4xl font-bold mb-4">🌙 AURA MoodShift Dashboard</h1>

      {/* Navigation Tabs */}
      <div className="flex gap-3 mb-6">
        {["dashboard", "reviews", "social", "payment", "shipping"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl border ${
              activeTab === tab ? "bg-black text-white" : "bg-white text-gray-700"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {activeTab === "dashboard" && (
        <>
          <div className="flex flex-col items-center mb-6">
            <div className="text-3xl mb-2">{current.icon}</div>
            <h2 className="text-2xl font-semibold">{current.name}</h2>
            <p className="max-w-xl mt-2 text-gray-700">{current.message}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.keys(archetypes).map((key) => {
              const a = archetypes[key];
              return (
                <motion.div
                  key={key}
                  className="bg-white/70 p-4 rounded-2xl shadow-md text-center border border-gray-200"
                >
                  <div className="text-2xl mb-2">{a.icon}</div>
                  <p className="font-bold">{a.box}</p>
                  <p>{a.price}</p>
                  <ul className="text-sm mt-2 list-disc list-inside text-left">
                    {a.contents.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <button className="mt-3 bg-black text-white px-4 py-1 rounded-xl">Add to Cart</button>
                </motion.div>
              );
            })}
          </div>
        </>
      )}
    </motion.div>
  );
        }
