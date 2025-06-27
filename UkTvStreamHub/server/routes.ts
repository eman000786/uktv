import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertSubscriptionSchema } from "@shared/schema";
import { z } from "zod";
import { getTestimonials, getPricingPlans, getFAQItems } from "./notion";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, message: "Contact form submitted successfully", id: contact.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Failed to submit contact form" });
      }
    }
  });

  // Subscription request
  app.post("/api/subscribe", async (req, res) => {
    try {
      const validatedData = insertSubscriptionSchema.parse(req.body);
      const subscription = await storage.createSubscription(validatedData);
      res.json({ success: true, message: "Subscription request submitted successfully", id: subscription.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: "Invalid subscription data", errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Failed to process subscription request" });
      }
    }
  });

  // Get contacts (admin endpoint)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch contacts" });
    }
  });

  // Get subscriptions (admin endpoint)
  app.get("/api/subscriptions", async (req, res) => {
    try {
      const subscriptions = await storage.getSubscriptions();
      res.json(subscriptions);
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch subscriptions" });
    }
  });

  // Notion CMS endpoints
  app.get("/api/cms/testimonials", async (req, res) => {
    try {
      const testimonials = await getTestimonials();
      res.json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      res.json([]); // Return empty array if Notion is not configured
    }
  });

  app.get("/api/cms/pricing-plans", async (req, res) => {
    try {
      const plans = await getPricingPlans();
      res.json(plans);
    } catch (error) {
      console.error("Error fetching pricing plans:", error);
      res.json([]); // Return empty array if Notion is not configured
    }
  });

  app.get("/api/cms/faq", async (req, res) => {
    try {
      const faq = await getFAQItems();
      res.json(faq);
    } catch (error) {
      console.error("Error fetching FAQ items:", error);
      res.json([]); // Return empty array if Notion is not configured
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
