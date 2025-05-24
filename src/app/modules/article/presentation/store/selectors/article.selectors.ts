import { createFeatureSelector, createSelector } from '@ngrx/store';
import { articleFeatureKey, ArticlesState } from '../reducers/article.reducer';

export const selectArticlesFeatureState =
  createFeatureSelector<ArticlesState>(articleFeatureKey);

export const selectAllArticles = createSelector(
  selectArticlesFeatureState,
  (state) => state.articles
);
export const selectCurrentArticle = createSelector(
  selectArticlesFeatureState,
  (state) => state.currentArticle
);
export const selectArticlesLoading = createSelector(
  selectArticlesFeatureState,
  (state) => state.loadingList || state.loadingSingle
);
export const selectArticlesError = createSelector(
  selectArticlesFeatureState,
  (state) => state.error
);
