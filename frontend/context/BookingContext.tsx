"use client";

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { BookingState, BookingAction, ServiceItem } from '@/types/booking';

const initialState: BookingState = {
  branchId: null,
  isGroup: false,
  services: [],
  professionalId: null,
  date: null,
  time: null,
};

function bookingReducer(state: BookingState, action: BookingAction): BookingState {
  switch (action.type) {
    case 'SET_BRANCH':
      return { ...state, branchId: action.payload };
    case 'SET_IS_GROUP':
      return { ...state, isGroup: action.payload };
    case 'ADD_SERVICE':
      // Prevent duplicate services
      if (state.services.some(s => s.id === action.payload.id)) return state;
      return { ...state, services: [...state.services, action.payload] };
    case 'REMOVE_SERVICE':
      return { ...state, services: state.services.filter(s => s.id !== action.payload) };
    case 'SET_PROFESSIONAL':
      return { ...state, professionalId: action.payload };
    case 'SET_DATE':
      return { ...state, date: action.payload };
    case 'SET_TIME':
      return { ...state, time: action.payload };
    case 'RESET_BOOKING':
      return initialState;
    default:
      return state;
  }
}

interface BookingContextType {
  state: BookingState;
  dispatch: React.Dispatch<BookingAction>;
  totalPrice: number;
  totalDuration: number;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  const totalPrice = state.services.reduce((sum, service) => sum + service.price, 0);
  const totalDuration = state.services.reduce((sum, service) => sum + service.durationMinutes, 0);

  return (
    <BookingContext.Provider value={{ state, dispatch, totalPrice, totalDuration }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
