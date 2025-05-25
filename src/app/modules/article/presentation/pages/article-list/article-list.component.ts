import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PopularTagsComponent } from '@features/tags';
import { AsyncPipe } from '@angular/common';
import { ArticleFacade } from '@app/modules/article/application/article.facade';

@Component({
  selector: 'app-article-list',
  imports: [PopularTagsComponent, RouterLink, AsyncPipe],
  templateUrl: './article-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleListComponent {

  private readonly articleFacade = inject(ArticleFacade);
  public readonly $articles = this.articleFacade.articles$;
}
