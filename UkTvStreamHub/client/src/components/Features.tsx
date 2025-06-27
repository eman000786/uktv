import { 
  Zap, 
  Smartphone, 
  Headphones, 
  MonitorSpeaker, 
  Clock, 
  Shield,
  Volleyball,
  Film,
  Tv,
  Baby,
  Globe,
  Music,
  Newspaper,
  Swords
} from "lucide-react";

export function Features() {
  const stats = [
    { number: "6.4K+", label: "UK/US Channels" },
    { number: "16K+", label: "Worldwide Channels" },
    { number: "150K+", label: "Movies & Shows" }
  ];

  const channels = [
    { icon: Volleyball, label: "Sports" },
    { icon: Film, label: "Movies" },
    { icon: Tv, label: "Live TV" },
    { icon: Baby, label: "Kids" },
    { icon: Globe, label: "International" },
    { icon: Music, label: "Music" },
    { icon: Newspaper, label: "News" },
    { icon: Swords, label: "UFC" }
  ];

  const features = [
    {
      icon: Zap,
      title: "100% Buffer Free",
      description: "Experience smooth streaming with our Anti Buffer 9.0 technology. No more interruptions during your favorite shows."
    },
    {
      icon: Smartphone,
      title: "All Devices Supported",
      description: "Compatible with smartphones, tablets, smart TVs, Firesticks, Android boxes, and more."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Get instant help whenever you need it with our round-the-clock customer support via WhatsApp."
    },
    {
      icon: MonitorSpeaker,
      title: "4K, FHD, HD Quality",
      description: "Enjoy crystal clear picture quality up to 4K resolution for the ultimate viewing experience."
    },
    {
      icon: Clock,
      title: "Instant Activation",
      description: "Start watching immediately! We activate all accounts within 30 minutes to 1 hour after payment."
    },
    {
      icon: Shield,
      title: "Money Back Guarantee",
      description: "Not satisfied? Get your money back within 30 days, no questions asked."
    }
  ];

  return (
    <>
      {/* Trust Logos Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Available Channels & Content</h2>
            <p className="text-gray-600">Access thousands of premium channels and content</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {channels.map((channel, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <channel.icon className="w-8 h-8 text-red-600 mb-2 mx-auto" />
                <p className="text-sm font-semibold">{channel.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-red-600">{stat.number}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="channels" className="gradient-bg py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Our IPTV Service?</h2>
            <p className="text-xl text-gray-300">Experience the future of television streaming</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur p-8 rounded-xl hover:bg-gray-700/50 transition-all">
                <div className="text-red-600 mb-4">
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
