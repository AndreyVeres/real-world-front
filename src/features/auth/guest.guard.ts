import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '.';

export const GuestGuard: CanActivateFn = () => {
  const isLogged = inject(AuthService).$isLogged;
  const router = inject(Router);

  if (isLogged.value) {
    router.navigate(['/']);
    return false;
  } else {
    return true;
  }
};
