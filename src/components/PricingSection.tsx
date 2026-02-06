import { Check } from "lucide-react";

const BUY_LINK = "https://gp.opeximcloud.com/";

const plans = [
  { name: "Dirt", price: "₹39", ram: "2GB", cpu: "50%", disk: "10GB" },
  { name: "Coal", price: "₹60", ram: "4GB", cpu: "100%", disk: "20GB" },
  { name: "Redstone", price: "₹90", ram: "6GB", cpu: "150%", disk: "30GB" },
  { name: "Diamond", price: "₹120", ram: "8GB", cpu: "200%", disk: "40GB" },
  { name: "Standard 2GB", price: "₹50", ram: "2GB", cpu: "100%", disk: "20GB" },
  { name: "Standard 4GB", price: "₹80", ram: "4GB", cpu: "200%", disk: "40GB" },
  { name: "Advanced", price: "₹199", ram: "6GB", cpu: "300%", disk: "60GB" },
  { name: "Premium", price: "₹299", ram: "8GB", cpu: "400%", disk: "80GB" },
  { name: "Premium Gold", price: "₹299", ram: "12GB", cpu: "600%", disk: "120GB" },
  { name: "Premium Platinum", price: "₹450", ram: "16GB", cpu: "800%", disk: "160GB" },
  { name: "Premium Diamond", price: "₹599", ram: "24GB", cpu: "1200%", disk: "240GB" },
];

export default function PricingSection() {
  return (
    <section id="minecraft-plans" className="py-20 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-12">
        Minecraft Hosting Plans
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((p, i) => (
          <div key={i} className="glass p-6 rounded-xl border border-pink-500/40">
            <h3 className="text-xl font-extrabold mb-2">{p.name}</h3>
            <div className="text-3xl text-pink-400 font-extrabold mb-4">
              {p.price}/mo
            </div>

            <ul className="space-y-2 font-bold text-gray-200">
              <li className="flex gap-2"><Check size={18}/> {p.ram} RAM</li>
              <li className="flex gap-2"><Check size={18}/> {p.cpu} CPU</li>
              <li className="flex gap-2"><Check size={18}/> {p.disk} Disk</li>
            </ul>

            <button
              onClick={() => window.open(BUY_LINK, "_blank")}
              className="minecraft-button w-full mt-6"
            >
              Deploy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
