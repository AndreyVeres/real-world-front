import { ArticleDto } from '@app/modules/article/application/dto/article.dto';
import { createReducer, on } from '@ngrx/store';
import {
  ArticlePageActions,
  ArticleApiActions,
} from '../actions/article.actions';

export const articleFeatureKey = 'articles';

export interface ArticlesState {
  articles: ArticleDto[];
  currentArticle: ArticleDto | null;
  loadingList: boolean;
  loadingSingle: boolean;
  error: any | null;
}

export const initialState: ArticlesState = {
  articles: [],
  currentArticle: null,
  loadingList: false,
  loadingSingle: false,
  error: null,
};

export const articleReducer = createReducer(
  initialState,
  on(ArticlePageActions.loadAllArticles, (state) => ({
    ...state,
    loadingList: true,
    error: null,
  })),
  on(ArticleApiActions.loadAllArticlesSuccess, (state, { articles }) => ({
    ...state,
    articles,
    loadingList: false,
  })),
  on(ArticleApiActions.loadAllArticlesFailure, (state, { error }) => ({
    ...state,
    loadingList: false,
    error,
  }))
);
