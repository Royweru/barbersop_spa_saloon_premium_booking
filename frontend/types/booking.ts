export interface ServiceItem {
  id: string;
  name: string;
  durationMinutes: number;
  price: number;
  category: string;
}

export interface Professional {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
}

export interface BookingState {
  branchId: string | null;
  isGroup: boolean;
  services: ServiceItem[];
  professionalId: string | null;
  date: string | null;
  time: string | null;
}

export type BookingAction =
  | { type: 'SET_BRANCH'; payload: string }
  | { type: 'SET_IS_GROUP'; payload: boolean }
  | { type: 'ADD_SERVICE'; payload: ServiceItem }
  | { type: 'REMOVE_SERVICE'; payload: string } // service id
  | { type: 'SET_PROFESSIONAL'; payload: string | null }
  | { type: 'SET_DATE'; payload: string | null }
  | { type: 'SET_TIME'; payload: string | null }
  | { type: 'RESET_BOOKING' };
