import { Client } from "@notionhq/client";
import { notion, NOTION_PAGE_ID, createDatabaseIfNotExists, findDatabaseByTitle } from "./notion";

// Environment variables validation
if (!process.env.NOTION_INTEGRATION_SECRET) {
    console.log("NOTION_INTEGRATION_SECRET is not defined. Notion CMS features will be disabled.");
}

// Setup databases for the IPTV website
async function setupNotionDatabases() {
    if (!NOTION_PAGE_ID) {
        console.log("NOTION_PAGE_URL is not defined. Skipping Notion setup.");
        return;
    }

    try {
        // Create Testimonials database
        await createDatabaseIfNotExists("Testimonials", {
            Name: {
                title: {}
            },
            Location: {
                rich_text: {}
            },
            Review: {
                rich_text: {}
            },
            Rating: {
                number: {
                    format: "number"
                }
            },
            Active: {
                checkbox: {}
            }
        });

        // Create Pricing Plans database
        await createDatabaseIfNotExists("Pricing Plans", {
            Name: {
                title: {}
            },
            Price: {
                rich_text: {}
            },
            Period: {
                rich_text: {}
            },
            Savings: {
                rich_text: {}
            },
            Popular: {
                checkbox: {}
            },
            PlanId: {
                rich_text: {}
            },
            Active: {
                checkbox: {}
            }
        });

        // Create FAQ database
        await createDatabaseIfNotExists("FAQ", {
            Question: {
                title: {}
            },
            Answer: {
                rich_text: {}
            },
            Order: {
                number: {
                    format: "number"
                }
            },
            Active: {
                checkbox: {}
            }
        });

        console.log("Notion databases setup completed successfully!");

    } catch (error) {
        console.error("Error setting up Notion databases:", error);
    }
}

async function createSampleData() {
    if (!NOTION_PAGE_ID) return;

    try {
        console.log("Adding sample data...");

        // Find the databases
        const testimonialsDb = await findDatabaseByTitle("Testimonials");
        const plansDb = await findDatabaseByTitle("Pricing Plans");
        const faqDb = await findDatabaseByTitle("FAQ");

        if (!testimonialsDb || !plansDb || !faqDb) {
            throw new Error("Could not find the required databases.");
        }

        // Add sample testimonials
        const testimonials = [
            {
                name: "John Davies",
                location: "London, UK",
                review: "Absolutely brilliant service! No buffering, crystal clear quality, and amazing customer support. Best IPTV provider I've used!",
                rating: 5
            },
            {
                name: "Sarah Martinez",
                location: "Manchester, UK",
                review: "Perfect for sports fans! Never miss a match and the UFC coverage is fantastic. Setup was so easy and works on all my devices.",
                rating: 5
            },
            {
                name: "Robert Thompson",
                location: "Birmingham, UK",
                review: "Great value for money! Thousands of channels, excellent quality, and the WhatsApp support is incredibly helpful and fast.",
                rating: 5
            }
        ];

        for (let testimonial of testimonials) {
            await notion.pages.create({
                parent: {
                    database_id: testimonialsDb.id
                },
                properties: {
                    Name: {
                        title: [
                            {
                                text: {
                                    content: testimonial.name
                                }
                            }
                        ]
                    },
                    Location: {
                        rich_text: [
                            {
                                text: {
                                    content: testimonial.location
                                }
                            }
                        ]
                    },
                    Review: {
                        rich_text: [
                            {
                                text: {
                                    content: testimonial.review
                                }
                            }
                        ]
                    },
                    Rating: {
                        number: testimonial.rating
                    },
                    Active: {
                        checkbox: true
                    }
                }
            });
        }

        // Add sample pricing plans
        const plans = [
            {
                name: "1 Month Plan",
                price: "£15.00",
                period: "per month",
                savings: "",
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

        for (let plan of plans) {
            await notion.pages.create({
                parent: {
                    database_id: plansDb.id
                },
                properties: {
                    Name: {
                        title: [
                            {
                                text: {
                                    content: plan.name
                                }
                            }
                        ]
                    },
                    Price: {
                        rich_text: [
                            {
                                text: {
                                    content: plan.price
                                }
                            }
                        ]
                    },
                    Period: {
                        rich_text: [
                            {
                                text: {
                                    content: plan.period
                                }
                            }
                        ]
                    },
                    Savings: {
                        rich_text: [
                            {
                                text: {
                                    content: plan.savings
                                }
                            }
                        ]
                    },
                    Popular: {
                        checkbox: plan.popular
                    },
                    PlanId: {
                        rich_text: [
                            {
                                text: {
                                    content: plan.planId
                                }
                            }
                        ]
                    },
                    Active: {
                        checkbox: true
                    }
                }
            });
        }

        // Add sample FAQ items
        const faqs = [
            {
                question: "Can I Use My Subscription On Multiple Devices?",
                answer: "Please note that one subscription can be used on multiple devices, but simultaneous streaming is limited to one device at a time.",
                order: 1
            },
            {
                question: "How Soon Can I Start Using The Service?",
                answer: "We typically activate all new accounts within 30 minutes to 1 hour after the invoice has been paid.",
                order: 2
            },
            {
                question: "What Internet Quality Is Required?",
                answer: "A minimum of 16 Mbps is required for your internet connection. A stable and high-quality internet connection ensures clear image quality and eliminates buffering during matches, movies, or series playback.",
                order: 3
            },
            {
                question: "Can I Cancel My Subscription?",
                answer: "No contracts, complete freedom to cancel anytime. Once cancelled, no additional charges apply and service ends automatically on next due date.",
                order: 4
            },
            {
                question: "What devices and apps can I use?",
                answer: "Our platform works seamlessly across smartphones, tablets, smart TVs, Apple TVs, streaming boxes, Magbox, Enigma, Firesticks, Firecubes, Formuler, and all Android boxes. We support Android, iOS, Windows, macOS, and Linux. Compatible with all streaming apps like IPTV Smarters Pro, IBO PLAYER, Tivimate, XCIPTV, and Hot IPTV.",
                order: 5
            },
            {
                question: "What is IPTV? And how does it work?",
                answer: "IPTV stands for Internet Protocol Television. It's a method to stream TV channels and video content over the internet, bypassing traditional broadcast approaches like cable or satellite. You'll need an internet-connected device and our subscription. Upon ordering, you'll receive a step-by-step guide and WhatsApp support for setup.",
                order: 6
            }
        ];

        for (let faq of faqs) {
            await notion.pages.create({
                parent: {
                    database_id: faqDb.id
                },
                properties: {
                    Question: {
                        title: [
                            {
                                text: {
                                    content: faq.question
                                }
                            }
                        ]
                    },
                    Answer: {
                        rich_text: [
                            {
                                text: {
                                    content: faq.answer
                                }
                            }
                        ]
                    },
                    Order: {
                        number: faq.order
                    },
                    Active: {
                        checkbox: true
                    }
                }
            });
        }

        console.log("Sample data creation complete.");
    } catch (error) {
        console.error("Error creating sample data:", error);
    }
}

// Run the setup only if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
    setupNotionDatabases().then(() => {
        return createSampleData();
    }).then(() => {
        console.log("Setup complete!");
        process.exit(0);
    }).catch(error => {
        console.error("Setup failed:", error);
        process.exit(1);
    });
}

export { setupNotionDatabases, createSampleData };