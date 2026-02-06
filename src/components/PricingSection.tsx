import { Check } from "lucide-react";

const BUY_LINK = "https://discord.gg/JZARrGC8g6";

const plans = [
  /* ================= BUDGET ================= */

  {
    group: "Budget",
    name: "Dirt Plan",
    price: "₹39",
    features: ["2GB RAM", "50% CPU", "10GB Disk", "1 Backup", "1 Port", "1 Database"],
  },
  {
    group: "Budget",
    name: "Coal Plan",
    price: "₹60",
    features: ["4GB RAM", "100% CPU", "20GB Disk", "2 Backups", "2 Ports", "2 Databases"],
  },
  {
    group: "Budget",
    name: "Redstone Plan",
    price: "₹90",
    features: ["6GB RAM", "150% CPU", "30GB Disk", "3 Backups", "3 Ports", "3 Databases"],
  },
  {
    group: "Budget",
    name: "Diamond Plan",
    price: "₹120",
    features: ["8GB RAM", "200% CPU", "40GB Disk", "4 Backups", "4 Ports", "4 Databases"],
  },

  /* ================= STANDARD ================= */

  {
    group: "Standard",
    name: "Standard 2GB",
    price: "₹50",
    features: ["2GB RAM", "100% CPU", "20GB Disk", "2 Backups", "2 Ports", "2 Databases"],
  },
  {
    group: "Standard",
    name: "Standard 4GB",
    price: "₹80",
    features: ["4GB RAM", "200% CPU", "40GB Disk", "5 Backups", "5 Ports", "5 Databases"],
  },

  /* ================= ADVANCED ================= */

  {
    group: "Advanced",
    name: "Advanced Plan",
    price: "₹199",
    features: ["6GB RAM", "300% CPU", "60GB Disk", "7 Backups", "7 Ports", "7 Databases"],
    popular: true,
  },
  {
    group: "Advanced",
    name: "Premium Plan",
    price: "₹299",
    features: ["8GB RAM", "400% CPU", "80GB Disk", "10 Backups", "10 Ports", "10 Databases"],
  },

  /* ================= PREMIUM MC ================= */

  {
    group: "Premium MC",
    name: "Premium Silver",
    price: "₹199",
    features: ["8GB RAM", "400% CPU", "80GB Disk", "10 Backups", "10 Ports", "10 Databases"],
  },
  {
    group: "Premium MC",
    name: "Premium Gold",
    price: "₹299",
    features: ["12GB RAM", "600% CPU", "120GB Disk", "15 Backups", "15 Ports", "15 Databases"],
  },
  {
    group: "Premium MC",
    name: "Premium Platinum",
    price: "₹450",
    features: ["16GB RAM", "800% CPU", "160GB Disk", "20 Backups", "20 Ports", "20 Databases"],
  },
  {
    group: "Premium MC",
    name: "Premium Diamond",
    price: "₹599",
    features: ["24GB RAM", "1200% CPU", "240GB Disk", "30 Backups", "30 Ports", "30 Databases"],
  },
];

const groups = ["Budget", "Standard", "Advanced", "Premium MC"];

export default function PricingSection() {
  return (
    <section id="minecraft-plans" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-extrabold text-center mb-14">
          Cherry Nodes — Minecraft Plans
        </h2>

        {groups.map((group) => (
          <div key={group} className="mb-16">

            <h3 className="text-2xl font-extrabold text-pink-400 mb-8">
              {group}
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {plans
                .filter((p) => p.group === group)
                .map((plan, i) => (
                  <div
                    key={i}
                    className={`glass p-6 rounded-xl ${
                      plan.popular ? "border-2 border-pink-500" : ""
                    }`}
                  >
                    <h4 className="text-xl font-extrabold mb-2">
                      {plan.name}
                    </h4>

                    <div className="text-3xl text-pink-400 font-extrabold mb-4">
                      {plan.price}/mo
                    </div>

                    <ul className="space-y-2 mb-6">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex gap-2 font-bold">
                          <Check size={18} className="text-pink-400" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => window.open(BUY_LINK, "_blank")}
                      className="minecraft-button w-full"
                    >
                      Deploy Now
                    </button>
                  </div>
                ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
