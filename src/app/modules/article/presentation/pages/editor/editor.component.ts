import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CreateArticleComponent } from '@app/modules/article/presentation/components/create-article/create-article.component';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  standalone: true,
  imports: [CreateArticleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
