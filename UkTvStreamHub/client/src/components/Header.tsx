import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Tv } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { cn } from "@/lib/utils";

export function Header() {
  const { isOpen, toggle, close } = useMobileMenu();
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    close();
    if (location !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Tv className="text-red-600 text-2xl" />
            <span className="text-white text-xl font-bold">UK Streaming TV</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-red-600 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('channels')}
              className="text-white hover:text-red-600 transition-colors"
            >
              Channels
            </button>
            <Link href="/how-to-watch" className="text-white hover:text-red-600 transition-colors">
              How to Watch
            </Link>
            <Link href="/pricing" className="text-white hover:text-red-600 transition-colors">
              Pricing
            </Link>
            <Link href="/faq" className="text-white hover:text-red-600 transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-white hover:text-red-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+923344135174" 
              className="text-white hover:text-red-600 transition-colors flex items-center"
            >
              <Phone className="w-4 h-4 mr-1" />
              +92 334 4135174
            </a>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white font-semibold"
              onClick={() => scrollToSection('pricing')}
            >
              Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white text-2xl"
            onClick={toggle}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden bg-black border-t border-gray-800 transition-all duration-300",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      )}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-red-600 transition-colors text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('channels')}
              className="text-white hover:text-red-600 transition-colors text-left"
            >
              Channels
            </button>
            <Link href="/how-to-watch" className="text-white hover:text-red-600 transition-colors" onClick={close}>
              How to Watch
            </Link>
            <Link href="/pricing" className="text-white hover:text-red-600 transition-colors" onClick={close}>
              Pricing
            </Link>
            <Link href="/faq" className="text-white hover:text-red-600 transition-colors" onClick={close}>
              FAQ
            </Link>
            <Link href="/contact" className="text-white hover:text-red-600 transition-colors" onClick={close}>
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-800">
              <a 
                href="tel:+923344135174" 
                className="text-white hover:text-red-600 transition-colors flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                +92 334 4135174
              </a>
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white font-semibold w-fit"
                onClick={() => {
                  close();
                  scrollToSection('pricing');
                }}
              >
                Free Trial
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
