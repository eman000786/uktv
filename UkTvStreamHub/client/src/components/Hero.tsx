import { Button } from "@/components/ui/button";
import { Play, Gift } from "lucide-react";

export function Hero() {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center justify-center text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            UK IPTV <span className="text-red-600">Premium</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">
            Non-stop sports, extensive channels, all under the Best IPTV UK service
          </p>
          <p className="text-lg mb-8 text-gray-300">
            100% Buffer Free • Satisfaction Guaranteed
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-xl font-bold h-auto transition-all transform hover:scale-105"
              onClick={scrollToPricing}
            >
              <Play className="mr-2 h-5 w-5" />
              Get Started Now
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-xl font-bold h-auto transition-all"
              onClick={scrollToPricing}
            >
              <Gift className="mr-2 h-5 w-5" />
              Free Trial
            </Button>
          </div>

          <div className="text-3xl md:text-4xl font-bold">
            Starting from <span className="text-red-600">£15.00</span>/Month
          </div>
        </div>
      </div>
    </section>
  );
}
