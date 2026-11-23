import type { LucideIcon } from 'lucide-react';

export interface CtaLink {
  label: string;
  to?: string;
  href?: string;
}

export interface FeatureItem {
  icon: LucideIcon | string;
  title: string;
  text: string;
}

export interface StepItem {
  icon: LucideIcon | string;
  title: string;
  text: string;
}

export interface FaqItem {
  q: string;
  a: string;
}
