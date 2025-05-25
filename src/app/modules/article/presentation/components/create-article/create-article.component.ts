import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ArticleFacade } from '@app/modules/article/application/article.facade';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateArticleComponent {
  private readonly articlesFacade = inject(ArticleFacade);

  form = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    body: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  handleSubmit() {
    // this.articlesFacade.create()
  }
}
