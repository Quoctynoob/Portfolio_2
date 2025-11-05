import '../styles/globals.css';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import { Inter } from 'next/font/google';
import ClientLayout from '@/components/layout/ClientLayout';

// Load fonts using next/font/google
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // better loading performance
  variable: '--font-inter'
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
    <html lang="en" className={`${inter.variable} `}>
      <body className={`${inter.className} bg-lightPeach min-h-screen`}>
        <ClientLayout>{children}</ClientLayout>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#e1f4ed',
              color: '#07271a',
              fontSize: '15px',
              fontWeight: '500',
              boxShadow: '0 4px 12px rgba(37, 187, 177, 0.15), 0 2px 0 2px rgba(7, 39, 26, 0.1)',
            },
            className: 'custom-toast',
          }}
        />
      </body>
    </html>
  );
}