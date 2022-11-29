import { City, Comments, Offer } from '.';
import { store } from '../store';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type InitialStateType = {
  cities: City[];
  offers: Offer[];
  comments: Comments;
  selectedCity: City | null;
  selectedOffer: Offer | null;
  sortingState: string;
  isLoading: boolean;
}
