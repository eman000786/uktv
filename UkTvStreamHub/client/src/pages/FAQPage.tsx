import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { FAQ } from "@/components/FAQ";

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg pt-24 pb-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300 mb-8">
              Find answers to common questions about our IPTV service
            </p>
          </div>
        </div>
      </section>

      <FAQ />

      <Footer />
      <FloatingButtons />
    </div>
  );
}
