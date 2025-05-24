import { createAction, props } from '@ngrx/store';
import { IArticleDto } from '../../dto/article.dto';

export const loadAllArticles = createAction('[Articles] Load All Articles');

export const loadAllArticlesSuccess = createAction(
  '[Articles] Load All Articles Success',
  props<{ articles: IArticleDto[] }>()
);

export const loadAllArticlesFail = createAction(
  '[Articles] Load All Articles Fail',
  props<{ failure: string }>()
);
