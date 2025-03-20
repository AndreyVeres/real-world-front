import { Component, inject, OnChanges, SimpleChanges } from '@angular/core';
import { TagsService } from '../tags.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  standalone: true,
  imports: [AsyncPipe],
})
export class PopularTagsComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }
  private readonly tagsService = inject(TagsService);
  $popularTags = this.tagsService.getAllTags();
}
