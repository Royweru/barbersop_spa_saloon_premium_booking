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
  const { state, totalPrice } = useBooking();
  const pathname = usePathname();
  const router = useRouter();

  const currentIndex = routeOrder.indexOf(pathname);
  const nextRoute = currentIndex !== -1 && currentIndex < routeOrder.length - 1 
    ? routeOrder[currentIndex + 1] 
    : null;

  let isContinueDisabled = false;
  if (pathname === '/booking/services' && state.services.length === 0) {
    isContinueDisabled = true;
  } else if (pathname === '/booking/professional' && !state.professionalId) {
    isContinueDisabled = true;
  } else if (pathname === '/booking/time' && (!state.date || !state.time)) {
    isContinueDisabled = true;
  }

  return (
    <aside className="w-full h-full bg-white md:border-l border-outline-variant/20 p-margin-mobile md:p-gutter flex flex-col md:h-[100dvh] sticky top-0 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] md:shadow-none">
      
      {/* Desktop Cart Items */}
      <div className="hidden md:flex flex-col flex-1 overflow-y-auto pr-2">
        <h2 className="font-headline-md text-charcoal-text mb-8">Cart Summary</h2>
        
        {state.services.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center text-on-surface-variant opacity-70">
             <svg className="w-16 h-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
             </svg>
             <p>No services selected</p>
          </div>
        ) : (
          <div className="space-y-6 flex-1">
            <div className="pb-4 border-b border-outline-variant/20">
              <p className="font-eyebrow-label text-primary">LOCATION</p>
              <p className="font-medium text-charcoal-text mt-1">Rolins Spa and Barbershop</p>
            </div>
            
            {state.services.map((service) => (
              <div key={service.id} className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-charcoal-text">{service.name}</p>
                  <p className="text-sm text-on-surface-variant">{service.durationMinutes} min</p>
                </div>
                <p className="font-medium text-charcoal-text">KES {service.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sticky Bottom Area */}
      <div className="mt-auto pt-4 md:pt-6 bg-white">
        <div className="flex justify-between items-center font-bold mb-4">
          <span className="text-lg text-charcoal-text">Total</span>
          <span className="text-lg text-charcoal-text">KES {totalPrice.toLocaleString()}</span>
        </div>
        
        {nextRoute && (
          <button 
            onClick={() => router.push(nextRoute)}
            disabled={isContinueDisabled}
            className="w-full font-button-text bg-primary text-charcoal-text py-4 rounded-md hover:bg-primary-fixed transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
          >
            Continue
          </button>
        )}
        {!nextRoute && pathname === '/booking/checkout' && (
          <button 
            type="submit"
            form="checkout-form"
            className="w-full font-button-text bg-success-green text-white py-4 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg"
          >
            Confirm Booking
          </button>
        )}
      </div>
    </aside>
  );
}
