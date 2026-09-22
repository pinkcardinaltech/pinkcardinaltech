import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Pink Cardinal Technology',
  description:
    'Software ventures & architecture advisory. Minneapolis – St. Paul, MN.',
  metadataBase: new URL('https://pinkcardinal.tech'),
  openGraph: {
    title: 'Pink Cardinal Technology',
    description: 'Software ventures & architecture advisory.',
    url: 'https://pinkcardinal.tech',
    siteName: 'Pink Cardinal Technology',
    images: [{ url: '/images/logo.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  icons: { icon: '/images/logo.jpg', apple: '/images/logo.jpg' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
