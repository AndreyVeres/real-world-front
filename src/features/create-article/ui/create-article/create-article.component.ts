import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ArticleService } from '@features/create-article/model/article.service';
import { CreateArticlePayload } from '@features/create-article/model/create-article.types';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class CreateArticleComponent {
  private readonly articleService = inject(ArticleService);

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
    // tagList: new FormArray([]),
  });

  getAll() {
    return this.articleService.getAll().subscribe();
  }

  handleSubmit() {
    const payload = this.form.getRawValue();

    this.articleService.createArticle(payload).subscribe();

    console.log(payload);
  }
}
