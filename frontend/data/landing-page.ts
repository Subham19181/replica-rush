export const navigationLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
] as const

export const heroContent = {
  badge: "Accepting new projects for Q1",
  headline: {
    before: "Turn your expertise into",
    highlight: "AI-powered Reality",
  },
  subtext:
    "We help ambitious brands and startups design, build, and scale world-class digital products with a focus on comprehensive design and robust engineering.",
  cta: {
    primary: "Start Project",
    secondary: "Watch Reel",
  },
  socialProof: {
    label: "TRUSTED BY INNOVATIVE TEAMS",
    companies: ["Company A", "Startup B", "Enterprise C", "Tech D", "Global E"],
  },
}

export const problemSolutionContent = {
  headline: {
    before: "Stop wrestling with",
    highlight: "legacy codebases",
  },
  description:
    "Our modern approach allows you to bypass technical debt and focus on what matters: delivering value to your customers. We handle the complexity so you don't have to.",
  features: [
    "Reduce development time by 50%",
    "Pixel-perfect implementation",
    "Enterprise-grade security",
    "Scalable architecture default",
  ],
}

export const audienceContent = {
  headline: "Tailored for every stage",
  description:
    "Whether you are just starting out or scaling up, we have the specialized workflows to support your growth.",
  cards: [
    {
      icon: "zap",
      title: "Startups",
      description:
        "Move fast and break nothing. Get your MVP to market in record time with our rapid deployment pipelines.",
      link: "Learn more",
      accentColor: "yellow",
    },
    {
      icon: "shield",
      title: "Enterprises",
      description: "Robust, compliant, and scalable. We build systems that can handle millions of users from day one.",
      link: "Learn more",
      accentColor: "blue",
    },
  ],
}

export const processContent = {
  headline: "How we work",
  steps: [
    {
      number: "01",
      icon: "compass",
      title: "Explore",
      description: "We deep dive into your business goals and technical requirements to map out the perfect solution.",
    },
    {
      number: "02",
      icon: "palette",
      title: "Design",
      description: "Our UI/UX experts craft stunning, user-centric interfaces that align with your brand identity.",
    },
    {
      number: "03",
      icon: "code",
      title: "Build",
      description:
        "We develop your product using modern tech stacks, ensuring performance, accessibility, and scalability.",
    },
  ],
}

export const comparisonContent = {
  headline: "Why choose us?",
  columns: ["CRITERIA", "Agencies", "Freelancers", "Agency.io"],
  rows: [
    {
      criteria: "Delivery Speed",
      agencies: "Slow (Months)",
      freelancers: "Inconsistent",
      agencyIo: "Rapid (Weeks)",
    },
    {
      criteria: "Code Quality",
      agencies: "Variable",
      freelancers: "Variable",
      agencyIo: "Standardized & Audited",
    },
    {
      criteria: "Design",
      agencies: "Outsourced",
      freelancers: "Limited",
      agencyIo: "In-house Expert Choice",
    },
    {
      criteria: "Scalability",
      agencies: "Often Overlooked",
      freelancers: "Rarely Priority",
      agencyIo: "Built-in Foundation",
    },
  ],
}

export const ctaContent = {
  headline: "Ready to build the future?",
  description: "Join hundreds of founders and enterprise leaders who trust us with their digital transformation.",
  button: "Book your consultation",
}

export const footerContent = {
  logo: "Agency.io",
  tagline: "Crafting digital experiences with precision and passion. Based in San Francisco, working globally.",
  sections: [
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Careers", href: "#careers" },
        { label: "Blog", href: "#blog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Case Studies", href: "#case-studies" },
        { label: "Design System", href: "#design-system" },
        { label: "Help Center", href: "#help" },
      ],
    },
  ],
  newsletter: {
    title: "Stay Included",
    description: "Subscribe to our newsletter for the latest design trends.",
    placeholder: "Enter your email",
  },
  copyright: "© 2025 Agency.io. All rights reserved.",
  socialLinks: [
    { platform: "twitter", href: "#twitter" },
    { platform: "github", href: "#github" },
  ],
}
