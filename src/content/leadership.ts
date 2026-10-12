import ceoPortrait from '@/assets/images/team/abdulazeez-omotola.jpg';
import type { ContentImage } from '@/types';

export interface Leader {
  name: string;
  role: string;
  image: ContentImage;
  bio: string[];
  highlights: string[];
}

export const ceo: Leader = {
  name: 'Abdulazeez Asimiyu Omotola',
  role: 'Chief Executive Officer',
  image: {
    src: ceoPortrait,
    alt: 'Portrait of Abdulazeez Asimiyu Omotola, CEO of TOLA FIXIT',
  },
  bio: [
    'Abdulazeez Asimiyu Omotola is a certified professional mechanic with over 8 years of experience in vehicle repair and maintenance.',
    'Based in Ijebu Ode, he has travelled to clients in states across Nigeria to deliver top-quality repair and maintenance work wherever their vehicles are.',
  ],
  highlights: [
    'Certified mechanic',
    '8+ years of experience',
    'Clients across Nigeria',
  ],
};
