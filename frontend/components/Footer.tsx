import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-section-padding-v px-margin-mobile md:px-gutter grid grid-cols-1 md:grid-cols-3 gap-stack-lg bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant text-on-surface-variant">
      <div className="space-y-4">
        <h3 className="font-headline-md text-headline-md text-primary font-bold">ROLIN</h3>
        <p className="font-body-md text-body-md max-w-xs">Precision grooming and premium relaxation therapies in Nairobi. Elevate your standard.</p>
        <p className="font-eyebrow-label text-eyebrow-label mt-8">© 2024 ROLIN BARBERSHOP & SPA. PRECISION & RELAXATION.</p>
      </div>
      <div className="space-y-4">
        <h4 className="font-button-text text-button-text text-off-white-text uppercase tracking-wider mb-4">Locations</h4>
        <div className="mb-4">
          <p className="font-bold text-primary">Ruaka Branch</p>
          <p className="font-body-md text-body-md">Ruaka Square, Ground Floor</p>
        </div>
        <div>
          <p className="font-bold text-primary">Kiambu Road Branch</p>
          <p className="font-body-md text-body-md">Ridgeways Mall, 1st Floor</p>
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="font-button-text text-button-text text-off-white-text uppercase tracking-wider mb-4">Quick Links</h4>
        <div className="flex flex-col space-y-2">
          <Link href="#" className="font-body-md text-body-md hover:text-primary-fixed opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</Link>
          <Link href="#" className="font-body-md text-body-md hover:text-primary-fixed opacity-80 hover:opacity-100 transition-opacity">Terms of Service</Link>
          <Link href="#" className="font-body-md text-body-md hover:text-primary-fixed opacity-80 hover:opacity-100 transition-opacity">Careers</Link>
          <Link href="#" className="font-body-md text-body-md hover:text-primary-fixed opacity-80 hover:opacity-100 transition-opacity">Feedback</Link>
        </div>
      </div>
    </footer>
  );
}
