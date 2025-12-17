import React from 'react';

export interface ServicePackage {
  name: string;
  price: string;
  description: string;
  features: string[];
}

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon: React.ElementType;
  color: string;
  popular?: boolean;
  process: ServiceProcess[];
  milestones: string[];
  packages: {
    basic: ServicePackage;
    advanced: ServicePackage;
    pro: ServicePackage;
  };
  faq: FAQItem[];
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Review {
  id: number;
  user: string;
  role: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
  type?: 'text' | 'video';
  videoThumbnail?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface WorkStep {
  title: string;
  description: string;
}

export interface Work {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  process: WorkStep[];
  technologies: string[];
}