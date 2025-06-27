import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Pricing } from "@/components/Pricing";

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg pt-24 pb-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Pricing Plans</h1>
            <p className="text-xl text-gray-300 mb-8">
              Choose the perfect plan for your entertainment needs
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <div className="bg-black">
        <Pricing />
      </div>

      {/* Value Proposition */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-8">Why Choose Our Service?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">30 Days</div>
                <p className="text-gray-600">Money Back Guarantee</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
                <p className="text-gray-600">Customer Support</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">99.9%</div>
                <p className="text-gray-600">Uptime Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
