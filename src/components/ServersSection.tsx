
import { Button } from "@/components/ui/button";

const gameServers = [
  {
    name: "Minecraft",
    imageUrl: "https://images.unsplash.com/photo-1627398342588-4be110f247e9?w=600&auto=format&q=80",
    description: "Host vanilla or modded Minecraft servers with automatic backups and plugin support.",
  },
];

const ServersSection = () => {
  return (
    <section id="servers" className="py-20 px-6 md:px-10 relative bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Support for <span className="text-gradient">Popular Games</span>
          </h2>
          <p className="text-gray-300 text-lg">
            We offer optimized hosting for all major games with one-click deployment and custom configuration options.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gameServers.map((game, index) => (
            <div 
              key={index} 
              className="rounded-lg overflow-hidden bg-gray-900/50 border border-gray-800 hover:border-game/50 transition-colors duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={game.imageUrl} 
                  alt={game.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">{game.name}</h3>
                <p className="text-gray-400 mb-4">{game.description}</p>
              </div>
              <div className="p-6 pt-0">
                <Button className="w-full bg-gradient-game hover:opacity-90">Deploy Server</Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">Don't see your game? We support hundreds of other games and custom server configurations.</p>
          <Button variant="outline" className="border-game hover:bg-game/10">View All Supported Games</Button>
        </div>
      </div>
    </section>
  );
};

export default ServersSection;
