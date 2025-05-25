import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureKey, AuthState } from '../reducers/auth.reducer';

export const selectAuthFeatureState =
  createFeatureSelector<AuthState>(authFeatureKey);

export const selectUser = createSelector(
  selectAuthFeatureState,
  (state) => state.user
);

export const selectIsLoggedIn = createSelector(
  selectAuthFeatureState,
  (state) => state.isLoggedIn
);
