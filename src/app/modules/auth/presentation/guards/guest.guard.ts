import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthFacade } from '../../application/auth.facade';
import { map, tap } from 'rxjs';

export const GuestGuard: CanActivateFn = () => {
  const $isLogged = inject(AuthFacade).$isLoggedIn;
  const router = inject(Router);

  return true
  // return $isLogged.pipe(
  //   map((authState) => {
  //     if (authState) {
  //       console.log('true')
  //       return true;
  //     } else {

  //       console.log('false')
  //       return false;
  //     }
  //   })
  // );

  return $isLogged.pipe(
    map((isLoggedIn) => {
      if (isLoggedIn) {
        return router.createUrlTree(['/']);
      } else {
        return true;
      }
    }),
    tap((isLoggedInOrUrlTree) => {
      // Для отладки
      if (typeof isLoggedInOrUrlTree === 'boolean') {
        console.log('AuthGuard: User is logged in:', isLoggedInOrUrlTree);
      } else {
        console.log('AuthGuard: Redirecting to login');
      }
    })
  );
};
