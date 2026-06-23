"use client";

import React from 'react';
import { useBooking } from '@/context/BookingContext';
import { useRouter } from 'next/navigation';

export default function BookingBranchPage() {
  const { state, dispatch } = useBooking();
  const router = useRouter();

  const handleSelectOption = (isGroup: boolean) => {
    dispatch({ type: 'SET_IS_GROUP', payload: isGroup });
    dispatch({ type: 'SET_BRANCH', payload: 'niche-parklands' }); // Hardcoded branch for now
    router.push('/booking/services');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="font-outfit text-3xl font-bold mb-8">Select an option</h1>
      
      <div className="space-y-4">
        {/* Branch Info Card (Display Only) */}
        <div className="w-full bg-white border border-stone-200 rounded-2xl p-6 flex items-center gap-4 mb-8">
           <div className="w-16 h-16 rounded-xl bg-stone-100 overflow-hidden shrink-0">
            <img src="/images/hero_bg_2.jfif" alt="Branch" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Niche Barbershop Salon and Spa</h3>
            <p className="text-stone-500 text-sm">Parklands Rd, Nairobi</p>
          </div>
        </div>

        {/* Action Buttons */}
        <button 
          onClick={() => handleSelectOption(false)}
          className={`w-full bg-white border ${!state.isGroup && state.branchId ? 'border-gold ring-1 ring-gold' : 'border-stone-200'} rounded-2xl p-6 text-left flex items-center justify-between hover:border-gold transition-colors`}
        >
          <div>
            <h3 className="font-bold text-lg">Book an appointment</h3>
            <p className="text-stone-500 text-sm">Schedule services for yourself</p>
          </div>
          <svg className="w-6 h-6 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>

        <button 
          onClick={() => handleSelectOption(true)}
          className={`w-full bg-white border ${state.isGroup && state.branchId ? 'border-gold ring-1 ring-gold' : 'border-stone-200'} rounded-2xl p-6 text-left flex items-center justify-between hover:border-gold transition-colors`}
        >
          <div>
            <h3 className="font-bold text-lg">Book group appointment</h3>
            <p className="text-stone-500 text-sm">For yourself and others</p>
          </div>
          <svg className="w-6 h-6 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
