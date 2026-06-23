"use client";

import React from 'react';
import { useBooking } from '@/context/BookingContext';

const mockDates = [
  { day: 'Mon', date: '22', month: 'Jun', fullDate: '2026-06-22' },
  { day: 'Tue', date: '23', month: 'Jun', fullDate: '2026-06-23' },
  { day: 'Wed', date: '24', month: 'Jun', fullDate: '2026-06-24' },
  { day: 'Thu', date: '25', month: 'Jun', fullDate: '2026-06-25' },
  { day: 'Fri', date: '26', month: 'Jun', fullDate: '2026-06-26' },
  { day: 'Sat', date: '27', month: 'Jun', fullDate: '2026-06-27' },
  { day: 'Sun', date: '28', month: 'Jun', fullDate: '2026-06-28' },
];

const mockMorningTimes = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'];
const mockAfternoonTimes = ['12:00', '13:00', '14:30', '15:00', '16:00', '17:30'];

export default function BookingTimePage() {
  const { state, dispatch } = useBooking();

  const handleSelectDate = (date: string) => {
    dispatch({ type: 'SET_DATE', payload: date });
    dispatch({ type: 'SET_TIME', payload: null }); // Reset time when date changes
  };

  const handleSelectTime = (time: string) => {
    dispatch({ type: 'SET_TIME', payload: time });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="font-outfit text-3xl font-bold mb-8">Select date and time</h1>

      {/* Date Carousel */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg">Select a date</h2>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-50">
              <svg className="w-4 h-4 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-50">
              <svg className="w-4 h-4 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide">
          {mockDates.map(dateObj => {
            const isSelected = state.date === dateObj.fullDate;
            return (
              <button
                key={dateObj.fullDate}
                onClick={() => handleSelectDate(dateObj.fullDate)}
                className={`flex-shrink-0 w-20 py-4 rounded-2xl border transition-all flex flex-col items-center justify-center ${
                  isSelected 
                    ? 'bg-charcoal text-gold border-charcoal' 
                    : 'bg-white border-stone-200 hover:border-gold text-charcoal'
                }`}
              >
                <span className={`text-sm mb-1 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>{dateObj.day}</span>
                <span className="text-2xl font-bold">{dateObj.date}</span>
                <span className={`text-xs mt-1 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>{dateObj.month}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Slots (Only show if date is selected) */}
      {state.date ? (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Morning Slots */}
          <div>
            <h3 className="font-medium text-stone-500 mb-4">Morning</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {mockMorningTimes.map(time => {
                const isSelected = state.time === time;
                return (
                  <button
                    key={time}
                    onClick={() => handleSelectTime(time)}
                    className={`py-3 rounded-xl border font-medium transition-all ${
                      isSelected
                        ? 'bg-gold text-white border-gold ring-2 ring-gold/20'
                        : 'bg-white border-stone-200 text-charcoal hover:border-gold'
                    }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Afternoon Slots */}
          <div>
            <h3 className="font-medium text-stone-500 mb-4">Afternoon</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {mockAfternoonTimes.map(time => {
                const isSelected = state.time === time;
                return (
                  <button
                    key={time}
                    onClick={() => handleSelectTime(time)}
                    className={`py-3 rounded-xl border font-medium transition-all ${
                      isSelected
                        ? 'bg-gold text-white border-gold ring-2 ring-gold/20'
                        : 'bg-white border-stone-200 text-charcoal hover:border-gold'
                    }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 border-2 border-dashed border-stone-200 rounded-2xl">
          <svg className="w-12 h-12 text-stone-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-stone-500">Please select a date to view available times.</p>
        </div>
      )}
    </div>
  );
}
