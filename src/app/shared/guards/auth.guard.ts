import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../features/auth/services/auth.service';

export const authGuard: CanActivateFn = () => {
  const isLogged = inject(AuthService).$isLogged;
  const router = inject(Router);

  if (!isLogged.value) {
    router.navigate(['/login']);
    return false;
  }

  return isLogged.value;
};
