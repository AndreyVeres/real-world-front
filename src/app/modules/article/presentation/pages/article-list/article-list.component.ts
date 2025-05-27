import { ArticleEntity } from '@app/modules/article/domain/model/article.entity';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { PopularTagsComponent } from '../../components/popular-tags/popular-tags.component';

@Component({
  selector: 'app-article-list',
  imports: [PopularTagsComponent, RouterLink, DatePipe],
  templateUrl: './article-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleListComponent {
  @Input({ required: true })
  public articles!: ArticleEntity[];
}
