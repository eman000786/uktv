import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      
      {/* UFC/Sports Highlight Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
                  alt="Sports broadcasting equipment in modern studio" 
                  className="rounded-xl shadow-2xl w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  UFC Live Sports & TV Shows
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Experience the thrill of live UFC fights and premium sports content with our reliable IPTV service. Never miss a moment of the action!
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-lg">All UFC Pay-Per-View Events</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-lg">Premier League & Championship</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-lg">NBA, NFL, MLB & More</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-lg">Sky Sports, BT Sport, ESPN</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="gradient-bg py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-300">Join thousands of satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "John Davies",
                location: "London, UK",
                review: "Absolutely brilliant service! No buffering, crystal clear quality, and amazing customer support. Best IPTV provider I've used!"
              },
              {
                name: "Sarah Martinez",
                location: "Manchester, UK", 
                review: "Perfect for sports fans! Never miss a match and the UFC coverage is fantastic. Setup was so easy and works on all my devices."
              },
              {
                name: "Robert Thompson",
                location: "Birmingham, UK",
                review: "Great value for money! Thousands of channels, excellent quality, and the WhatsApp support is incredibly helpful and fast."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-gray-300 mb-6">"{testimonial.review}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
