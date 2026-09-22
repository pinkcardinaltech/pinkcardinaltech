import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pink Cardinal Technology — Modern Software Ventures & Architecture Advisory',
  description:
    'We build high-converting mobile self-service systems for essential industries and provide executive technology architecture advisory for enterprise modernization. Based in Minneapolis–St. Paul, MN.',
  keywords: [
    'software ventures',
    'technology advisory',
    'enterprise modernization',
    'mobile payments',
    'fractional CTO',
    'cloud architecture',
    'Minneapolis technology',
  ],
  authors: [{ name: 'Pink Cardinal Technology LLC' }],
  metadataBase: new URL('https://pinkcardinal.tech'),
  openGraph: {
    title: 'Pink Cardinal Technology',
    description:
      'Modern Software Ventures & Strategic Technology Architecture Advisory.',
    url: 'https://pinkcardinal.tech',
    siteName: 'Pink Cardinal Technology',
    images: [
      {
        url: '/images/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Pink Cardinal Technology Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pink Cardinal Technology',
    description: 'Modern Software Ventures & Strategic Technology Architecture.',
    images: ['/images/logo.jpg'],
  },
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-slate-950 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
