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
    <div className="max-w-3xl mx-auto">
      <h1 className="font-outfit text-3xl font-bold mb-8">Select services</h1>

      {/* Category Tabs */}
      <div className="flex overflow-x-auto gap-3 pb-4 mb-6 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-5 py-2 rounded-full border text-sm font-medium transition-colors ${
              activeCategory === cat 
                ? 'bg-charcoal text-white border-charcoal' 
                : 'bg-white border-stone-200 text-stone-600 hover:border-charcoal'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Services List */}
      <div>
        <h2 className="font-bold text-xl mb-4">{activeCategory}</h2>
        <div className="space-y-4">
          {filteredServices.map(service => {
            const isSelected = state.services.some(s => s.id === service.id);
            
            return (
              <button
                key={service.id}
                onClick={() => handleToggleService(service)}
                className={`w-full bg-white rounded-2xl p-6 text-left flex items-center justify-between transition-all ${
                  isSelected ? 'border-2 border-gold ring-2 ring-gold/20' : 'border border-stone-200 hover:border-gold'
                }`}
              >
                <div>
                  <h3 className="font-medium text-lg text-charcoal">{service.name}</h3>
                  <p className="text-stone-500 text-sm mt-1">
                    {service.durationMinutes >= 60 
                      ? `${Math.floor(service.durationMinutes / 60)} hr ${service.durationMinutes % 60 > 0 ? `${service.durationMinutes % 60} min` : ''}` 
                      : `${service.durationMinutes} min`}
                  </p>
                  <p className="font-bold text-charcoal mt-4">KES {service.price.toLocaleString()}</p>
                </div>

                {/* Add / Check Icon */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  isSelected ? 'bg-gold text-white' : 'border border-stone-200 text-charcoal'
                }`}>
                  {isSelected ? (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </button>
            );
          })}
          
          {filteredServices.length === 0 && (
            <p className="text-stone-500 py-8">No services found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}
