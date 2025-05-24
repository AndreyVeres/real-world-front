import { createReducer, on } from '@ngrx/store';
import { Article } from '../../entity/article.entity';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import {
  loadAllArticles,
  loadAllArticlesFail,
  loadAllArticlesSuccess,
} from '../actions/article.actions';
import { ArticleDto, IArticleDto } from '../../dto/article.dto';

export interface ArticleState extends EntityState<IArticleDto> {
  isLoading: boolean;
  isLoaded: boolean;
}

export const articlesAdapter: EntityAdapter<IArticleDto> =
  createEntityAdapter<IArticleDto>();

export const initialState: ArticleState = articlesAdapter.getInitialState({
  failure: null,
  isLoading: false,
  isLoaded: false,
});

export const articlesReducer = createReducer(
  initialState,
  on(loadAllArticlesSuccess, (state) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    // articles: state.articles,
  })),
  on(loadAllArticles, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(loadAllArticlesFail, (state) => ({
    ...state,
    isLoading: false,
  }))
);
