import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fucina - Product Template',
  description: 'Open source product template',
  keywords: ['Fucina', 'Product Template'],
  metadataBase: new URL('https://www.yourdomain.com'),
  alternates: {
    canonical: 'https://www.yourdomain.com',
  },
  openGraph: {
    title: 'Fucina - Product Template',
    description: 'Open source product template',
    url: 'https://www.yourdomain.com',
    siteName: 'Fucina',
    images: [
      {
        url: 'https://www.yourdomain.com/assets/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://www.yourdomain.com/assets/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'Open source product template',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'Fucina - Product Template',
    description: 'Open source product template',
    card: 'summary_large_image',
    images: [
      {
        url: 'https://www.yourdomain.com/assets/twitter-og.png',
        alt: 'Open source product template',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};
