import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PopularTagsComponent } from '@features/tags';
import { NgrxArticleFacadeService } from '../../services/ngrx-article-facede.service';
import { JsonPipe } from '@angular/common';
import { tap } from 'rxjs';

@Component({
  selector: 'app-article-list',
  imports: [PopularTagsComponent, RouterLink, JsonPipe],
  templateUrl: './article-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleListComponent {
  private articleFacade = inject(NgrxArticleFacadeService);

  public $articles = this.articleFacade.articles$;

  constructor() {}

  ngOnInit(){



    this.$articles.pipe(tap((ar) => console.log(ar)))
  }
}
