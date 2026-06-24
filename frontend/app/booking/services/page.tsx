"use client";

import React, { useState } from 'react';
import { useBooking } from '@/context/BookingContext';
import { ServiceItem } from '@/types/booking';

// Mock Data
const categories = ['Featured', 'Hair services', 'Spa Services', 'Nails', 'Massage', 'Barbershop'];

const mockServices: ServiceItem[] = [
  { id: '1', name: 'Normal Trim [Ladies]', durationMinutes: 45, price: 1000, category: 'Hair services' },
  { id: '2', name: 'Hair trim', durationMinutes: 60, price: 600, category: 'Hair services' },
  { id: '3', name: 'Hair treatments', durationMinutes: 60, price: 2500, category: 'Hair services' },
  { id: '4', name: 'Classic Men\'s Haircut', durationMinutes: 45, price: 800, category: 'Barbershop' },
  { id: '5', name: 'Beard Trim & Line Up', durationMinutes: 30, price: 500, category: 'Barbershop' },
  { id: '6', name: 'Deep Tissue Massage', durationMinutes: 90, price: 4000, category: 'Massage' },
];

export default function BookingServicesPage() {
  const { state, dispatch } = useBooking();
  const [activeCategory, setActiveCategory] = useState('Hair services');

  const handleToggleService = (service: ServiceItem) => {
    const isSelected = state.services.some(s => s.id === service.id);
    if (isSelected) {
      dispatch({ type: 'REMOVE_SERVICE', payload: service.id });
    } else {
      dispatch({ type: 'ADD_SERVICE', payload: service });
    }
  };

  const filteredServices = mockServices.filter(s => s.category === activeCategory);

  return (
    <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="font-headline-xl-mobile md:font-headline-xl text-charcoal-text mb-8">Select services</h1>

      {/* Category Tabs */}
      <div className="flex overflow-x-auto gap-3 pb-4 mb-6 scrollbar-hide -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-5 py-2 rounded-full border text-sm font-medium transition-colors ${
              activeCategory === cat 
                ? 'bg-charcoal-text text-white border-charcoal-text' 
                : 'bg-white border-outline-variant/20 text-on-surface-variant hover:border-charcoal-text'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Services List */}
      <div>
        <h2 className="font-headline-md text-charcoal-text mb-4">{activeCategory}</h2>
        <div className="space-y-3">
          {filteredServices.map(service => {
            const isSelected = state.services.some(s => s.id === service.id);
            
            return (
              <button
                key={service.id}
                onClick={() => handleToggleService(service)}
                className={`w-full bg-white rounded-lg p-5 text-left flex items-start justify-between transition-all card-hover-lift ${
                  isSelected ? 'border border-primary ring-1 ring-primary bg-primary/5 shadow-sm' : 'border border-outline-variant/20 hover:border-primary'
                }`}
              >
                <div className="pr-4">
                  <h3 className="font-headline-sm text-charcoal-text">{service.name}</h3>
                  <p className="text-on-surface-variant text-sm mt-1 mb-3">
                    {service.durationMinutes >= 60 
                      ? `${Math.floor(service.durationMinutes / 60)} hr ${service.durationMinutes % 60 > 0 ? `${service.durationMinutes % 60} min` : ''}` 
                      : `${service.durationMinutes} min`}
                  </p>
                  <p className="font-medium text-charcoal-text">KES {service.price.toLocaleString()}</p>
                </div>

                {/* Add / Check Icon */}
                <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-colors ${
                  isSelected ? 'bg-primary text-charcoal-text' : 'border border-outline-variant/30 text-charcoal-text'
                }`}>
                  {isSelected ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  )}
                </div>
              </button>
            );
          })}
          
          {filteredServices.length === 0 && (
            <p className="text-on-surface-variant py-8 text-center bg-white border border-outline-variant/10 rounded-lg">No services found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}
