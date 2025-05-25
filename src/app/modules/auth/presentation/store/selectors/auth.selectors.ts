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

// export const selectCurrentArticle = createSelector(
//   selectArticlesFeatureState,
//   (state) => state.currentArticle
// );
// export const selectArticlesLoading = createSelector(
//   selectArticlesFeatureState,
//   (state) => state.loadingList || state.loadingSingle
// );
// export const selectArticlesError = createSelector(
//   selectArticlesFeatureState,
//   (state) => state.error
// );
