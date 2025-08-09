import '@/src/styles/globals.css';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import { 
  Inter, Libre_Barcode_39, 
  Londrina_Sketch, Pacifico, 
  Train_One, 
  Dancing_Script, 
  Noto_Serif_Display, 
  Playwrite_HU 
} from 'next/font/google';

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
const dancingScript = Dancing_Script({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-dancing-script', 
  display: 'swap'
});
const notoSerifDisplay = Noto_Serif_Display({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-noto-serif-display',
  display: 'swap'
});
const playWrite = Playwrite_HU({ 
  weight: '300',
  variable: '--font-playWrite', 
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
    <html lang="en" className={`${libreBarcode.variable} ${londrinaSketch.variable} ${playWrite.variable} ${pacifico.variable} ${trainOne.variable} ${dancingScript.variable} ${notoSerifDisplay.variable}`}>
      <body className={`${inter.className} bg-beige min-h-screen`}>
        {children}
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