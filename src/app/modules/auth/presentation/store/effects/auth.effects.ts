import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthApiActions, AuthPageActions } from '../actions/auth.actions';
import { UserEntity } from '@app/modules/auth/domain/model/user.entity';
import { SessionRepository } from '@app/modules/auth/domain/repository/session.repository';
import { LoginUseCase } from '@app/modules/auth/application/use-cases/login.use-case';
import { MeUseCase } from '@app/modules/auth/application/use-cases/me.use-case';

@Injectable()
export class AuthEffects {
  private readonly actions$ = inject(Actions);
  private readonly loginUseCase = inject(LoginUseCase);
  private readonly meUseCase = inject(MeUseCase);
  private readonly sessionRepository = inject(SessionRepository);

  public me$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthApiActions.me),
      mergeMap(() => {
        return this.meUseCase.execute().pipe(
          map(({ user }) => {
            const userEntity = UserEntity.reconstitute(
              user.id,
              user.email,
              user.bio,
              user.image,
              user.token,
              user.username
            );

            return AuthPageActions.setUser({
              user: userEntity,
            });
          }),

          catchError((error) => of(error))
        );
      })
    );
  });

  public login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthApiActions.login),
      mergeMap((data) => {
        return this.loginUseCase.execute(data).pipe(
          map(({ user }) => {
            const userEntity = UserEntity.reconstitute(
              user.id,
              user.email,
              user.bio,
              user.image,
              user.token,
              user.username
            );

            this.sessionRepository.saveToken(userEntity.token);

            return AuthPageActions.setUser({
              user: userEntity,
            });
          }),

          catchError((error) => of(error))
        );
      })
    );
  });
}
