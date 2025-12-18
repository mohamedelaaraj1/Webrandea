import { Layout, Globe, Code, PenTool, Database, Megaphone, Users, Mail, Settings, Briefcase, Shield, Zap, Lock, Clock, Headphones, Target, Sword, ShieldAlert, Trophy, Zap as Flash, Gamepad2 } from 'lucide-react';
import { Service, Feature, Review, FAQItem, Work } from './types.ts';

export const SERVICES: Service[] = [
  { 
    id: 'lol-boost', 
    name: 'League of Legends Boosting', 
    shortDescription: 'Reach your desired rank in LoL with our professional boosters.',
    fullDescription: 'Our professional League of Legends boosting service helps you climb the ladder safely and quickly. Whether you need division boosting, placement matches, or win boosting, our Challenger-tier players have you covered.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop', 
    icon: Trophy,
    color: 'text-yellow-400', 
    popular: true,
    process: [
      { step: 1, title: 'Selection', description: 'Choose your current and target rank or number of wins.' },
      { step: 2, title: 'Secure Payment', description: 'Pay via our encrypted gateway to protect your data.' },
      { step: 3, title: 'Booster Assigned', description: 'A high-ELO player starts working on your account immediately.' },
      { step: 4, title: 'Rank Up', description: 'Track progress in your dashboard until the goal is reached.' }
    ],
    milestones: ['100% Upfront Secure Payment'],
    packages: {
      basic: { name: 'Bronze to Silver', price: '$25', description: 'Fast climb through low ELO.', features: ['Solo Queue', 'Flash on F/D', 'Secure VPN', 'Offline Mode'] },
      advanced: { name: 'Gold to Platinum', price: '$85', description: 'Professional mid-tier climb.', features: ['Duo Queue Option', 'Specific Champions', 'Daily Progress Updates', '24/7 Support'] },
      pro: { name: 'Master Tier Push', price: '$250+', description: 'Elite level rank pushing.', features: ['Challenger Booster', 'Priority Start', 'Live Stream Access', 'Professional Coaching Tips'] }
    },
    faq: [
      { question: 'Is boosting safe?', answer: 'Yes, we use high-quality VPNs to match your location and play in offline mode to ensure your account stays safe.' },
      { question: 'Can I play during the boost?', answer: 'We recommend not playing ranked games, but you can coordinate with your booster for normal games or ARAMs.' }
    ]
  },
  { 
    id: 'val-boost', 
    name: 'Valorant Rank Boosting', 
    shortDescription: 'Radiant-tier players ready to take your account to the top.',
    fullDescription: 'Elevate your Valorant experience. Our Radiant and Immortal boosters will help you overcome the "ELO hell" and reach the rank you deserve. Fast, discreet, and reliable.',
    image: 'https://images.unsplash.com/photo-1560253023-3ee71f1f93fb?q=80&w=1000&auto=format&fit=crop', 
    icon: Target,
    color: 'text-red-500',
    popular: true,
    process: [
      { step: 1, title: 'Rank Selection', description: 'Specify your current RR and desired rank.' },
      { step: 2, title: 'Dashboard Login', description: 'Access your private area to chat with your booster.' },
      { step: 3, title: 'The Grind', description: 'Our pro players dominate the matches with high KDA.' },
      { step: 4, title: 'Victory', description: 'Enjoy your new rank and rewards.' }
    ],
    milestones: ['Full Payment upfront via Stripe/Crypto'],
    packages: {
      basic: { name: 'Iron to Silver', price: '$30', description: 'Escape the lower tiers.', features: ['Fast Completion', 'Agent Selection', 'VPN Protection'] },
      advanced: { name: 'Platinum to Diamond', price: '$110', description: 'Enter the competitive high tiers.', features: ['Duo with Booster', 'High Winrate', 'Priority Queue'] },
      pro: { name: 'Ascendant to Immortal', price: '$350', description: 'Reach the elite ranks.', features: ['Radiant Booster', 'Live Coaching', 'Daily Reports', 'VOD Review'] }
    },
    faq: [
      { question: 'Do you use cheats?', answer: 'Never. We only employ high-skill professional players. Cheating is strictly prohibited and would ruin our reputation.' }
    ]
  },
  { 
    id: 'wow-carries', 
    name: 'WoW Mythic+ & Raid Carries', 
    shortDescription: 'Clear the hardest content in World of Warcraft with ease.',
    fullDescription: 'Get the best gear and achievements in World of Warcraft. Our pro teams provide Mythic+ carries, Heroic/Mythic raid clears, and specialized achievement runs for the latest expansion.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop', 
    icon: Sword,
    color: 'text-orange-500',
    process: [
      { step: 1, title: 'Booking', description: 'Select your dungeon level or raid difficulty.' },
      { step: 2, title: 'Scheduling', description: 'Choose a time slot that fits your schedule.' },
      { step: 3, title: 'Participation', description: 'Join the group (Self-play) or let us handle it (Piloted).' },
      { step: 4, title: 'Loot', description: 'Collect your high-level gear and achievements.' }
    ],
    milestones: ['Deposit to secure slot', 'Balance before start'],
    packages: {
      basic: { name: 'Mythic+ 10 Run', price: '$15', description: 'Standard gear run.', features: ['Self-play', 'Fast Clear', 'Loot Traders Available'] },
      advanced: { name: 'Heroic Raid Clear', price: '$45', description: 'Full clear with AOTC.', features: ['Full Loot Priority', 'Achievement Included', 'Discord Comms'] },
      pro: { name: 'Gladiator Push', price: '$400+', description: 'Elite PvP rating.', features: ['Top 0.5% Players', 'Coached Games', 'Account Safety Guaranteed'] }
    },
    faq: [
      { question: 'Is Self-play safer?', answer: 'Yes, Self-play is 100% safe as no one else logs into your account.' }
    ]
  },
  { 
    id: 'tft-boost', 
    name: 'TFT Rank Boosting', 
    shortDescription: 'Master the meta with our Teamfight Tactics pros.',
    fullDescription: 'Climb the Teamfight Tactics ladder with expert guidance. Our boosters know the best comps and positioning to ensure top-4 finishes in every game.',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1000&auto=format&fit=crop', 
    icon: Flash,
    color: 'text-blue-400',
    process: [
      { step: 1, title: 'Setup', description: 'Identify your current LP and target tier.' },
      { step: 2, title: 'Analysis', description: 'Booster analyzes your account meta.' },
      { step: 3, title: 'Climb', description: 'Winning games using top-tier compositions.' },
      { step: 4, title: 'Completion', description: 'Handover of your upgraded account.' }
    ],
    milestones: ['100% Upfront'],
    packages: {
      basic: { name: 'Iron to Gold', price: '$20', description: 'Steady climb.', features: ['Fast Start', 'Meta Comps', 'VPN'] },
      advanced: { name: 'Platinum to Diamond', price: '$70', description: 'Serious ladder push.', features: ['Daily Updates', 'Duo Option', 'Strategy Notes'] },
      pro: { name: 'Master to Challenger', price: '$200+', description: 'Elite competitive play.', features: ['Top 100 Booster', 'Detailed Feedback', 'Priority Service'] }
    },
    faq: [
      { question: 'How long does it take?', answer: 'Usually 1-3 days depending on the rank distance.' }
    ]
  },
];

export const FEATURES: Feature[] = [
  { id: 1, title: 'VPN Protection', description: 'We use high-end VPN services to match your IP location and keep your account secure.', icon: Shield },
  { id: 2, title: 'Instant Start', description: 'Most orders start within 15-30 minutes of payment confirmation.', icon: Flash },
  { id: 3, title: 'Professional Boosters', description: 'All our boosters undergo rigorous testing and are top-tier players in their respective games.', icon: Trophy },
  { id: 4, title: '24/7 Live Support', description: 'Our dedicated support team is always available to answer your questions via live chat or Discord.', icon: Headphones },
  { id: 5, title: 'Order Tracking', description: 'Track every step of your order through your personalized customer dashboard.', icon: Clock },
  { id: 6, title: 'Competitive Pricing', description: 'We offer the best market rates for premium, high-quality gaming services.', icon: Target },
];

export const REVIEWS: Review[] = [
  { id: 1, user: 'GamerX', role: 'LoL Player', rating: 5, comment: 'Webrandea got me from Silver to Diamond in just 4 days. Unbelievable skill and speed!', service: 'LoL Boosting', date: '2 days ago', type: 'text' },
  { id: 2, user: 'ViperMain', role: 'Valorant Player', rating: 5, comment: 'The Immortal boost was clean. My booster was super friendly and gave me some tips during duo sessions.', service: 'Valorant Boosting', date: '1 week ago', type: 'text' },
  { id: 3, user: 'LootGoblin', role: 'WoW Raider', rating: 5, comment: 'Got my Mythic raid clear without a hitch. The team was incredibly coordinated.', service: 'WoW Carries', date: '3 days ago', type: 'text' },
  { id: 4, user: 'Tactician', role: 'TFT Player', rating: 5, comment: 'Diamond was always a struggle until I used Webrandea. The booster clearly knew the meta perfectly.', service: 'TFT Boosting', date: '1 week ago', type: 'text' },
  { id: 5, user: 'ProStreamer', role: 'Content Creator', rating: 5, comment: 'I use Webrandea for all my secondary account leveling. Watch my video to see the speed of their services!', service: 'Leveling Service', date: '2 days ago', type: 'video', videoThumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop' },
  { id: 6, user: 'Sarah & Ben', role: 'Duo Queuers', rating: 5, comment: 'We did the Duo boost together. It was so much fun and we actually learned a lot about the game.', service: 'Duo Boosting', date: '1 week ago', type: 'video', videoThumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop' },
];

export const FAQ_ITEMS: FAQItem[] = [
  { question: 'Is my account info safe?', answer: 'Absolutely. We use encrypted databases and your login details are only shared with the assigned professional booster.' },
  { question: 'What is "Offline Mode"?', answer: 'Our boosters use a script that prevents your friends from seeing you are online or playing during the boost.' },
  { question: 'Can I choose my booster?', answer: 'In our "Advanced" and "Pro" packages, you can request a specific booster or select from a list of available elite players.' },
  { question: 'What is the refund policy?', answer: 'We offer full refunds if the boost has not started. Partial refunds are available based on the progress made if you choose to cancel mid-way.' },
];

export const WORKS: Work[] = [
  {
    id: 'rank-climb-master',
    title: 'Silver to Master Tier Climb',
    client: 'Anonymous Gamer',
    category: 'LoL Boosting',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Taking a low-ELO account to the elite tier in record time.',
    challenge: 'The client was stuck in "ELO Hell" for 3 seasons and wanted to experience high-level play before the season end.',
    solution: 'We assigned our top Challenger booster who maintained a 92% winrate across 150+ games using carry jungle champions.',
    results: ['Reached Master in 12 Days', '92% Winrate', '0 Penalties/Warnings'],
    process: [
      { title: 'Diagnosis', description: 'Analyzed MMR to ensure the fastest possible climb.' },
      { title: 'Sprint 1', description: 'Rapidly cleared Bronze through Platinum in 4 days.' },
      { title: 'The Grind', description: 'Faced elite players in Diamond with high-level macro play.' },
      { title: 'Completion', description: 'Reached Master tier with 100LP to spare.' }
    ],
    technologies: ['VPN Proxy', 'Offline Script', 'Discord Updates']
  },
  {
    id: 'radiant-push',
    title: 'Radiant Rank Achievement',
    client: 'Competitive Enthusiast',
    category: 'Valorant Boosting',
    image: 'https://images.unsplash.com/photo-1560253023-3ee71f1f93fb?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Achieving the highest possible rank in Valorant.',
    challenge: 'Client wanted the Radiant gun buddy but was hovering in Immortal 2 with inconsistent teammates.',
    solution: 'Our Radiant boosters played in a duo-stack to ensure maximum coordination and round winrate.',
    results: ['Radiant Rank Reached', 'Top 500 Regional Ranking', 'Unbeatable KDA'],
    process: [
      { title: 'Team Building', description: 'Matched two Radiant boosters for a duo-carry session.' },
      { title: 'Execution', description: 'Won 18 out of 20 matches with superior aim and tactics.' },
      { title: 'Safety Check', description: 'Ensured all matches were played on clean IPs.' },
      { title: 'Handover', description: 'Verified rank and rewards before closing the order.' }
    ],
    technologies: ['High-Performance VPN', 'HWID Spoofer (Prevention)', 'Private API Monitoring']
  }
];