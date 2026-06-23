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
    <div className="max-w-3xl mx-auto">
      <h1 className="font-outfit text-3xl font-bold mb-8">Confirm and Pay</h1>

      <form onSubmit={handlePayment} className="space-y-8">
        
        {/* Contact Information */}
        <section className="bg-white p-6 rounded-2xl border border-stone-200">
          <h2 className="font-bold text-xl mb-6">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-stone-600 mb-2">First Name</label>
              <input 
                type="text" 
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-600 mb-2">Last Name</label>
              <input 
                type="text" 
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                placeholder="Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-600 mb-2">Email Address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-600 mb-2">Phone Number</label>
              <input 
                type="tel" 
                required
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                placeholder="07XX XXX XXX"
              />
            </div>
          </div>
        </section>

        {/* Payment Information */}
        <section className="bg-white p-6 rounded-2xl border border-stone-200">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-bold text-xl">Payment</h2>
            <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm font-bold">M-PESA</span>
          </div>
          
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={useDifferentMpesa}
                onChange={(e) => setUseDifferentMpesa(e.target.checked)}
                className="w-5 h-5 rounded border-stone-300 text-gold focus:ring-gold"
              />
              <span className="text-stone-600 font-medium">Use a different number for M-Pesa</span>
            </label>

            {useDifferentMpesa && (
              <div className="animate-in slide-in-from-top-2 duration-300">
                <label className="block text-sm font-medium text-stone-600 mb-2">M-Pesa Phone Number</label>
                <input 
                  type="tel" 
                  required={useDifferentMpesa}
                  value={mpesaPhone}
                  onChange={(e) => setMpesaPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                  placeholder="07XX XXX XXX"
                />
              </div>
            )}
            
            <p className="text-sm text-stone-500 mt-4 bg-stone-50 p-4 rounded-xl border border-stone-100">
              A prompt will be sent to <strong>{useDifferentMpesa ? mpesaPhone || 'your phone' : contactPhone || 'your phone'}</strong> to complete the payment of <strong>KES {totalPrice.toLocaleString()}</strong>.
            </p>
          </div>
        </section>

        {/* Mobile Submit Button (Desktop is in sidebar, but we need an actual submit here or wire the sidebar to submit the form) */}
        {/* For simplicity in this separated layout, we can put a "Pay Now" button here that mirrors the sidebar's intent, or wire them together via Context. */}
        <button 
          type="submit"
          className="w-full md:hidden bg-gold text-white py-4 rounded-xl font-medium hover:bg-yellow-600 transition-colors"
        >
          Pay KES {totalPrice.toLocaleString()}
        </button>
      </form>
    </div>
  );
}
