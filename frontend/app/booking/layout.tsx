import React from 'react';
import { BookingProvider } from '@/context/BookingContext';
import Stepper from '@/components/booking/Stepper';
import CartSidebar from '@/components/booking/CartSidebar';

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return (
    <BookingProvider>
      <div className="min-h-screen bg-stone-50 text-charcoal flex flex-col md:flex-row relative">
        
        {/* Left Column (Main Content) */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Navigation / Stepper */}
          <header className="px-6 py-6 md:px-12 md:py-8 border-b border-stone-200 sticky top-0 bg-stone-50 z-10">
            <Stepper />
          </header>

          {/* Dynamic Step Content */}
          <main className="flex-1 p-6 md:p-12 overflow-y-auto pb-32 md:pb-12">
            {children}
          </main>
        </div>

        {/* Right Column (Sidebar Summary) */}
        <div className="fixed bottom-0 left-0 right-0 z-20 md:relative md:z-auto">
          <CartSidebar />
        </div>

      </div>
    </BookingProvider>
  );
}
