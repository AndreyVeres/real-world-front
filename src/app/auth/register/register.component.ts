import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { tap } from 'rxjs';
import { UserService } from '../../core/services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  private readonly authService = inject(AuthService);
  private readonly userService = inject(UserService);
  private readonly destroyRef = inject(DestroyRef);

  form = new FormGroup({
    email: new FormControl('', { nonNullable: true, validators: Validators.required }),
    password: new FormControl('' , { nonNullable: true, validators: Validators.required }),
    username: new FormControl('' , { nonNullable: true, validators: Validators.required }),
  });

  handleRegister() {
    const registerPayload = this.form.getRawValue()

    this.authService
      .register(registerPayload)
      .pipe(
        // tap((user) => this.userService.setUser(user)),
        takeUntilDestroyed(this.destroyRef)
      )
    .subscribe((res) => console.log(res));
  }
}
