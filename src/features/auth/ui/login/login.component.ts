import { Component, DestroyRef, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { switchMap } from 'rxjs';
import { APP_ROUTES } from '@shared/const/app.routes';
import { AuthService } from '../../model/auth.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  standalone: true,
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);

  form = new FormGroup({
    username: new FormControl('admin', {
      nonNullable: true,
      validators: Validators.required,
    }),
    password: new FormControl('123', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  handleLogin() {
    this.authService
      .login({
        user: this.form.getRawValue(),
      })
      .pipe(
        switchMap(() => this.authService.me()),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.router.navigate([APP_ROUTES.HOME]);
      });
  }
}
