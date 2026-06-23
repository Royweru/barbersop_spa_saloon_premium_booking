"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-charcoal-surface border-b border-primary/20 flex justify-between items-center px-margin-mobile md:px-gutter h-20 transition-all duration-300">
        <div className="flex items-center gap-4">
          <button 
            className="text-primary hover:text-primary-fixed transition-colors duration-300 md:hidden scale-95"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <Link href="/" className="font-headline-lg text-headline-lg font-bold tracking-tighter text-primary">ROLIN</Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#" className="font-button-text text-button-text text-primary border-b-2 border-primary pb-1">Home</Link>
          <Link href="#" className="font-button-text text-button-text text-on-surface-variant hover:text-primary transition-colors duration-300">Services</Link>
          <Link href="#" className="font-button-text text-button-text text-on-surface-variant hover:text-primary transition-colors duration-300">Team</Link>
          <Link href="#" className="font-button-text text-button-text text-on-surface-variant hover:text-primary transition-colors duration-300">Branches</Link>
          <Link href="#" className="font-button-text text-button-text text-on-surface-variant hover:text-primary transition-colors duration-300">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <a href="/booking" target="_blank" rel="noopener noreferrer">
          <button className="font-button-text text-button-text bg-primary text-charcoal-text px-6 py-3 rounded hover:bg-primary-fixed transition-colors">BOOK NOW</button>
          </a>
          
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Side Sheet */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-charcoal-surface z-[70] transform transition-transform duration-300 md:hidden flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-margin-mobile h-20 border-b border-primary/20">
          <span className="font-headline-lg text-headline-lg font-bold tracking-tighter text-primary">ROLIN</span>
          <button 
            className="text-primary hover:text-primary-fixed transition-colors duration-300 scale-95"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-8 px-margin-mobile flex flex-col gap-6">
          <Link href="#" className="font-headline-md text-headline-md text-primary border-l-4 border-primary pl-4">Home</Link>
          <Link href="#" className="font-headline-md text-headline-md text-off-white-text hover:text-primary transition-colors duration-300 pl-5">Services</Link>
          <Link href="#" className="font-headline-md text-headline-md text-off-white-text hover:text-primary transition-colors duration-300 pl-5">Team</Link>
          <Link href="#" className="font-headline-md text-headline-md text-off-white-text hover:text-primary transition-colors duration-300 pl-5">Branches</Link>
          <Link href="#" className="font-headline-md text-headline-md text-off-white-text hover:text-primary transition-colors duration-300 pl-5">Contact</Link>
        </nav>

        <div className="p-margin-mobile border-t border-primary/20 space-y-6">
          <div className="flex gap-2">
            <button className="flex-1 bg-surface-container py-2 px-3 rounded-full text-xs text-on-surface-variant border border-outline-variant flex items-center justify-center gap-1 font-button-text">
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              Ruaka
            </button>
            {/* <button className="flex-1 bg-transparent py-2 px-3 rounded-full text-xs text-on-surface-variant border border-transparent hover:border-outline-variant flex items-center justify-center gap-1 font-button-text transition-all">
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              Kiambu
            </button> */}
          </div>
          <div className="flex flex-col gap-3">
            
            <button className="w-full font-button-text text-button-text border border-primary text-primary px-6 py-3 rounded hover:bg-primary/10 transition-colors">Login</button>
            <a href="/booking" target='_blank'>
            <button className="w-full font-button-text text-button-text bg-primary text-charcoal-text px-6 py-3 rounded hover:bg-primary-fixed transition-colors"
            >BOOK NOW</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
