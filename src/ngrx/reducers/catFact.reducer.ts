import { createReducer, on } from '@ngrx/store';
import { catFactAction } from '../actions/catFact.action';
import { CatFactState } from '../states/catFact.state';
export const initialState: CatFactState = {
  catFact: [],
  isLoading: false,
  error: '',
};

export const catFactReducer = createReducer(
  initialState,
  on(catFactAction.loadCatFact, (state) => ({ ...state, isLoading: true })),
  on(catFactAction.loadCatFactSuccess, (state, { catFact }) => ({
    ...state,
    catFact,
    isLoading: false,
  })),
  on(catFactAction.loadCatFactFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);
