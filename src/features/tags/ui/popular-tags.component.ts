import { Component, inject } from '@angular/core';
import { TagsService } from '../model/tags.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  standalone: true,
  imports: [AsyncPipe],
})
export class PopularTagsComponent {
  private readonly tagsService = inject(TagsService);
  $popularTags = this.tagsService.getAllTags();
}
