import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthFacade } from '../../application/auth.facade';
import { firstValueFrom, map, take, tap } from 'rxjs';

export const GuestGuard: CanActivateFn = () => {
  const $isLogged = inject(AuthFacade).$isLoggedIn;
  const router = inject(Router);

  return $isLogged.pipe(
    map((isLogged) => {
      if (isLogged) {
        router.navigate(['/']);
        return false;
      } else return true;
    })
  );
};
