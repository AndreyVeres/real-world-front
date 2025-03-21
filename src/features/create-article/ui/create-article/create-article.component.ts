import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ArticleService } from '@features/create-article/model/article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class CreateArticleComponent {
  private readonly articleService = inject(ArticleService);
  $destroyRef = inject(DestroyRef);

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

    this.articleService
      .createArticle(payload)
      .pipe(takeUntilDestroyed(this.$destroyRef))
      .subscribe();
  }
}
