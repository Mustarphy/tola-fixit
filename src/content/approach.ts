import type { LucideIcon } from 'lucide-react';
import {
  ClipboardCheck,
  MessageSquareText,
  ScanSearch,
  ShieldCheck,
} from 'lucide-react';

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Principle {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const serviceProcessSteps: ProcessStep[] = [
  {
    title: 'Tell us about your vehicle',
    description:
      'Share the make, model and what you’ve noticed, even if you’re not sure what the problem is.',
  },
  {
    title: 'Inspection and diagnosis',
    description:
      'The vehicle is checked so the work is based on what is actually wrong.',
  },
  {
    title: 'Clear recommendations',
    description:
      'Findings and recommended work are explained before any repair begins.',
  },
  {
    title: 'Service and handover',
    description:
      'The agreed work is carried out and you are told what was done.',
  },
];

export const approachPrinciples: Principle[] = [
  {
    icon: ScanSearch,
    title: 'Diagnose before repairing',
    description:
      'Replacing parts on a guess wastes your money. We look for the cause of a problem first, so the repair addresses what is actually wrong.',
  },
  {
    icon: MessageSquareText,
    title: 'Explain in plain language',
    description:
      'You should understand what is wrong with your vehicle and why a repair is recommended, without needing a mechanic’s vocabulary.',
  },
  {
    icon: ClipboardCheck,
    title: 'Agree before work begins',
    description:
      'Findings and recommended work are discussed with you before any repair starts, so there are no surprises.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety first',
    description:
      'Where several issues are found, we help you separate what affects safety now from what can be planned for later.',
  },
];
