import { Component, DestroyRef, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { LoadingService } from '../../../core/services/loading.service';
import { APP_ROUTES } from '../../../shared/app.routes';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule, AsyncPipe],
  standalone: true,
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  $isLoading = inject(LoadingService).loading$;

  form = new FormGroup({
    email: new FormControl('qweqwe@mail.com', {
      nonNullable: true,
      validators: Validators.required,
    }),
    password: new FormControl('123123', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  handleLogin() {
    this.authService
      .login(this.form.getRawValue())
      .pipe(
        switchMap(() => this.authService.me()),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.router.navigate([APP_ROUTES.HOME]);
      });
  }
}
