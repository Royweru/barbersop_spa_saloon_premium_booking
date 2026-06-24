"use client";

import React, { useState, useEffect } from 'react';
import { useBooking } from '@/context/BookingContext';
import { useRouter } from 'next/navigation';

export default function BookingCheckoutPage() {
  const { state, totalPrice } = useBooking();
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  
  const [useDifferentMpesa, setUseDifferentMpesa] = useState(false);
  const [mpesaPhone, setMpesaPhone] = useState('');

  // Auto-fill M-Pesa phone unless user checks the box
  useEffect(() => {
    if (!useDifferentMpesa) {
      setMpesaPhone(contactPhone);
    }
  }, [contactPhone, useDifferentMpesa]);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would trigger M-Pesa STK Push
    alert(`Initiating M-Pesa payment for KES ${totalPrice} to ${useDifferentMpesa ? mpesaPhone : contactPhone}`);
    // Then navigate to a success page
  };

  return (
    <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="font-headline-xl-mobile md:font-headline-xl text-charcoal-text mb-8">Confirm and Pay</h1>

      <form id="checkout-form" onSubmit={handlePayment} className="space-y-8">
        
        {/* Contact Information */}
        <section className="bg-white p-6 rounded-lg border border-outline-variant/20 shadow-sm">
          <h2 className="font-headline-sm text-charcoal-text mb-6">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-charcoal-text mb-2">First Name</label>
              <input 
                type="text" 
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-outline-variant/30 focus:border-charcoal-text focus:ring-1 focus:ring-charcoal-text outline-none transition-colors bg-stone-50/50 focus:bg-white text-charcoal-text"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal-text mb-2">Last Name</label>
              <input 
                type="text" 
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-outline-variant/30 focus:border-charcoal-text focus:ring-1 focus:ring-charcoal-text outline-none transition-colors bg-stone-50/50 focus:bg-white text-charcoal-text"
                placeholder="Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal-text mb-2">Email Address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-outline-variant/30 focus:border-charcoal-text focus:ring-1 focus:ring-charcoal-text outline-none transition-colors bg-stone-50/50 focus:bg-white text-charcoal-text"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal-text mb-2">Phone Number</label>
              <input 
                type="tel" 
                required
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-outline-variant/30 focus:border-charcoal-text focus:ring-1 focus:ring-charcoal-text outline-none transition-colors bg-stone-50/50 focus:bg-white text-charcoal-text"
                placeholder="07XX XXX XXX"
              />
            </div>
          </div>
        </section>

        {/* Payment Information */}
        <section className="bg-white p-6 rounded-lg border border-outline-variant/20 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-headline-sm text-charcoal-text">Payment</h2>
            <span className="px-3 py-1 bg-success-green/10 text-success-green rounded-full text-xs font-bold uppercase tracking-wider">M-PESA</span>
          </div>
          
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="checkbox" 
                checked={useDifferentMpesa}
                onChange={(e) => setUseDifferentMpesa(e.target.checked)}
                className="w-5 h-5 rounded border-outline-variant/40 text-charcoal-text focus:ring-charcoal-text transition-colors"
              />
              <span className="text-on-surface-variant font-medium group-hover:text-charcoal-text transition-colors">Use a different number for M-Pesa</span>
            </label>

            {useDifferentMpesa && (
              <div className="animate-in slide-in-from-top-2 duration-300 pt-2">
                <label className="block text-sm font-medium text-charcoal-text mb-2">M-Pesa Phone Number</label>
                <input 
                  type="tel" 
                  required={useDifferentMpesa}
                  value={mpesaPhone}
                  onChange={(e) => setMpesaPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-outline-variant/30 focus:border-charcoal-text focus:ring-1 focus:ring-charcoal-text outline-none transition-colors bg-stone-50/50 focus:bg-white text-charcoal-text"
                  placeholder="07XX XXX XXX"
                />
              </div>
            )}
            
            <p className="text-sm text-on-surface-variant mt-6 bg-stone-50 p-4 rounded-md border border-outline-variant/10">
              A prompt will be sent to <strong className="text-charcoal-text">{useDifferentMpesa ? mpesaPhone || 'your phone' : contactPhone || 'your phone'}</strong> to complete the payment of <strong className="text-charcoal-text">KES {totalPrice.toLocaleString()}</strong>.
            </p>
          </div>
        </section>

        {/* Mobile Submit Button (Desktop is in sidebar, but we need an actual submit here or wire the sidebar to submit the form) */}
        {/* For simplicity, we just trigger the form. The Sidebar's Confirm Booking button needs to trigger this form's submit. */}
        <button 
          type="submit"
          className="w-full md:hidden bg-success-green text-white py-4 rounded-md font-button-text hover:opacity-90 transition-opacity flex items-center justify-center shadow-lg"
        >
          Pay KES {totalPrice.toLocaleString()}
        </button>
      </form>
    </div>
  );
}
