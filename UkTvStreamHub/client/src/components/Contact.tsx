import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MessageCircle, Clock, Shield } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { InsertContact } from "@shared/schema";

export function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "+92 334 4135174",
      href: "tel:+923344135174"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      description: "24/7 Instant Support",
      href: "#"
    },
    {
      icon: Clock,
      title: "Support Hours",
      description: "24/7 Available",
      href: null
    },
    {
      icon: Shield,
      title: "Money Back Guarantee",
      description: "30-day guarantee",
      href: null
    }
  ];

  return (
    <section id="contact" className="gradient-bg py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300">Ready to start your IPTV journey? Contact us now!</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <info.icon className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">{info.title}</p>
                      {info.href ? (
                        <a href={info.href} className="text-gray-300 hover:text-white transition-colors">
                          {info.description}
                        </a>
                      ) : (
                        <p className="text-gray-300">{info.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white font-semibold">Name</Label>
                  <Input
                    id="name"
                    {...form.register("name")}
                    className="mt-2 bg-gray-700 border-gray-600 text-white focus:border-red-600"
                    placeholder="Your Name"
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-400 text-sm mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-white font-semibold">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    className="mt-2 bg-gray-700 border-gray-600 text-white focus:border-red-600"
                    placeholder="your@email.com"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-400 text-sm mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-white font-semibold">Message</Label>
                  <Textarea
                    id="message"
                    {...form.register("message")}
                    rows={4}
                    className="mt-2 bg-gray-700 border-gray-600 text-white focus:border-red-600 resize-none"
                    placeholder="Your message..."
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-400 text-sm mt-1">{form.formState.errors.message.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 font-bold text-lg h-auto"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
