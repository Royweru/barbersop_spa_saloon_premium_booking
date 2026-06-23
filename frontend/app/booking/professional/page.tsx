"use client";

import React from 'react';
import { useBooking } from '@/context/BookingContext';
import { Professional } from '@/types/booking';
import { useRouter } from 'next/navigation';

const mockProfessionals: Professional[] = [
  { id: '1', name: 'Delic', role: 'Barber', avatarUrl: '/images/hero_bg_2.jfif' },
  { id: '2', name: 'James', role: 'Barber', avatarUrl: '/images/hero_bg_2.jfif' },
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
    <div className="max-w-3xl mx-auto">
      <h1 className="font-outfit text-3xl font-bold mb-8">Select professional</h1>

      <div className="space-y-4">
        {/* No Preference Option */}
        <button
          onClick={() => handleSelectProfessional('any')}
          className={`w-full bg-white rounded-2xl p-4 md:p-6 text-left flex items-center justify-between transition-all ${
            state.professionalId === 'any' ? 'border-2 border-gold ring-2 ring-gold/20' : 'border border-stone-200 hover:border-gold'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center text-charcoal">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-lg text-charcoal">No preference</h3>
              <p className="text-stone-500 text-sm">Maximum availability</p>
            </div>
          </div>
          
          {/* Select Indicator */}
          <div className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
            state.professionalId === 'any' ? 'bg-gold text-white border-gold' : 'border-stone-200 text-charcoal'
          }`}>
            {state.professionalId === 'any' ? 'Selected' : 'Select'}
          </div>
        </button>

        {/* Individual Professionals */}
        {mockProfessionals.map(prof => {
          const isSelected = state.professionalId === prof.id;

          return (
            <button
              key={prof.id}
              onClick={() => handleSelectProfessional(prof.id)}
              className={`w-full bg-white rounded-2xl p-4 md:p-6 text-left flex items-center justify-between transition-all ${
                isSelected ? 'border-2 border-gold ring-2 ring-gold/20' : 'border border-stone-200 hover:border-gold'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-stone-100 overflow-hidden">
                  <img src={prof.avatarUrl} alt={prof.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-charcoal">{prof.name}</h3>
                  <p className="text-stone-500 text-sm mb-1">{prof.role}</p>
                  <span className="text-sm font-medium text-charcoal hover:underline">View profile</span>
                </div>
              </div>

              {/* Select Indicator */}
              <div className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                isSelected ? 'bg-gold text-white border-gold' : 'border-stone-200 text-charcoal'
              }`}>
                {isSelected ? 'Selected' : 'Select'}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
