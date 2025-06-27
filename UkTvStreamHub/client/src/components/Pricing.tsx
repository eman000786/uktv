import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export function Pricing() {
  const { toast } = useToast();

  const subscribeMutation = useMutation({
    mutationFn: async (plan: string) => {
      const response = await apiRequest("POST", "/api/subscribe", {
        email: "user@example.com", // This would come from a form in a real app
        plan: plan
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Subscription Request Submitted",
        description: "We'll contact you shortly to complete your subscription.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit subscription request. Please try again.",
        variant: "destructive",
      });
    }
  });

  const plans = [
    {
      name: "1 Month Plan",
      price: "£15.00",
      period: "per month",
      savings: null,
      popular: false,
      planId: "1-month"
    },
    {
      name: "6 Month Plan", 
      price: "£40.00",
      period: "6 months",
      savings: "Save £50",
      popular: true,
      planId: "6-month"
    },
    {
      name: "12 Month Plan",
      price: "£60.00", 
      period: "12 months",
      savings: "Best Value",
      popular: false,
      planId: "12-month"
    }
  ];

  const features = [
    "6.4K+ UK/US Channels",
    "16K+ Worldwide Channels", 
    "All Kids Channels",
    "Premium Sports + PPV Events",
    "4K, FHD, HD Channels",
    "Anti Buffer 9.0",
    "Support All Devices",
    "24/7 Support",
    "30-day Money Back Guarantee"
  ];

  return (
    <section id="pricing" className="gradient-bg py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Best IPTV Plans</h2>
          <p className="text-xl text-gray-300">Choose the perfect plan for your entertainment needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-gray-800/50 backdrop-blur rounded-2xl p-8 hover:bg-gray-700/50 transition-all border ${
                plan.popular ? 'border-2 border-red-600 relative' : 'border border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold">MOST POPULAR</span>
                </div>
              )}
              
              <div className={`text-center mb-8 ${plan.popular ? 'mt-4' : ''}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-5xl font-black text-red-600 mb-2">{plan.price}</div>
                <p className="text-gray-300">
                  {plan.period}
                  {plan.savings && (
                    <span className={plan.savings === "Best Value" ? "text-green-400" : "text-red-600"}>
                      {" • "}{plan.savings}
                    </span>
                  )}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="text-red-600 mr-3 h-5 w-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg h-auto"
                onClick={() => subscribeMutation.mutate(plan.planId)}
                disabled={subscribeMutation.isPending}
              >
                {subscribeMutation.isPending ? "Processing..." : "Buy Now"}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-gray-300 mb-4">Not sure which plan is right for you?</p>
          <Button 
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 font-bold h-auto"
          >
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
}
