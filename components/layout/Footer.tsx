// app/components/Footer.tsx

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="p-4 text-right text-sm text-darkCharcoal mt-auto">
        <p>Created by Quoc Le © {currentYear}</p>
      </footer>
    );
  }