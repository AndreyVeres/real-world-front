import { Component, DestroyRef, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthFacade } from '@app/modules/auth/application/auth.facade';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  standalone: true,
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  authService: any;

  constructor(private readonly authFacade: AuthFacade) {}

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
    this.authFacade.login({
      user: this.form.getRawValue(),
    });
  }
}
