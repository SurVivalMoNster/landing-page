import React from "react";

const DISCORD_LINK = "https://discord.gg/JZARrGC8g6"; // ← replace with your real invite link

const HeroSection: React.FC = () => {
  const handleGetStarted = () => {
    window.open(DISCORD_LINK, "_blank");
  };

  const handleViewPricing = () => {
    const section = document.getElementById("minecraft-plans");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 relative">
      
      {/* CONTENT */}
      <div className="max-w-4xl z-10">

        {/* TITLE */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Cherry Nodes
        </h1>

        {/* SUBTITLE */}
        <p className="text-lg md:text-xl text-gray-300 font-bold mb-10">
          High Performance Minecraft Hosting — Fast, Reliable, Affordable
        </p>

        {/* BUTTON GROUP */}
        <div className="flex flex-wrap gap-4 justify-center">

          {/* GET STARTED */}
          <button
            onClick={handleGetStarted}
            className="minecraft-button px-8 py-3 text-lg"
          >
            Get Started
          </button>

          {/* VIEW PRICING */}
          <button
            onClick={handleViewPricing}
            className="border-2 border-pink-500 px-8 py-3 rounded-lg font-extrabold hover:bg-pink-500/20 transition"
          >
            View Pricing
          </button>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
