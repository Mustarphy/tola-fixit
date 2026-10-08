import { Poppins } from 'next/font/google';

export const brandFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-brand',
});

export const fontVariables = brandFont.variable;
