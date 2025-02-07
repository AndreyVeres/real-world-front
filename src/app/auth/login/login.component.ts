import { Component, DestroyRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { AuthService, LoginPayload } from '../services/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  standalone: true,
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  // private readonly userService = inject(UserService);
  private readonly destroyRef = inject(DestroyRef);

  form = new FormGroup({
    email: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
    password: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
  });

  handleLogin() {
    const loginPayload = this.form.getRawValue()

    this.authService
      .login(loginPayload)
      .pipe(
        tap((user) => {


                }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((res) => console.log(res));
  }
}
