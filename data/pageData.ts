// --- CENTRAL PAGE CONTENT DATABASE ---
// This file is the single source of truth for all static text content on the website's pages.
// To modify a page title, section header, or descriptive paragraph, make your changes here.

export const pageData = {
  home: {
    hero: {
      title: "Find Your Dream Home",
      subtitle: "Exclusive listings, expert guidance. Your journey to ownership starts here.",
    },
    keyFeatures: {
      title: "Tailored for Every Buyer",
      subtitle: "Whether you're starting out, growing your family, or investing for the future, we have the perfect property for you.",
      features: [
        {
          title: "First-Time Buyers",
          description: "Affordable options with flexible payment terms to help you own your first home."
        },
        {
          title: "Growing Families",
          description: "Spacious units with family-friendly amenities near schools and parks."
        },
        {
          title: "Investors",
          description: "Properties with high rental yield and capital appreciation potential."
        },
        {
          title: "Luxury Seekers",
          description: "Premium residences with top-tier amenities in the most exclusive locations."
        }
      ]
    },
    topSelling: {
      title: "Top-Selling Condominiums",
      subtitle: "Explore our most sought-after properties. Hover or tap to pause."
    },
    featuredProperties: {
      overline: "Handpicked for Excellence",
      title: "Discover Our Premier<br />Featured Properties",
      description: "Explore an exclusive selection of our finest properties, chosen for their exceptional quality, prime locations, and outstanding investment potential.",
      buttonText: "VIEW ALL PROPERTIES"
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Building trust, one home at a time."
    },
    cta: {
      title: "Ready to Start Your Journey?",
      subtitle: "Whether you're buying, selling, or investing, our team is here to provide expert advice and personalized service.",
      primaryButton: "Inquire Now",
      secondaryButton: "Learn How to Buy"
    }
  },
  properties: {
    title: "Our Properties",
    subtitle: "Find the condominium that fits your life."
  },
  featuredProperties: {
    title: "Condotel",
    subtitle: "An exclusive collection of properties where the luxury of a private home meets the curated service of a five-star hotel."
  },
  locations: {
    title: "Area Guides",
    subtitle: "Discover the perfect neighborhood to call home."
  },
  howToBuy: {
    title: "How to Buy a Property",
    subtitle: "A simple step-by-step guide to your new home.",
    steps: [
      {
        title: 'Reservation',
        description: 'The first step is to choose your desired unit and secure it by paying a reservation fee. This takes the unit off the market while you prepare for the next steps.'
      },
      {
        title: 'Down Payment',
        description: 'You will need to pay a percentage of the total property price as a down payment. This can often be paid in installments over a set period, especially for pre-selling properties.'
      },
      {
        title: 'Financing & Loan Application',
        description: 'The remaining balance can be financed through a bank loan (mortgage) or in-house financing provided by the developer. We will assist you in preparing the necessary documents for your application.'
      },
      {
        title: 'Turnover & Move-In',
        description: 'Once the loan is approved and the unit is ready, you will go through the final inspection and acceptance process. After settling any remaining fees, you will receive the keys to your new home!'
      }
    ],
    faqs: [
      {
        question: 'What are the typical financing options?',
        answer: 'Most buyers opt for bank financing (home loan/mortgage) which generally offers lower interest rates. Some developers also offer in-house financing, which has less stringent requirements but may have higher interest. Pag-IBIG financing is also an option for qualified members.'
      },
      {
        question: 'What is the difference between pre-selling and RFO?',
        answer: 'Pre-selling means you are buying the property before it is completed, often at a lower introductory price and with flexible payment terms. Ready for Occupancy (RFO) means the unit is complete and you can move in shortly after the purchase process is finished.'
      },
      {
        question: 'Are there any other fees I should be aware of?',
        answer: 'Yes, aside from the property price, you should budget for taxes (like transfer tax and documentary stamp tax), registration fees, and move-in fees. These are typically around 3-5% of the property value.'
      }
    ]
  },
  about: {
    title: "Your Premier Partner in Real Estate",
    companySection: {
      title: "Our Company",
      description: "Founded on the principles of integrity, professionalism, and client-focused service, {COMPANY_NAME} has grown to become a leading name in the real estate industry. We specialize in marketing premier residential condominiums, connecting discerning buyers with properties that are not just homes, but sound investments for the future. Our commitment is to guide you through every step of your real estate journey with expertise and personalized care."
    },
    missionVision: [
       {
        title: "Our Vision",
        description: "To be the most trusted and respected real estate brokerage, renowned for our exceptional service and deep market knowledge."
      },
      {
        title: "Our Mission",
        description: "To empower clients with the information and guidance needed to make successful real estate decisions, fostering long-term relationships built on trust."
      },
      {
        title: "Awards & Recognitions",
        description: "Consistently ranked among the top-performing real estate firms, recognized for our sales volume and client satisfaction."
      }
    ],
    associateSection: {
      title: "Your Dedicated Associate",
      description: "As your dedicated real estate associate under the {COMPANY_NAME} banner, I bring a personal commitment to your success. My focus is entirely on understanding your needs and matching you with the ideal property from our extensive portfolio. While leveraging the strength and reputation of {COMPANY_NAME}, I provide the one-on-one attention you deserve, ensuring a smooth and rewarding experience."
    },
    authoritySection: {
      title: "Authority & Recognition",
      badges: [
        {
            line1: "Top Sales Performer",
            line2: "Developer Inc. 2023"
        },
        {
            line1: "Licensed Broker",
            line2: "PRC #12345"
        },
        {
            line1: "National Realtors Board",
            line2: "Member since 2015"
        },
        {
            line1: "Featured In",
            line2: "Property Today Magazine"
        }
      ]
    }
  },
  contact: {
    title: "Get In Touch",
    subtitle: "We're here to help. Send us a message or give us a call."
  },
  investment: {
    title: "Investment & ROI",
    subtitle: "Unlock the potential of real estate as a high-growth asset.",
    whyInvest: {
      title: "Why Invest in Condominiums?",
      points: [
        {
          title: "Tangible Asset",
          description: "Unlike stocks, real estate is a physical asset you can see and touch, providing a greater sense of security."
        },
        {
          title: "Passive Income",
          description: "Generate consistent cash flow through rental income, which can cover mortgage payments and other expenses."
        },
        {
          title: "Value Appreciation",
          description: "Historically, property values tend to increase over time, building your equity and net worth."
        }
      ]
    },
    cta: {
      title: "Ready to Build Your Portfolio?",
      description: "Let's discuss your investment goals. Schedule a free consultation with our property investment specialist to identify the best opportunities in the market today.",
      buttonText: "Schedule a Consultation"
    }
  },
  blog: {
    title: "Real Estate Insights",
    subtitle: "Tips, trends, and advice for buyers and investors.",
    leadMagnet: {
      title: "Get Your Free Condo Buying Guide",
      description: "Enter your email to receive our comprehensive guide, packed with tips for first-time buyers and investors, plus get exclusive access to new listings.",
      buttonText: "Download"
    }
  },
  successStories: {
    title: "Client Success Stories",
    subtitle: "Real stories from clients who found their dream homes with us."
  },
  marketInsights: {
    title: "Market Insights & Statistics",
    subtitle: "Make informed decisions with the latest real estate data and trends."
  }
};