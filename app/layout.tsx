import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReduxProvider } from '@/lib/redux/provider';
import DisclaimerBanner from '@/components/DisclaimerBanner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vectorium - Crypto Carbon Credits',
  description: 'Revolutionizing sustainability through blockchain technology and carbon credits trading.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DisclaimerBanner />
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}