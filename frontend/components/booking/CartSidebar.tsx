"use client";

import React from 'react';
import { useBooking } from '@/context/BookingContext';
import { usePathname, useRouter } from 'next/navigation';

const routeOrder = [
  '/booking',
  '/booking/services',
  '/booking/professional',
  '/booking/time',
  '/booking/checkout',
];

export default function CartSidebar() {
  const { state, totalPrice, totalDuration } = useBooking();
  const pathname = usePathname();
  const router = useRouter();

  const currentIndex = routeOrder.indexOf(pathname);
  const nextRoute = currentIndex !== -1 && currentIndex < routeOrder.length - 1 
    ? routeOrder[currentIndex + 1] 
    : null;

  // Determine if "Continue" should be disabled
  let isContinueDisabled = false;
  if (pathname === '/booking' && !state.branchId && !state.isGroup) {
    // In our simplified version, maybe any option is fine, but let's say they must select something.
    // For now, let's keep it simple: always enable on step 1 since it's just a routing click.
  } else if (pathname === '/booking/services' && state.services.length === 0) {
    isContinueDisabled = true;
  } else if (pathname === '/booking/professional' && !state.professionalId) {
    isContinueDisabled = true;
  } else if (pathname === '/booking/time' && (!state.date || !state.time)) {
    isContinueDisabled = true;
  }

  const handleContinue = () => {
    if (nextRoute) {
      router.push(nextRoute);
    }
  };

  return (
    <aside className="w-full md:w-96 bg-white md:border-l border-stone-200 p-6 flex flex-col md:h-screen sticky top-0">
      
      {/* Desktop Cart Items (hidden on mobile until expanded, but for simplicity, showing always in sidebar, and sticking to bottom on mobile) */}
      <div className="hidden md:block flex-1 overflow-y-auto pr-2">
        {/* Branch / Option Header */}
        <div className="flex items-start gap-4 mb-8">
          <div className="w-12 h-12 rounded-lg bg-stone-100 overflow-hidden shrink-0">
            {/* Placeholder image for branch */}
            <img src="/images/hero_bg_2.jfif" alt="Branch" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="font-bold">Niche Barbershop Salon and Spa</h2>
            <p className="text-sm text-stone-500">Parklands Rd, Nairobi</p>
          </div>
        </div>

        <hr className="border-stone-100 mb-6" />

        {/* Selected Services */}
        {state.services.length === 0 ? (
          <p className="text-stone-400 text-sm">No services selected</p>
        ) : (
          <div className="space-y-4">
            {state.services.map((service) => (
              <div key={service.id} className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{service.name}</p>
                  <p className="text-xs text-stone-500">{service.durationMinutes} min {state.professionalId && `with ${state.professionalId}`}</p>
                </div>
                <p className="font-medium">KES {service.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sticky Bottom Area (Visible on Mobile & Desktop) */}
      <div className="mt-auto pt-4 md:pt-6 border-t border-stone-200 bg-white">
        <div className="flex justify-between items-center font-bold mb-4">
          <span className="text-lg">Total</span>
          <span className="text-lg">KES {totalPrice.toLocaleString()}</span>
        </div>
        
        {nextRoute && (
          <button 
            onClick={handleContinue}
            disabled={isContinueDisabled}
            className="w-full bg-charcoal text-white py-4 rounded-xl font-medium hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            Continue
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        )}
      </div>
    </aside>
  );
}
