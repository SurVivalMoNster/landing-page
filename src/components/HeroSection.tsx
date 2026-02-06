
import { Button } from "@/components/ui/button";
import { Server, Cpu, Shield, Gauge } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 px-6 md:px-10 lg:min-h-screen lg:flex lg:flex-col lg:justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            High-Performance <span className="text-gradient">Cherry Nodes</span> Made Simple
          </h1>
          <p className="text-xl text-gray-300 md:pr-12">
            Launch your game server in seconds with our optimized hosting platform. Low latency, high performance, 24/7 support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-game hover:bg-game/90 text-white px-8 py-6 text-lg">Get Started</Button>
            <Button variant="outline" className="border-game hover:bg-game/10 px-8 py-6 text-lg">View Plans</Button>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6 pt-6">
            <div className="flex items-center gap-2">
              <Server className="h-5 w-5 text-game" />
              <span className="text-gray-300">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="h-5 w-5 text-game" />
              <span className="text-gray-300">High-End Hardware</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-game" />
              <span className="text-gray-300">DDoS Protection</span>
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-game" />
              <span className="text-gray-300">Low Latency</span>
            </div>
          </div>
        </div>
        <div className="relative z-10">
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-1">
            <div className="absolute inset-0 bg-gradient-to-r from-game to-game-accent opacity-30 blur-md"></div>
            <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <div className="flex bg-gray-800 px-4 py-2 text-sm text-gray-300 items-center gap-2">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-2 text-xs">game-server-console</span>
              </div>
              <div className="p-6 font-mono text-sm text-gray-300 space-y-2">
                <p className="text-green-400">✓ Server initialized</p>
                <p className="text-green-400">✓ Loading server resources</p>
                <p className="text-green-400">✓ Configuring server settings</p>
                <p className="text-green-400">✓ DDOS protection enabled</p>
                <p className="text-green-400">✓ Server optimization complete</p>
                <p className="text-green-400">✓ Connection established</p>
                <p className="flex items-center gap-2">
                  <span className="text-game animate-pulse">▶</span> Server running - Ready for players
                </p>
                <p className="text-gray-500 animate-pulse">_</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl">
        <div className="absolute top-0 left-0 w-96 h-96 bg-game/20 rounded-full filter blur-[100px] opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-game-accent/20 rounded-full filter blur-[100px] opacity-30"></div>
      </div>
    </section>
  );
};

export default HeroSection;
