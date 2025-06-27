import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function FloatingButtons() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/923344135174", "_blank");
  };

  const handleJoinNow = () => {
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
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative flex flex-col space-y-4">
        <Button
          onClick={handleWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-2xl p-0 transition-all transform hover:scale-110"
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
        <Button
          onClick={handleJoinNow}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-2xl font-bold transition-all transform hover:scale-105 whitespace-nowrap"
        >
          Join Now
        </Button>
      </div>
    </div>
  );
}
