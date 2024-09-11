import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ToastProvider } from '@fucina/ui';
import { ThemeProvider } from '@/components/theme-provider';

import { sans, brand, logo } from '@/styles/fonts/font';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fucina - Product Template',
  description: 'Open source product template',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${brand.variable} ${logo.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <ToastProvider />
      </body>
    </html>
  );
}
