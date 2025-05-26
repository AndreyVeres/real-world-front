import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ArticleRepository } from '@app/modules/article/domain/repository/article.repository';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  standalone: true,
  imports: [AsyncPipe],
})
export class PopularTagsComponent {
  private readonly tagsService = inject(ArticleRepository);
  $popularTags = this.tagsService.getPopularTags();
}
