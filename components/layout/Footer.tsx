// app/components/Footer.tsx

export default function Footer() {
    const currentYear = new Date().getFullYear();

    //Created by Quoc Le © 2025
    
    return (
      <footer className="p-4 text-right text-sm text-darkCharcoal mt-auto">
        <p>Last updated: Dec 22nd, 2025 by <span className="underline font-semibold">Quoc Le</span></p>
      </footer>
    );
  }