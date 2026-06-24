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
    dispatch({ type: 'SET_TIME', payload: null }); 
  };

  const handleSelectTime = (time: string) => {
    dispatch({ type: 'SET_TIME', payload: time });
  };

  return (
    <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="font-headline-xl-mobile md:font-headline-xl text-charcoal-text mb-8">Select date and time</h1>

      {/* Date Carousel */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-headline-sm text-charcoal-text">Select a date</h2>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full border border-outline-variant/20 flex items-center justify-center hover:bg-stone-100 transition-colors">
              <svg className="w-4 h-4 text-charcoal-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-8 h-8 rounded-full border border-outline-variant/20 flex items-center justify-center hover:bg-stone-100 transition-colors">
              <svg className="w-4 h-4 text-charcoal-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0">
          {mockDates.map(dateObj => {
            const isSelected = state.date === dateObj.fullDate;
            return (
              <button
                key={dateObj.fullDate}
                onClick={() => handleSelectDate(dateObj.fullDate)}
                className={`flex-shrink-0 w-[72px] py-4 rounded-lg border transition-all flex flex-col items-center justify-center card-hover-lift ${
                  isSelected 
                    ? 'bg-charcoal-text text-white border-charcoal-text shadow-md' 
                    : 'bg-white border-outline-variant/20 hover:border-charcoal-text text-charcoal-text'
                }`}
              >
                <span className={`text-xs uppercase tracking-wider mb-1 ${isSelected ? 'text-stone-300' : 'text-on-surface-variant'}`}>{dateObj.day}</span>
                <span className="text-2xl font-light">{dateObj.date}</span>
                <span className={`text-xs mt-1 uppercase tracking-wider ${isSelected ? 'text-stone-300' : 'text-on-surface-variant'}`}>{dateObj.month}</span>
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
            <h3 className="font-eyebrow-label text-on-surface-variant mb-4 uppercase tracking-widest">Morning</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {mockMorningTimes.map(time => {
                const isSelected = state.time === time;
                return (
                  <button
                    key={time}
                    onClick={() => handleSelectTime(time)}
                    className={`py-3 rounded-md border font-medium text-sm transition-all card-hover-lift ${
                      isSelected
                        ? 'bg-primary text-charcoal-text border-primary shadow-sm'
                        : 'bg-white border-outline-variant/20 text-charcoal-text hover:border-primary'
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
            <h3 className="font-eyebrow-label text-on-surface-variant mb-4 uppercase tracking-widest">Afternoon</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {mockAfternoonTimes.map(time => {
                const isSelected = state.time === time;
                return (
                  <button
                    key={time}
                    onClick={() => handleSelectTime(time)}
                    className={`py-3 rounded-md border font-medium text-sm transition-all card-hover-lift ${
                      isSelected
                        ? 'bg-primary text-charcoal-text border-primary shadow-sm'
                        : 'bg-white border-outline-variant/20 text-charcoal-text hover:border-primary'
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
        <div className="text-center py-12 border border-dashed border-outline-variant/30 rounded-lg bg-stone-50/50">
          <svg className="w-8 h-8 text-on-surface-variant/50 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-on-surface-variant text-sm">Please select a date to view available times.</p>
        </div>
      )}
    </div>
  );
}
