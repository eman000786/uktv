import { Link } from "wouter";
import { Tv, Facebook, Twitter, Instagram, Youtube, Phone, MessageCircle, Clock } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Channels", href: "/#channels" },
    { label: "Pricing", href: "/pricing" },
    { label: "How to Watch", href: "/how-to-watch" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" }
  ];

  const supportLinks = [
    { label: "+92 334 4135174", href: "tel:+923344135174", icon: Phone },
    { label: "WhatsApp Support", href: "https://wa.me/923344135174", icon: MessageCircle },
    { label: "24/7 Available", href: null, icon: Clock },
    { label: "Setup Guide", href: "#", icon: null },
    { label: "Troubleshooting", href: "#", icon: null }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" }
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Tv className="text-red-600 text-3xl" />
              <span className="text-2xl font-bold">UK Streaming TV</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your premium IPTV provider offering 16K+ channels, 4K quality streaming, and 24/7 support. Experience the future of television today.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="bg-gray-800 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  {link.href ? (
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors flex items-center"
                    >
                      {link.icon && <link.icon className="mr-2 w-4 h-4" />}
                      {link.label}
                    </a>
                  ) : (
                    <span className="text-gray-400 flex items-center">
                      {link.icon && <link.icon className="mr-2 w-4 h-4" />}
                      {link.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 UK Streaming TV. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {legalLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
