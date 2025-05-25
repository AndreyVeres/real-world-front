import { ArticleEntity } from '@app/modules/article/domain/model/article.entity';
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
    'Load All Articles Success': props<{ articles: ArticleEntity[] }>(),
    'Load All Articles Failure': props<{ error: any }>(),
  },
});
