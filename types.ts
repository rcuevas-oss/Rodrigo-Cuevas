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
  icon: LucideIcon;
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