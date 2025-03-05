import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'Your awesome landing page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 