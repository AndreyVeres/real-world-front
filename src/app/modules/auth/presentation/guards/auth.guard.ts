import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthFacade } from '../../application/auth.facade';
import { map, tap } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const $isLogged = inject(AuthFacade).$isLoggedIn;
  const router = inject(Router);

  return $isLogged.pipe(
    // first(), // Раскомментируйте, если вам нужно только текущее состояние и не ждать изменений.
    // Обычно для гарда это то, что нужно, чтобы он не "висел" вечно, если значение не меняется.
    // Однако, если ваше приложение может менять состояние аутентификации асинхронно
    // и гард должен среагировать на это изменение, то first() может быть не нужен,
    // но тогда гард должен отписываться или завершаться.
    // В большинстве случаев, для CanActivate, первое значение - это то, что нужно.
    map((isLoggedIn) => {
      if (isLoggedIn) {
        return true; // Пользователь авторизован, разрешаем доступ
      } else {
        // Пользователь не авторизован, перенаправляем на /login
        // и возвращаем UrlTree для отмены текущей навигации
        // return router.createUrlTree(['/login']);
        return true
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
