import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { ArticleFacade } from '@app/modules/article/application/article.facade';
import { PopularTagsComponent } from '../../components/popular-tags/popular-tags.component';

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
