// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quoc Le | Portfolio',
  description: 'Personal portfolio website for Quoc Le',
  icons: {
    icon: '/favicon/icon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Link to the fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+39&family=Londrina+Sketch&family=Pacifico&family=Train+One&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-beige min-h-screen">
        {children}
      </body>
    </html>
  );
}