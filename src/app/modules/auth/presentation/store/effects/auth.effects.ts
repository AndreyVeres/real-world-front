import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthApiActions, AuthPageActions } from '../actions/auth.actions';
import { AuthApplicationService } from '@app/modules/auth/application/auth-application.service';
import { UserEntity } from '@app/modules/auth/domain/model/user.entity';
import { SessionRepository } from '@app/modules/auth/domain/repository/session.repository';
import { Action } from '@ngrx/store';

@Injectable()
export class AuthEffects {
  public constructor(
    private actions$: Actions,
    private authAppService: AuthApplicationService,
    private sessionRepository: SessionRepository
  ) {}

  public me$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthApiActions.me),
      mergeMap((data) => {
        return this.authAppService.me().pipe(
          tap((res) => console.log(res)),
          map((response) => {
            // const userEntity = UserEntity.create(
            //   String(response.id),
            //   response.email,
            //   response.bio,
            //   response.image,
            //   response.token,
            //   response.username
            // );
            // this.sessionRepository.saveToken(userEntity.token);
            // return AuthPageActions.setUser({
            //   user: userEntity,
            // });
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
        return this.authAppService.login(data).pipe(
          map(({ user }) => {
            const userEntity = UserEntity.create(
              String(user.id),
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
