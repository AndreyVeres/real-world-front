import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateArticleDto } from '@app/modules/article/application/dto/article.dto';
import { CreateArticleUseCase } from '@app/modules/article/application/use-cases/create-aritcle.use-case';
import { BehaviorSubject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
interface CreateArticleFormControls {
  title: FormControl<string>;
  description: FormControl<string>;
  body: FormControl<string>;
  tag: FormControl<string>;
}
@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateArticleComponent {
  public readonly tags$ = new BehaviorSubject<ReadonlySet<string>>(new Set<string>());
  private readonly createUseCase = inject(CreateArticleUseCase);
  private readonly destroyRef$ = inject(DestroyRef);

  public readonly form = new FormGroup<CreateArticleFormControls>({
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
    tag: new FormControl('', {
      nonNullable: true,
    }),
  });

  @ViewChild('tagInputElementRef')
  public readonly tagInputElement!: ElementRef<HTMLInputElement>;

  @HostListener('keyup', ['$event'])
  public onTagInputKeyup(event: KeyboardEvent): void {
    if (this.tagInputElement && event.target === this.tagInputElement.nativeElement) {
      if (event.code === 'Space' || event.code === 'Enter' || event.key === ',') {
        event.preventDefault();
        this.addCurrentTagFromInput();
      }
    }
  }

  public removeTag(tagToRemove: string): void {
    const currentTagsSet = this.tags$.value;
    if (currentTagsSet.has(tagToRemove)) {
      const newTagsSet = new Set(currentTagsSet);
      newTagsSet.delete(tagToRemove);
      this.tags$.next(newTagsSet);
    }
  }

  public handleSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.addCurrentTagFromInput();

    const formValues = this.form.getRawValue();

    const payload: CreateArticleDto = {
      title: formValues.title,
      description: formValues.description,
      body: formValues.body,
      tagList: Array.from(this.tags$.value),
    };

    this.createUseCase.execute(payload).pipe(takeUntilDestroyed(this.destroyRef$)).subscribe();
  }

  public fieldHasError(formKey: keyof CreateArticleFormControls) {
    return this.form.controls[formKey].errors && this.form.controls[formKey].touched && this.form.controls[formKey].dirty;
  }

  private addCurrentTagFromInput(): void {
    const tagInputValue = this.form.controls.tag.value.trim();
    if (tagInputValue) {
      const currentTagsSet = this.tags$.value;
      if (!currentTagsSet.has(tagInputValue)) {
        const newTagsSet = new Set(currentTagsSet);
        newTagsSet.add(tagInputValue);
        this.tags$.next(newTagsSet);
      }
      this.form.controls.tag.setValue('');
    }
  }
}
