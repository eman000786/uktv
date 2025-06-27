import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Can I Use My Subscription On Multiple Devices?",
      answer: "Please note that one subscription can be used on multiple devices, but simultaneous streaming is limited to one device at a time."
    },
    {
      question: "How Soon Can I Start Using The Service?",
      answer: "We typically activate all new accounts within 30 minutes to 1 hour after the invoice has been paid."
    },
    {
      question: "What Internet Quality Is Required?",
      answer: "A minimum of 16 Mbps is required for your internet connection. A stable and high-quality internet connection ensures clear image quality and eliminates buffering during matches, movies, or series playback."
    },
    {
      question: "Can I Cancel My Subscription?",
      answer: "No contracts, complete freedom to cancel anytime. Once cancelled, no additional charges apply and service ends automatically on next due date."
    },
    {
      question: "What devices and apps can I use?",
      answer: "Our platform works seamlessly across smartphones, tablets, smart TVs, Apple TVs, streaming boxes, Magbox, Enigma, Firesticks, Firecubes, Formuler, and all Android boxes. We support Android, iOS, Windows, macOS, and Linux. Compatible with all streaming apps like IPTV Smarters Pro, IBO PLAYER, Tivimate, XCIPTV, and Hot IPTV."
    },
    {
      question: "What is IPTV? And how does it work?",
      answer: "IPTV stands for Internet Protocol Television. It's a method to stream TV channels and video content over the internet, bypassing traditional broadcast approaches like cable or satellite. You'll need an internet-connected device and our subscription. Upon ordering, you'll receive a step-by-step guide and WhatsApp support for setup."
    }
  ];

  return (
    <section id="faq" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Get answers to common questions</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-md border-0"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-lg text-black hover:bg-gray-50 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 border-t border-gray-100">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
