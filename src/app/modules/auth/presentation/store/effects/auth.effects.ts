import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthApiActions, AuthPageActions } from '../actions/auth.actions';
import { SessionRepository } from '@app/modules/auth/domain/repository/session.repository';
import { LoginUseCase } from '@app/modules/auth/application/use-cases/login.use-case';
import { MeUseCase } from '@app/modules/auth/application/use-cases/me.use-case';
import { NotificationService } from '@app/modules/shared/services/notification.service';

@Injectable()
export class AuthEffects {
  private readonly actions$ = inject(Actions);
  private readonly loginUseCase = inject(LoginUseCase);
  private readonly meUseCase = inject(MeUseCase);
  private readonly sessionRepository = inject(SessionRepository);
  private readonly notificationService = inject(NotificationService);

  public me$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthApiActions.me),
      mergeMap(() => {
        return this.meUseCase.execute().pipe(
          map((user) => {
            return AuthPageActions.setUser({
              user,
            });
          }),
          catchError((error) => of(error)),
        );
      }),
    );
  });

  public login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthApiActions.login),
      mergeMap((data) => {
        return this.loginUseCase.execute(data).pipe(
          map((user) => {
            this.sessionRepository.saveToken(user.token);
            this.notificationService.success(`Entered like ${user.username}`);
            return AuthPageActions.setUser({
              user,
            });
          }),

          catchError((error) => of(error)),
        );
      }),
    );
  });
}
