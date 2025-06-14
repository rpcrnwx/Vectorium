import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ReduxProvider } from '@/lib/redux/provider';
import { generateOgImageUrl } from '@/lib/og';

const inter = Inter({ subsets: ['latin'] });

// Define the base URL for the site
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vectorium.vercel.app';
const siteName = 'Vectorium';
const siteDescription = 'Revolutionizing sustainability through blockchain technology and carbon credits trading.';

const ogImageUrl = generateOgImageUrl(
  'Vectorium | Crypto Carbon Credits',
  'Revolutionizing sustainability through blockchain technology and carbon credits trading.'
);

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
};

export const metadata: Metadata = {
  title: {
    default: `${siteName} | Crypto Carbon Credits`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'carbon credits',
    'blockchain',
    'sustainability',
    'crypto',
    'carbon offset',
    'climate change',
    'ESG',
  ],
  authors: [{ name: 'Vectorium Team' }],
  creator: 'Vectorium',
  publisher: 'Vectorium',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: siteDescription,
    images: [{
      url: ogImageUrl,
      width: 1200,
      height: 630,
      alt: 'Vectorium - Crypto Carbon Credits',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: [ogImageUrl],
    creator: '@vectorium',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content={siteName} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={siteName} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#10B981" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: siteName,
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              sameAs: [
                'https://twitter.com/vectorium',
                'https://linkedin.com/company/vectorium',
              ],
              description: siteDescription,
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}