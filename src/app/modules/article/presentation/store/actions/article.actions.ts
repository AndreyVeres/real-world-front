import { CreateArticleDto } from '@app/modules/article/application/dto/article.dto';
import { ArticleEntity } from '@app/modules/article/domain/model/article.entity';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const ArticlePageActions = createActionGroup({
  source: 'Article Page',
  events: {
    'Load All Articles': emptyProps(),
    'Load Single Article': props<{ slug: string }>(),

    'Create Article': props<{ articleDto: CreateArticleDto }>(),
  },
});

export const ArticleApiActions = createActionGroup({
  source: 'Article API',
  events: {
    'Load All Articles Success': props<{ articles: ArticleEntity[] }>(),
    'Load All Articles Failure': props<{ error: any }>(),
    'Create Article Success': props<{ article: ArticleEntity }>(),

    'Load Single Article Success': props<{ article: ArticleEntity }>(),
    'Load Single Article Failure': props<{ error: any }>(),
  },
});
