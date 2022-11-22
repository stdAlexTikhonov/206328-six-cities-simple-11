import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffer, getCities, loadOffers, setSortingState } from './action';
import { cities } from '../mocks';
import { InitialStateType } from '../types';


const initialState: InitialStateType = {
  cities: [],
  offers: [],
  selectedCity: cities[1],
  selectedOffer: null,
  sortingState: 'Popular',
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getCities, (state) => {
    state.cities = cities;
  }).addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
  }).addCase(setOffer, (state, action) => {
    state.selectedOffer = action.payload.offer;
  }).addCase(setCity, (state, action) => {
    state.selectedCity = action.payload.city;
  }).addCase(setSortingState, (state, action) => {
    state.sortingState = action.payload.state;
  });
});

export { reducer };
