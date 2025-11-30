import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface AudienceItem {
  id: string;
  text: string;
}

export interface BonusItem {
  id: string;
  text: string;
  subText?: string;
  highlight?: boolean;
}