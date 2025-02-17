import Layout from '@src/layout';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

// Define local font
const aeonik = localFont({
  src: [
    {
      path: '../fonts/Aeonik Pro Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/Aeonik Pro Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Aeonik Pro Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Aeonik Pro Regular Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/Aeonik Pro Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Aeonik Pro Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Aeonik Pro Black.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-aeonik',
});

export const metadata: Metadata = {
  title: {
    default: 'Clay',
    template: '%s | Clay',
  },
  keywords: ['clay', 'homes', 'modern', 'luxury', 'timeless'],
  description: 'The Art of Transforming Nature into Legacies',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${aeonik.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
