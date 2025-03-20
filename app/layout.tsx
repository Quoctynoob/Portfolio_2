// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Libre_Barcode_39, Londrina_Sketch, Pacifico, Train_One } from 'next/font/google';

// Load fonts using next/font/google
const inter = Inter({ subsets: ['latin'] });
const libreBarcode = Libre_Barcode_39({ 
  weight: '400', 
  subsets: ['latin'],
  variable: '--font-libre-barcode', 
  display: 'swap'
});
const londrinaSketch = Londrina_Sketch({ 
  weight: '400', 
  subsets: ['latin'],
  variable: '--font-londrina-sketch', 
  display: 'swap'
});
const pacifico = Pacifico({ 
  weight: '400', 
  subsets: ['latin'],
  variable: '--font-pacifico', 
  display: 'swap'
});
const trainOne = Train_One({ 
  weight: '400', 
  subsets: ['latin'],
  variable: '--font-train-one', 
  display: 'swap'
});

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
    <html lang="en" className={`${libreBarcode.variable} ${londrinaSketch.variable} ${pacifico.variable} ${trainOne.variable}`}>
      <body className={`${inter.className} bg-beige min-h-screen`}>
        {children}
      </body>
    </html>
  );
}