// import { inject, Injectable } from '@angular/core';
// import { ApiService } from '@shared/services/';
// import { API_ROUTES } from '@shared/const/api.routes';
// import { BehaviorSubject, tap } from 'rxjs';
// import { LoginPayload, RegisterPayload } from '../model/auth.types';
// import { TokenService } from '../model/token.service';
// import { UserService, User } from '@entities/user';
// import { UserResponse } from '@app/modules/auth/infrastructure/http-auth.repository';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService extends ApiService {
//   private readonly tokenService = inject(TokenService);
//   private readonly userService = inject(UserService);
//   $isLogged = new BehaviorSubject(!!this.tokenService.getToken());

//   register(payload: RegisterPayload) {
//     return this.post<UserResponse, RegisterPayload>(
//       API_ROUTES.REGISTER,
//       payload
//     ).pipe(tap(this.setSession.bind(this)));
//   }

//   login(payload: LoginPayload) {
//     return this.post<UserResponse, LoginPayload>(
//       API_ROUTES.LOGIN,
//       payload
//     ).pipe(tap(this.setSession.bind(this)));
//   }

//   me() {
//     return this.get<User>(API_ROUTES.ME).pipe(
//       tap((user) => {
//         this.userService.setUser(user);
//       })
//     );
//   }

//   private setSession(response: UserResponse) {
//     const token = response.user.token;
//     console.log(token);
//     this.tokenService.saveToken(token);
//     this.$isLogged.next(true);
//   }

//   removeSession() {
//     this.tokenService.destroyToken();
//     this.userService.clearUser();
//     this.$isLogged.next(false);
//   }
// }
