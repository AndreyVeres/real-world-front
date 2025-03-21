import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ArticlePreviewComponent } from '@entities/article';
import { PopularTagsComponent } from '@features/tags';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    PopularTagsComponent,
    ArticlePreviewComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
