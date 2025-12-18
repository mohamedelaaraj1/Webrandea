import { Layout, Globe, Code, PenTool, Database, Megaphone, Users, Mail, Settings, Briefcase, Shield, Zap, Lock, Clock, Headphones, Target } from 'lucide-react';
import { Service, Feature, Review, FAQItem, Work } from './types.ts';

export const SERVICES: Service[] = [
  { 
    id: 'saas-proto', 
    name: 'SaaS Prototype & Design System', 
    shortDescription: 'Interactive high-fidelity prototypes and scalable design systems.',
    fullDescription: 'We build clickable, interactive prototypes that feel like the real product. Perfect for pitching to investors or validating ideas before writing a single line of code. We also deliver a comprehensive Design System to ensure consistency as you scale.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop', 
    icon: Layout,
    color: 'text-purple-400', 
    popular: true,
    process: [
      { step: 1, title: 'Discovery', description: 'We analyze your requirements, user personas, and core functionality.' },
      { step: 2, title: 'Wireframing', description: 'Low-fidelity sketches to establish layout and user flow.' },
      { step: 3, title: 'UI Design', description: 'High-fidelity design applying your brand identity and modern aesthetics.' },
      { step: 4, title: 'Interactivity', description: 'Connecting screens in Figma to create a clickable, testable prototype.' }
    ],
    milestones: ['30% Upfront Deposit', '40% Upon Wireframe Approval', '30% Upon Final Delivery'],
    packages: {
      basic: { name: 'Wireframe Kit', price: '$999', description: 'Essential structural layout.', features: ['User Flow Map', 'Low-Fi Wireframes', '2 Revisions', 'Figma File'] },
      advanced: { name: 'Interactive UI', price: '$2,499', description: 'Full color & interaction.', features: ['Hi-Fi Designs', 'Clickable Prototype', 'Mobile & Desktop', 'Style Guide', '5 Revisions'] },
      pro: { name: 'Full System', price: '$4,999', description: 'Enterprise ready.', features: ['Advanced Prototype', 'Complete Design System', 'Component Library', 'Developer Handoff', 'Unlimited Revisions'] }
    },
    faq: [
      { question: 'Do I get the Figma files?', answer: 'Yes, you receive full ownership of all source files.' },
      { question: 'Can developers code directly from this?', answer: 'Absolutely. We use auto-layout and standardized naming conventions perfect for developer handoff.' }
    ]
  },
  { 
    id: 'web-nocode', 
    name: 'Website Dev (WordPress/WIX)', 
    shortDescription: 'Fast, manageable websites built on popular CMS platforms.',
    fullDescription: 'Perfect for marketing sites, blogs, and small businesses. We create stunning websites using WordPress or WIX that you can easily manage yourself after launch.',
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1000&auto=format&fit=crop', 
    icon: Globe,
    color: 'text-blue-400',
    process: [
      { step: 1, title: 'Strategy', description: 'Selecting the right theme and structure for your content.' },
      { step: 2, title: 'Setup', description: 'Hosting configuration, CMS installation, and plugin setup.' },
      { step: 3, title: 'Customization', description: 'Tailoring the design to match your brand guidelines.' },
      { step: 4, title: 'Launch', description: 'SEO check, mobile optimization, and going live.' }
    ],
    milestones: ['50% Deposit', '50% Upon Launch'],
    packages: {
      basic: { name: 'Landing Page', price: '$500', description: 'High conversion single page.', features: ['1 Page', 'Contact Form', 'Mobile Responsive', 'Stock Images'] },
      advanced: { name: 'Corporate Site', price: '$1,200', description: '5-page business site.', features: ['5 Pages', 'Blog Setup', 'Basic SEO', 'Speed Optimization', '1 Month Support'] },
      pro: { name: 'E-Commerce', price: '$2,500', description: 'Sell products online.', features: ['Shop Functionality', 'Payment Gateway', 'Product Upload (up to 20)', 'Advanced SEO', '3 Months Support'] }
    },
    faq: [
      { question: 'Can I edit the text myself?', answer: 'Yes, we provide a training session on how to update content.' },
      { question: 'Do you handle hosting?', answer: 'We can set it up, but you will pay the hosting provider directly to ensure you own your assets.' }
    ]
  },
  { 
    id: 'web-code', 
    name: 'Custom Web Development', 
    shortDescription: 'High-performance websites using React, Next.js, and Tailwind.',
    fullDescription: 'When templates aren\'t enough. We build lightning-fast, SEO-optimized custom websites using modern frameworks. Best for startups requiring custom functionality and top-tier performance.',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1000&auto=format&fit=crop', 
    icon: Code,
    color: 'text-indigo-400',
    popular: true,
    process: [
      { step: 1, title: 'Architecture', description: 'Tech stack selection and database schema design.' },
      { step: 2, title: 'Frontend Dev', description: 'Building responsive components with React/Next.js.' },
      { step: 3, title: 'Integration', description: 'Connecting APIs and backend services.' },
      { step: 4, title: 'Testing', description: 'Cross-browser testing, speed optimization, and deployment.' }
    ],
    milestones: ['30% Deposit', '30% Alpha Release', '40% Final Delivery'],
    packages: {
      basic: { name: 'Static Site', price: '$1,500', description: 'Ultra-fast marketing site.', features: ['Next.js/React', '3 Pages', 'Perfect Lighthouse Score', 'Vercel Deployment'] },
      advanced: { name: 'Dynamic Web App', price: '$3,500', description: 'Content rich & interactive.', features: ['CMS Integration (Sanity/Strapi)', 'Animations', 'API Integration', 'Form Handling'] },
      pro: { name: 'Enterprise', price: '$8,000+', description: 'Complex scalability.', features: ['Full Stack', 'Auth System', 'Database Design', 'Cloud Architecture', 'CI/CD Pipelines'] }
    },
    faq: [
      { question: 'Why use code over WordPress?', answer: 'Custom code is significantly faster, more secure, and allows for limitless design possibilities.' },
      { question: 'What tech stack do you use?', answer: 'Primarily React, Next.js, Tailwind CSS, and Node.js.' }
    ]
  },
  { 
    id: 'ui-ux', 
    name: 'UI/UX Design', 
    shortDescription: 'User-centric interfaces that convert and delight.',
    fullDescription: 'We design digital products that solve problems. Our process creates intuitive, accessible, and beautiful interfaces tailored to your specific user base.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=1000&auto=format&fit=crop', 
    icon: PenTool,
    color: 'text-pink-400',
    process: [
      { step: 1, title: 'Research', description: 'Competitor analysis and user interviews.' },
      { step: 2, title: 'UX Mapping', description: 'User journeys, information architecture, and wireframes.' },
      { step: 3, title: 'UI Design', description: 'Visual design, iconography, and typography.' },
      { step: 4, title: 'Validation', description: 'Usability testing and iteration.' }
    ],
    milestones: ['50% Start', '50% Completion'],
    packages: {
      basic: { name: 'Audit', price: '$800', description: 'Fix existing issues.', features: ['UX Audit Report', 'Accessibility Check', 'Quick Win Suggestions'] },
      advanced: { name: 'Redesign', price: '$2,000', description: 'Modernize your app.', features: ['5 Key Screens', 'Design System', 'Asset Export', 'Developer Handoff'] },
      pro: { name: 'Product Design', price: '$4,500', description: 'From zero to one.', features: ['Full App Design', 'Interactive Prototype', 'User Testing', 'Design Strategy'] }
    },
    faq: [
      { question: 'Do you do branding too?', answer: 'Yes, we can include branding in the Pro package.' }
    ]
  },
  { 
    id: 'saas-functional', 
    name: 'SaaS App Dev (Bubble)', 
    shortDescription: 'Rapid MVP development using No-Code/Low-Code tools.',
    fullDescription: 'Get your SaaS idea to market in weeks, not months. We use Bubble.io for functional, scalable logic without the heavy cost of traditional engineering.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop', 
    icon: Database,
    color: 'text-green-400',
    process: [
      { step: 1, title: 'Scope', description: 'Defining the MVP feature set.' },
      { step: 2, title: 'Bubble Logic', description: 'Building the database and workflows in Bubble.' },
      { step: 3, title: 'Integration', description: 'Connecting Stripe and external APIs.' },
      { step: 4, title: 'Launch', description: 'Domain connection and going live.' }
    ],
    milestones: ['40% Deposit', '30% Core Logic Done', '30% Launch'],
    packages: {
      basic: { name: 'MVP', price: '$2,500', description: 'Validate your idea.', features: ['User Auth', 'Basic Database', 'Payment Integration', 'Admin Dashboard'] },
      advanced: { name: 'Growth', price: '$5,000', description: 'Feature rich.', features: ['API Integrations', 'Complex Workflows', 'Custom Plugins', 'Responsive Design'] },
      pro: { name: 'Scale', price: '$9,000', description: 'High volume capacity.', features: ['Dedicated Server (Bubble)', 'Optimization', 'Advanced Security', '3 Months Support'] }
    },
    faq: [
      { question: 'Is Bubble scalable?', answer: 'Yes, Bubble handles millions of users for many successful startups.' }
    ]
  },
  { 
    id: 'branding', 
    name: 'Branding Identity', 
    shortDescription: 'Logo, typography, and visual language for your business.',
    fullDescription: 'Your brand is more than a logo. We create cohesive visual identities that tell your story and resonate with your target audience across all channels.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=1000&auto=format&fit=crop', 
    icon: Target,
    color: 'text-red-400',
    process: [
      { step: 1, title: 'Brief', description: 'Understanding brand values and market position.' },
      { step: 2, title: 'Concepts', description: 'Exploring 3 distinct visual directions.' },
      { step: 3, title: 'Refinement', description: 'Polishing the chosen direction.' },
      { step: 4, title: 'Guidelines', description: 'Creating the brand book.' }
    ],
    milestones: ['50% Upfront', '50% Final Assets'],
    packages: {
      basic: { name: 'Logo', price: '$600', description: 'Core identity.', features: ['Primary Logo', 'Secondary Mark', 'Color Palette', 'Typography'] },
      advanced: { name: 'Identity', price: '$1,500', description: 'Full visual kit.', features: ['Stationery Design', 'Social Media Assets', 'Brand Guidelines PDF', 'Iconography'] },
      pro: { name: '360 Brand', price: '$3,000', description: 'Complete overhaul.', features: ['Brand Strategy', 'Voice & Tone', 'Marketing Collateral', 'Website Mockups'] }
    },
    faq: [
      { question: 'How many revisions?', answer: 'We offer 3 rounds of revisions for the chosen concept.' }
    ]
  },
  { 
    id: 'social-media', 
    name: 'Social Media Marketing', 
    shortDescription: 'Strategy, content creation, and community growth.',
    fullDescription: 'Grow your presence on Instagram, LinkedIn, and Twitter. We handle the strategy, content creation, and posting schedule so you can focus on your business.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop', 
    icon: Megaphone,
    color: 'text-yellow-400',
    process: [
      { step: 1, title: 'Audit', description: 'Analyzing current performance.' },
      { step: 2, title: 'Calendar', description: 'Planning one month of content ahead.' },
      { step: 3, title: 'Creation', description: 'Designing graphics and writing captions.' },
      { step: 4, title: 'Management', description: 'Posting and engaging with comments.' }
    ],
    milestones: ['Monthly Retainer (Pre-paid)'],
    packages: {
      basic: { name: 'Starter', price: '$800/mo', description: 'Maintenance.', features: ['2 Platforms', '8 Posts/mo', 'Basic Reporting', 'Hashtag Strategy'] },
      advanced: { name: 'Growth', price: '$1,500/mo', description: 'Active growth.', features: ['3 Platforms', '15 Posts/mo', 'Stories/Reels', 'Community Management'] },
      pro: { name: 'Dominance', price: '$3,000/mo', description: 'Full takeover.', features: ['All Platforms', 'Daily Content', 'Video Editing', 'Influencer Outreach'] }
    },
    faq: [
      { question: 'Do I have to provide photos?', answer: 'It helps, but we can also use high-quality stock or create graphics.' }
    ]
  },
];

export const FEATURES: Feature[] = [
  { id: 1, title: 'Agile Methodology', description: 'We work in sprints to deliver consistent value and adapt to your feedback instantly.', icon: Zap },
  { id: 2, title: 'Data Driven', description: 'Every design and code decision is backed by analytics and user behavior data.', icon: Database },
  { id: 3, title: 'Secure & Scalable', description: 'Enterprise-grade security protocols and architecture built to handle growth.', icon: Shield },
  { id: 4, title: 'Global Talent', description: 'A curated team of senior developers and designers from top tech hubs.', icon: Globe },
  { id: 5, title: '24/7 Monitoring', description: 'We keep your systems running smoothly with round-the-clock uptime monitoring.', icon: Headphones },
  { id: 6, title: 'Transparent Tracking', description: 'Track progress, view designs, and manage invoices in your dedicated portal.', icon: Clock },
];

export const REVIEWS: Review[] = [
  { id: 1, user: 'Sarah Jenkins', role: 'CEO, TechFlow', rating: 5, comment: 'Webrandea transformed our SaaS MVP. The Figma prototypes were indistinguishable from the real app, helping us raise seed funding.', service: 'SaaS Prototype', date: '2 weeks ago', type: 'text' },
  { id: 2, user: 'Marcus Thorne', role: 'Founder, EstateVerify', rating: 5, comment: 'The GoHighLevel setup saved us 20 hours a week. The automation is flawless.', service: 'GHL Config', date: '1 month ago', type: 'text' },
  { id: 3, user: 'Elena Rodriguez', role: 'CMO, LuxeLife', rating: 5, comment: 'Our social engagement tripled in two months. The creative team really understands luxury branding.', service: 'Social Media', date: '3 days ago', type: 'text' },
  { id: 4, user: 'David Chen', role: 'CTO, OmniScale', rating: 5, comment: 'Clean code, excellent React architecture. Delivered the admin dashboard ahead of schedule.', service: 'Custom Web Dev', date: '1 week ago', type: 'text' },
  { id: 5, user: 'Michael Ross', role: 'Director, InnoVate', rating: 5, comment: 'The ROI we saw from the email marketing campaign was instant. Watch my full feedback here to see the dashboard results.', service: 'Email Marketing', date: '2 days ago', type: 'video', videoThumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop' },
  { id: 6, user: 'Jessica & Tom', role: 'Co-Founders, EcoWear', rating: 5, comment: 'Webrandea didn\'t just build a site, they built a brand. Truly amazing experience working with the design team.', service: 'Full Branding', date: '1 week ago', type: 'video', videoThumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop' },
];

export const FAQ_ITEMS: FAQItem[] = [
  { question: 'How do you handle project communication?', answer: 'We use Slack for daily comms and ClickUp/Trello for project management. You will have a dedicated channel.' },
  { question: 'What are your payment terms?', answer: 'Typically, we require a deposit to start (30-50% depending on the service) with the remainder due upon milestone completion.' },
  { question: 'Do you offer post-launch support?', answer: 'Yes, all development projects come with a 30-day warranty period. We also offer ongoing maintenance retainers.' },
  { question: 'Who owns the intellectual property?', answer: 'You do. Upon final payment, all code, designs, and assets are transferred to your ownership.' },
];

export const WORKS: Work[] = [
  {
    id: 'finance-flow',
    title: 'FinanceFlow Dashboard Redesign',
    client: 'FinanceFlow Inc.',
    category: 'UI/UX & Frontend Dev',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Modernizing a legacy fintech application for better usability and speed.',
    challenge: 'FinanceFlow suffered from high churn due to a cluttered interface and slow loading times on their analytics dashboard.',
    solution: 'We simplified the information architecture, introduced a dark mode, and rebuilt the frontend using React and WebSockets.',
    results: ['40% Increase in User Retention', '3s Reduced Load Time', '25% Higher Engagement'],
    process: [
      { title: 'User Research', description: 'Conducted 15 interviews with power users to identify pain points.' },
      { title: 'Prototyping', description: 'Created high-fidelity Figma prototypes to test new navigation flows.' },
      { title: 'Development', description: 'Migrated from Angular legacy code to Next.js for better performance.' },
      { title: 'Deployment', description: 'Rolled out in phases to ensure data integrity.' }
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'D3.js', 'WebSockets']
  },
  {
    id: 'luxe-fashion',
    title: 'Luxe Fashion E-commerce',
    client: 'Maison Luxe',
    category: 'Shopify Development',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'A high-conversion Shopify Plus store for a luxury clothing brand.',
    challenge: 'Maison Luxe had a beautiful brand but their online store was failing to convert traffic due to a clunky checkout.',
    solution: 'We built a custom Shopify theme focused on mobile-first luxury and a one-page checkout.',
    results: ['150% Increase in Mobile Sales', '25% Reduction in Cart Abandonment', '2x Faster Page Load'],
    process: [
      { title: 'Brand Audit', description: 'Analyzed the visual identity to ensure digital consistency.' },
      { title: 'Theme Dev', description: 'Custom coded Liquid templates for unique product layouts.' },
      { title: 'Optimization', description: 'Compressed assets and optimized scripts for 90+ Lighthouse score.' },
      { title: 'Launch', description: 'Seamless migration of 5,000+ SKUs from Magento.' }
    ],
    technologies: ['Shopify Plus', 'Liquid', 'JavaScript', 'Klaviyo']
  }
];