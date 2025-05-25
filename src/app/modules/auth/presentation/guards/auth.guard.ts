import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthFacade } from '../../application/auth.facade';
import { map, take, tap } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const $isLogged = inject(AuthFacade).$isLoggedIn;
  const router = inject(Router);

  return $isLogged.pipe(
    map((isLogged) => {
      if (isLogged) {
        return true;
      } else {
        router.navigate(['/login']);
        return false;
      }
    })
  );
};
