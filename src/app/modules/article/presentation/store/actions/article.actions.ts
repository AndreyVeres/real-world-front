import { ArticleDto } from '@app/modules/article/application/dto/article.dto';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const ArticlePageActions = createActionGroup({
  source: 'Article Page',
  events: {
    'Load All Articles': emptyProps(),
  },
});

export const ArticleApiActions = createActionGroup({
  source: 'Article API',
  events: {
    'Load All Articles Success': props<{ articles: ArticleDto[] }>(),
    'Load All Articles Failure': props<{ error: any }>(),
  },
});
