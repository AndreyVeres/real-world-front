import { createFeatureSelector, createSelector } from '@ngrx/store';
import { articlesAdapter, ArticleState } from '../reducers/article.reducer';

const { selectAll, selectEntities } = articlesAdapter.getSelectors();

export const selectArticlesState = createFeatureSelector<ArticleState>('articles');

export const selectArticles = createSelector(selectArticlesState, selectAll);

export const selectIsLoaded = createSelector(
  selectArticlesState,
  (state) => state.isLoaded
);


// export const selectNoteEntities = createSelector(
//   selectNoteState,
//   selectEntities
// );

// export const selectFailure = createSelector(
//   selectNoteState,
//   (state) => state.failure
// );

// export const selectIsLoading = createSelector(
//   selectNoteState,
//   (state) => state.isLoading
// );

