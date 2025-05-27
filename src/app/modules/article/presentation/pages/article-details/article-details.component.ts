import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ArticleEntity } from '@app/modules/article/domain/model/article.entity';

@Component({
  selector: 'app-article-details',
  imports: [],
  templateUrl: './article-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleDetailsComponent {
  @Input({ required: true })
  public readonly article!: ArticleEntity;
}
