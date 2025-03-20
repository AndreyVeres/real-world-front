import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PopularTagsComponent } from '../features/tags/popular-tags/popular-tags.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule , PopularTagsComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
