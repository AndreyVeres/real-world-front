import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css'],
  imports: [RouterLink],
  standalone: true,
})
export class ArticlePreviewComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
