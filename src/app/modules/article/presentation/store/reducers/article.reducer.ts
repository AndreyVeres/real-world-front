import { ArticleDto } from '@app/modules/article/application/dto/article.dto';
import { createReducer, on } from '@ngrx/store';
import {
  ArticlePageActions,
  ArticleApiActions,
} from '../actions/article.actions';
import { ArticleEntity } from '@app/modules/article/domain/model/article.entity';

export const articleFeatureKey = 'articles';

export interface ArticlesState {
  articles: ArticleEntity[];
  isLoading: boolean;
}

export const initialState: ArticlesState = {
  articles: [],
  isLoading: false,
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
