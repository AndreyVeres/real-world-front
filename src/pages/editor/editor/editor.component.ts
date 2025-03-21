import { Component, OnInit } from '@angular/core';
import { CreateArticleComponent } from '@features/create-article/ui/create-article/create-article.component';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  standalone: true,
  imports: [CreateArticleComponent],
})
export class EditorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
