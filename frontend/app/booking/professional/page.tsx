"use client";

import React from 'react';
import { useBooking } from '@/context/BookingContext';
import { Professional } from '@/types/booking';
import { useRouter } from 'next/navigation';

const mockProfessionals: Professional[] = [
  { id: '1', name: 'Delic', role: 'Barber', avatarUrl: '/images/hero_salon_spa.png' },
  { id: '2', name: 'James', role: 'Barber', avatarUrl: '/images/hero_salon_spa.png' },
];

export default function BookingProfessionalPage() {
  const { state, dispatch } = useBooking();
  const router = useRouter();

  const handleSelectProfessional = (profId: string | null) => {
    dispatch({ type: 'SET_PROFESSIONAL', payload: profId });
    // Auto advance to next step for better UX
    setTimeout(() => {
      router.push('/booking/time');
    }, 300);
  };

  return (
    <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="font-headline-xl-mobile md:font-headline-xl text-charcoal-text mb-8">Select professional</h1>

      <div className="space-y-4">
        {/* No Preference Option */}
        <button
          onClick={() => handleSelectProfessional('any')}
          className={`w-full bg-white rounded-lg p-5 text-left flex items-center justify-between transition-all card-hover-lift ${
            state.professionalId === 'any' ? 'border border-primary ring-1 ring-primary bg-primary/5 shadow-sm' : 'border border-outline-variant/20 hover:border-primary'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-charcoal-text shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <div>
              <h3 className="font-headline-sm text-charcoal-text">No preference</h3>
              <p className="text-on-surface-variant text-sm mt-1">Maximum availability</p>
            </div>
          </div>
          
          <div className={`w-6 h-6 shrink-0 rounded-full border-2 flex items-center justify-center transition-colors ${
            state.professionalId === 'any' ? 'border-primary bg-primary' : 'border-outline-variant/30 bg-transparent'
          }`}>
             {state.professionalId === 'any' && (
                <div className="w-2 h-2 rounded-full bg-charcoal-text"></div>
             )}
          </div>
        </button>

        {/* Individual Professionals */}
        {mockProfessionals.map(prof => {
          const isSelected = state.professionalId === prof.id;

          return (
            <button
              key={prof.id}
              onClick={() => handleSelectProfessional(prof.id)}
              className={`w-full bg-white rounded-lg p-5 text-left flex items-center justify-between transition-all card-hover-lift ${
                isSelected ? 'border border-primary ring-1 ring-primary bg-primary/5 shadow-sm' : 'border border-outline-variant/20 hover:border-primary'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-100 overflow-hidden shrink-0 border border-outline-variant/10">
                  <img src={prof.avatarUrl} alt={prof.name} className="w-full h-full object-cover grayscale opacity-80" />
                </div>
                <div>
                  <h3 className="font-headline-sm text-charcoal-text">{prof.name}</h3>
                  <p className="text-on-surface-variant text-sm mt-1">{prof.role}</p>
                </div>
              </div>

              <div className={`w-6 h-6 shrink-0 rounded-full border-2 flex items-center justify-center transition-colors ${
                isSelected ? 'border-primary bg-primary' : 'border-outline-variant/30 bg-transparent'
              }`}>
                 {isSelected && (
                    <div className="w-2 h-2 rounded-full bg-charcoal-text"></div>
                 )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
