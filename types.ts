import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  color?: string;
}

export interface MethodologyStep {
  id: string;
  title: string;
  content: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
}

export interface EngagementModel {
  name: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}