import { Barlow, Inter } from 'next/font/google';

export const bodyFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const headingFont = Barlow({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-heading',
});

export const fontVariables = `${bodyFont.variable} ${headingFont.variable}`;
