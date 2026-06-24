"use client";

import React from 'react';
import { useBooking } from '@/context/BookingContext';
import { useRouter } from 'next/navigation';

export default function BookingBranchPage() {
  const { state, dispatch } = useBooking();
  const router = useRouter();

  const handleSelectOption = (isGroup: boolean) => {
    dispatch({ type: 'SET_IS_GROUP', payload: isGroup });
    dispatch({ type: 'SET_BRANCH', payload: 'rolins-spa' }); 
    router.push('/booking/services');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="font-headline-xl-mobile md:font-headline-xl text-charcoal-text">Select an option</h1>
      
      <div className="space-y-4">
        {/* Branch Info Card (Display Only) */}
        <div className="w-full bg-white border border-outline-variant/20 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
           <div className="w-20 h-20 rounded-md bg-stone-100 overflow-hidden shrink-0">
            <img src="/images/hero_salon_spa.png" alt="Branch" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-eyebrow-label text-primary uppercase tracking-widest">DEFAULT LOCATION</p>
            <h3 className="font-headline-md text-charcoal-text mt-1">Rolins Spa and Barbershop</h3>
            <p className="text-on-surface-variant font-body-md mt-1">Ruaka & Kiambu Road</p>
          </div>
        </div>

        {/* Action Buttons */}
        <button 
          onClick={() => handleSelectOption(false)}
          className={`w-full bg-white border ${!state.isGroup && state.branchId ? 'border-primary ring-1 ring-primary shadow-sm' : 'border-outline-variant/20'} rounded-lg p-6 text-left flex items-center justify-between hover:border-primary transition-colors card-hover-lift`}
        >
          <div>
            <h3 className="font-headline-md text-lg text-charcoal-text">Book an appointment</h3>
            <p className="text-on-surface-variant font-body-md mt-1">Schedule services for yourself</p>
          </div>
          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>

        <button 
          onClick={() => handleSelectOption(true)}
          className={`w-full bg-white border ${state.isGroup && state.branchId ? 'border-primary ring-1 ring-primary shadow-sm' : 'border-outline-variant/20'} rounded-lg p-6 text-left flex items-center justify-between hover:border-primary transition-colors card-hover-lift`}
        >
          <div>
            <h3 className="font-headline-md text-lg text-charcoal-text">Book group appointment</h3>
            <p className="text-on-surface-variant font-body-md mt-1">For yourself and others</p>
          </div>
          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
