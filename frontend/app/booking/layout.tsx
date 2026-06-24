"use client";

import React from 'react';
import { BookingProvider } from '@/context/BookingContext';
import CartSidebar from '@/components/booking/CartSidebar';
import { usePathname } from 'next/navigation';

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const getBreadcrumbs = () => {
    switch (pathname) {
      case '/booking': return 'Options';
      case '/booking/services': return 'Options › Services';
      case '/booking/professional': return 'Options › Services › Professional';
      case '/booking/time': return 'Options › Services › Professional › Time';
      case '/booking/checkout': return 'Options › Services › Professional › Time › Checkout';
      default: return 'Booking';
    }
  };

  return (
    <BookingProvider>
      <div className="min-h-[100dvh] bg-stone-50 text-charcoal-text flex flex-col md:flex-row relative">
        {/* Left Column (Main Content) - 70% */}
        <div className="flex-1 flex flex-col min-w-0 md:w-[70%]">
          <header className="px-margin-mobile py-4 md:px-gutter md:py-6 border-b border-outline-variant/20 sticky top-0 bg-stone-50 z-10 flex items-center gap-2 text-sm font-medium text-on-surface-variant uppercase tracking-widest font-eyebrow-label">
            {getBreadcrumbs()}
          </header>
          <main className="flex-1 p-margin-mobile md:p-gutter overflow-y-auto pb-32 md:pb-12">
            {children}
          </main>
        </div>

        {/* Right Column (Sidebar Summary) - 30% */}
        <div className="fixed bottom-0 left-0 right-0 z-20 md:relative md:w-[30%] md:min-w-[320px] md:max-w-[400px]">
          <CartSidebar />
        </div>
      </div>
    </BookingProvider>
  );
}
