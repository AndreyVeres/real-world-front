import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-article-details',
  imports: [],
  templateUrl: './article-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleDetailsComponent {}
