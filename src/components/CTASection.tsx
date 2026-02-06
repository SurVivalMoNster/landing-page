
import { Button } from "@/components/ui/button";
import { Gamepad } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-6 md:px-10 relative">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="bg-gray-900/80 border border-gray-800 p-8 md:p-12 rounded-2xl backdrop-blur-sm relative overflow-hidden">
          {/* Background glow effects */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-game/30 rounded-full filter blur-[100px] opacity-60"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-game-accent/30 rounded-full filter blur-[100px] opacity-60"></div>
          
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-game/10 rounded-full">
              <Gamepad className="h-10 w-10 text-game" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Level Up Your <span className="text-gradient">Cherry Nodes</span>?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of gaming communities already using our platform. Get started in minutes with our one-click deployment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-game hover:bg-game/90 text-white px-8 py-6 text-lg">Start Free Trial</Button>
            <Button variant="outline" className="border-game hover:bg-game/10 px-8 py-6 text-lg">Contact Sales</Button>
          </div>
          
          <p className="mt-6 text-gray-400">No credit card required. 7-day free trial.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
