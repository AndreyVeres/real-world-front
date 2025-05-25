import { createFeatureSelector, createSelector } from '@ngrx/store';
import { articleFeatureKey, ArticlesState } from '../reducers/article.reducer';

export const selectArticlesFeatureState =
  createFeatureSelector<ArticlesState>(articleFeatureKey);

export const selectAllArticles = createSelector(
  selectArticlesFeatureState,
  (state) => state.articles
);

export const selectArticlesLoading = createSelector(
  selectArticlesFeatureState,
  (state) => state.isLoading
);
