import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HowToWatch() {
  const steps = [
    {
      number: 1,
      title: "Choose Your Plan",
      description: "Select from our flexible 1, 6, or 12-month subscription plans that suit your needs and budget.",
      details: [
        "Compare features across all plans",
        "All plans include the same premium content",
        "Longer plans offer better value for money",
        "No hidden fees or setup costs"
      ]
    },
    {
      number: 2, 
      title: "Instant Setup",
      description: "Receive your login details and setup guide via email. We'll activate your account within 1 hour.",
      details: [
        "Account activation within 30-60 minutes",
        "Detailed setup instructions for all devices",
        "Login credentials sent to your email",
        "WhatsApp support for instant help"
      ]
    },
    {
      number: 3,
      title: "Start Watching",
      description: "Enjoy unlimited access to thousands of channels and content on any device, anywhere!",
      details: [
        "Compatible with all devices and platforms",
        "Stream on smartphone, tablet, smart TV, or computer",
        "Works with popular IPTV apps",
        "Crystal clear 4K, FHD, and HD quality"
      ]
    }
  ];

  const supportedDevices = [
    { category: "Smart TVs", devices: ["Samsung Smart TV", "LG Smart TV", "Sony Android TV", "Hisense", "TCL"] },
    { category: "Streaming Devices", devices: ["Amazon Fire TV Stick", "Fire TV Cube", "Apple TV", "Roku", "Chromecast"] },
    { category: "Android Boxes", devices: ["NVIDIA Shield", "Xiaomi Mi Box", "Formuler", "Magbox", "Enigma"] },
    { category: "Mobile & Desktop", devices: ["Android Phones/Tablets", "iPhone/iPad", "Windows PC", "Mac", "Linux"] }
  ];

  const apps = [
    "IPTV Smarters Pro",
    "IBO PLAYER", 
    "Tivimate",
    "XCIPTV",
    "Hot IPTV",
    "Perfect Player",
    "GSE Smart IPTV",
    "VLC Media Player"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg pt-24 pb-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">How to Watch</h1>
            <p className="text-xl text-gray-300 mb-8">
              Get started with UK Streaming TV in just 3 simple steps
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {steps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-white text-3xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <ul className="text-left space-y-2 text-gray-600">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Setup Guide Visual */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-8">Professional TV Setup</h2>
            <img 
              src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
              alt="Modern TV setup in living room with multiple screens" 
              className="rounded-xl shadow-2xl mx-auto w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Supported Devices */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-black mb-4">Supported Devices</h2>
              <p className="text-xl text-gray-600">Works on virtually any device with internet connection</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportedDevices.map((category, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-black mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.devices.map((device, deviceIndex) => (
                      <li key={deviceIndex} className="text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                        {device}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compatible Apps */}
      <section className="gradient-bg py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Compatible IPTV Apps</h2>
            <p className="text-xl text-gray-300 mb-12">
              Use your favorite IPTV application for the best viewing experience
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {apps.map((app, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur p-4 rounded-lg hover:bg-gray-700/50 transition-all">
                  <p className="font-semibold">{app}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of satisfied customers and start enjoying premium IPTV today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold h-auto">
                  View Plans & Pricing
                </Button>
              </Link>
              <Button 
                variant="outline"
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 text-lg font-bold h-auto"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
