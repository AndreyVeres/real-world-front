import { inject, Injectable } from '@angular/core';
import { ApiService } from '@shared/services/';
import { API_ROUTES } from '@shared/const/api.routes';
import { BehaviorSubject, tap } from 'rxjs';
import {
  LoginPayload,
  RegisterPayload,
  TokenResponse,
} from '../model/auth.types';
import { TokenService } from '../model/token.service';
import { UserService, User } from '@entities/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiService {
  private readonly tokenService = inject(TokenService);
  private readonly userService = inject(UserService);
  $isLogged = new BehaviorSubject(!!this.tokenService.getToken());

  register(payload: RegisterPayload) {
    return this.post<TokenResponse, RegisterPayload>(
      API_ROUTES.REGISTER,
      payload
    ).pipe(tap(this.setSession.bind(this)));
  }

  login(payload: LoginPayload) {
    return this.post<TokenResponse, LoginPayload>(
      API_ROUTES.LOGIN,
      payload
    ).pipe(tap(this.setSession.bind(this)));
  }

  me() {
    return this.get<User>(API_ROUTES.ME).pipe(
      tap((user) => {
        this.userService.setUser(user);
      })
    );
  }

  private setSession({ access_token }: TokenResponse) {
    this.tokenService.saveToken(access_token);
    this.$isLogged.next(true);
  }

  removeSession() {
    this.tokenService.destroyToken();
    this.userService.clearUser();
    this.$isLogged.next(false);
  }
}
